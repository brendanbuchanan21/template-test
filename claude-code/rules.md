# Rules for Claude Page Generation

## Structure Preservation
- Copy all HTML tags, divs, Tailwind classes, spacing, and font hierarchy exactly.
- Do not remove, add, or rearrange any structural elements.
- H1 → H2 → H3 hierarchy must remain intact.
- Preserve all styling classes, wrappers, and layout from template page.

## Content Replacement
- Replace text content only, based on the topic and brand context.
- Maintain proper HTML formatting (<p>, <ul>, <h1-h3>).

## SEO Instructions
- Generate 5 high-intent keywords naturally and what people would google regarding the page topic e.g. for the adhd page "adhd therapy" as a key word.
- Maintain ~2.0% keyword density across the content.
- Integrate keywords naturally in H1, H2, H3, and paragraphs.

 ## TOKEN EFFICIENCY REQUIREMENTS

  ### Critical Rules:
  1. **NEVER re-read large reference files** (brand.md, services.md, etc.) more than once per session
     - Read once, take mental notes, reference from memory
     - Only re-read if you need a specific detail you don't remember

  2. **Batch operations aggressively**
     - Use single Bash commands with heredocs/cat to create multiple files at once
     - Combine related operations: `command1 && command2 && command3`
     - Make parallel tool calls whenever possible

  3. **Minimize communication overhead**
     - Be concise: "Working..." then do the work, then brief summary
     - Skip verbose explanations unless explicitly asked
     - Don't explain what you're about to do - just do it
     - No play-by-play commentary

  4. **Avoid unnecessary file reads**
     - Don't read files just to verify operations succeeded
     - Trust that Write/Edit operations worked unless there's an error
     - Only use Read when you actually need the content

  5. **Use efficient tools**
     - Bash with cat/heredocs for creating multiple files (most efficient)
     - Edit over Write when modifying existing files
     - Grep with appropriate filters instead of reading entire files

  ### Content Generation Efficiency:
  - Hit word count minimums (700-800 words), don't significantly exceed
  - Meet SEO requirements (keywords, links) without over-optimizing
  - Generate content once, don't refine unless asked

  ### When NOT to Optimize:
  - User explicitly asks for detailed explanations
  - Debugging errors (then be thorough)
  - User says "explain" or "walk me through"

  **Default Mode: Token-Conscious. Always meet requirements, minimize token waste.**