## Structure Preservation
- Copy all HTML tags, divs, Tailwind classes, spacing, and font hierarchy exactly.
- Do not remove, add, or rearrange any structural elements.
- H1 → H2 → H3 hierarchy must remain intact.
- Preserve all styling classes, wrappers, and layout from template-service.tsx including its sub components.
- When generating the page, and subcomponent that mimics the template ones, generate a subfolder of the services like the template strcuture 
- so when you go to make a service concept like "individual therapy" you should create a directory underneath the services directory, and within that, you should include the indiviudal therapy components, and any related components you generate for it


## Content Replacement
- Replace text content only, based on the topic and brand context.
- Maintain proper HTML formatting (<p>, <ul>, <h1-h3>).

## SEO Instructions
- Generate 5 high-intent keywords naturally and what people would google regarding the page topic e.g. for the adhd page "adhd therapy" as a key word.
- Maintain ~2.0% keyword density across the content.
- Integrate keywords naturally in H1, H2, H3, and paragraphs.
- SEO correctness is critical. Generate a markdown file called "Rank math scores and category ( e.g. service)" at the end of your page     generations and include the pages rank math score.
- If the rank math score in the markdown file is less than 85%, adjust that pages content until you improve the score above said score.
- You figure out how to do the math for a rank math page equivalent score 

## links
- make sure to include one outbound link that is either .edu or .gov that is relevant to the content on the page.
- do not move on until you can verify that the outbound link is not a 404 and is valid.
- Generate an internal link to another services page within the content as well that is relevant within the content.

## side bar
- update the side bar on the page with the services links to reflect the actual services you generate. Those links should all link to the appropriate services page

## navbar 
- make sure to update the navigation bar in the navbar.tsx file after generating a new page and route it properly in the dropdown please

