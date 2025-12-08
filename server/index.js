// index.js
import express from "express";
import multer from "multer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path from "path";
import fetch from "node-fetch";
import fs from "fs/promises";

dotenv.config();

const app = express();
app.use(express.json());
const port = 3001;

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Configure S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Simple file upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const fileContent = req.file.buffer;
    const fileName = req.file.originalname;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ACL: "public-read", // makes it publicly accessible
    });

    await s3.send(command);

    res.json({
      url: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
});

// Nano Banano image generation endpoint
app.post("/generate-image", async (req, res) => {
  try {
    const { prompt, filename } = req.body;

    if (!prompt || !filename) {
      return res.status(400).json({ error: "Prompt and filename are required" });
    }

    // Call Google's Imagen API (Nano Banano)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:generate?key=${process.env.NANOBANANO_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          number_of_images: 1,
          aspect_ratio: "16:9",
          safety_filter_level: "block_some",
          person_generation: "allow_all"
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Nano Banano API error:", errorText);
      return res.status(response.status).json({ error: "Image generation failed", details: errorText });
    }

    const data = await response.json();

    if (!data.generatedImages || data.generatedImages.length === 0) {
      return res.status(500).json({ error: "No image generated" });
    }

    // Get the base64 image data
    const imageData = data.generatedImages[0].image.imageBytes;
    const imageBuffer = Buffer.from(imageData, 'base64');

    // Save to public folder
    const publicPath = path.join(process.cwd(), '../client/public', filename);
    await fs.writeFile(publicPath, imageBuffer);

    res.json({
      success: true,
      url: `/${filename}`,
      message: "Image generated and saved successfully"
    });

  } catch (err) {
    console.error("Error generating image:", err);
    res.status(500).json({ error: "Error generating image", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
