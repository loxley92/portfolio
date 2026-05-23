# Portfolio Design System: Liam Oxley Designs (Master V3.0)

## 1. Color System & Themes
- **Hero Gradient**: linear-gradient(to bottom, #ffffff, #fac8a4)
- **Primary Page BG**: #F9F9F9
- **Primary Purple**: #4B32A8 (Selection/Action Color)
- **Divider Color**: #D8D8D8 (H2 Underlines)
- **Project Matrix**:
  - Core Navigation: #B9E6FF (Background for Hero/Highlights)
  - [Next Project]: [Hex Code]

## 2. Typography (Fluid & Adaptive)
- **H1 (Serif)**: Lora, 500. `clamp(2.5rem, 6vw, 4.5rem)`
- **H2 (Serif)**: Lora, 400. `clamp(1.75rem, 4vw, 2.5rem)`
  - *Detail*: 1px Underline (#D8D8D8) spans the current container width.
- **H3 (Sans)**: Montserrat, 700. `clamp(1.25rem, 2vw, 1.5rem)`
- **Body Text**: Montserrat, 400. `clamp(1rem, 1.1vw, 1.125rem)`
  - *Line Height*: 1.7 for long-form readability.

## 3. Layout & Container Architecture
- **Text Container**: Max-width 800px (Centered). Used for all narrative text.
- **Wide Container**: Max-width 1200px (Centered). Used for Case Study headers, Grids, and Large Diagrams.
- **Full Bleed**: 100vw. Used for section background colors and "Breakout" highlights.
- **Section Padding**: `clamp(4rem, 8vw, 8rem)` Y-axis.

## 4. Navigation (Stacked Sticky)
- **Main Nav**: 80px height | Transparent | z-index: 50.
- **Sub-Nav**: 150px height | Glassmorphism (bg-white/70, backdrop-blur-md) | z-index: 40.
- **Behavior**: Sub-nav pins at `top: 80px`. 
- **Interaction**: Scroll-Spy active. Highlight color matches Project Theme Color.

## 5. Components & Motion
- **Zig-Zag Grid**: Desktop (Alternating), Mobile (Image on Top).
- **Buttons**: Fully Rounded (Pill). Purple outline for secondary.
- **Dividers**: `curved-line.svg`. Fill matches the section following it.
- **Parallax**: Physics-based mouse follow (Intensity 0.1) on Hero/About illustrations.

## 6. Premium Motion & Polish
- **Smooth Scroll**: Implement Lenis.js for momentum-based scrolling.
- **Magnetic UI**: All Pill Buttons and Nav Links should have a subtle magnetic pull (Framer Motion).
- **Staggered Reveals**: Narrative text blocks should reveal line-by-line or staggered when entering the viewport.
- **Glassmorphism Detail**: Add a subtle 1px white border (0.1 opacity) to the sticky sub-nav to give it a "sharp" edge against the content.
- **Image Reveal**: Mask-reveal images with a 1.05x to 1x scale transition on scroll-entry.