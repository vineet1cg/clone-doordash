# Remaining Tasks for DoorDash Clone

This file outlines tasks that can be continued in a future session to further enhance the static DoorDash clone.

## 1. Font Decision and Implementation
The current project uses `TTNormsProCond-Blk` font, which is a commercial font.
- **Decision Needed:** Choose between:
    - Licensing `TTNormsProCond-Blk` and providing the font files.
    - Replacing `TTNormsProCond-Blk` with a similar-looking, freely available font (e.g., from Google Fonts).
- **Action:** If a free alternative is chosen, update `style.css` (and `signUp.css`) to use the new font. If licensed files are provided, integrate them using `@font-face` rules.

## 2. Populate Comprehensive Textual Content
While the structure is in place, much of the text content is still generic.
- **Action:** Go through `index.html` and `signUp.html` and replace placeholder text with actual content extracted from the live DoorDash website. This includes:
    - Specific offers and promotions.
    - Detailed descriptions in various sections.
    - Footer links and category names.
    - Sign-up form labels and privacy policy text.

## 3. Source and Replace Missing or Generic Placeholder Images
Many image sources currently point to CDN links or are placeholders.
- **Action:** Identify all images in `index.html` (and potentially `signUp.html`) and:
    - If images are missing or generic placeholders (`src=""`), find and download appropriate images from the live DoorDash website.
    - Replace CDN links with local paths to the downloaded images, or update CDN links if more specific/high-resolution versions are desired.

## 4. Implement Additional JavaScript Functionality (Optional)
The current JavaScript includes tab switching and a "See more/less" toggle. The live DoorDash site has more interactive features.
- **Decision Needed:** Identify any other interactive elements from the live DoorDash site you wish to clone (e.g., autocomplete in search, carousels, dynamic content loading, animations, etc.).
- **Action:** Implement JavaScript for the chosen additional interactive features.
