I want to build a reusable Storybook design system in React that supports multiple themes, built on top of Radix UI (unstyled, accessible primitives). This will be a personal component library I can bring to different client projects.

PROJECT GOALS:
- Use Radix UI as the foundation for accessible, unstyled components
- Create 5-6 styled components on top of Radix primitives
- Build a flexible theming system using CSS variables and React Context
- Set up Storybook with theme switcher in toolbar
- Make it package-ready for npm distribution
- Deploy Storybook as a live documentation site

WHY RADIX UI:
- Unstyled, accessible primitives (WAI-ARIA compliant)
- You only style the visuals, behavior is handled
- Used by shadcn/ui, so familiar patterns
- Can swap with Headless UI or React Aria if preferred

STEP-BY-STEP PLAN:

1. Initialize project with Vite + React, install Storybook and Radix UI:
   - Install @radix-ui/react-* primitives as needed
   - Create folder structure:
     - src/components/ (styled components wrapping Radix)
     - src/tokens/ (design tokens)
     - src/themes/ (theme definitions)
     - src/contexts/ (ThemeProvider)
     - src/utils/ (cn utility for class merging)

2. Create design token files in src/tokens/:
   - colors.js (primary, secondary, neutrals, semantic colors)
   - spacing.js (xs, sm, md, lg, xl, 2xl)
   - typography.js (fontFamily, fontSize, fontWeight, lineHeight)
   - borders.js (radius values, border widths)
   - shadows.js (elevation levels)

3. Build theming system:
   - Create ThemeProvider component with React Context
   - Write utility function to convert theme object to CSS variables
   - Create 3 theme presets: default.js, dark.js, and one branded example
   - Set up Tailwind CSS with CSS variables approach (optional but recommended)

4. Build these components wrapping Radix primitives:
   - Button (wrap basic button element with variants: primary, secondary, ghost, outline)
   - Input (wrap basic input with validation states)
   - Dialog/Modal (wrap @radix-ui/react-dialog)
   - Select/Dropdown (wrap @radix-ui/react-select)
   - Switch/Toggle (wrap @radix-ui/react-switch)
   - Tooltip (wrap @radix-ui/react-tooltip)

5. Style components to use theme tokens:
   - All colors, spacing, typography reference CSS variables
   - Radix handles accessibility (focus-visible, ARIA, keyboard nav)
   - Add your visual design on top (colors, spacing, transitions)
   - Make components responsive

6. Write Storybook stories for each component:
   - Show all variants in separate stories
   - Add interactive controls for props
   - Include auto-generated documentation
   - Demonstrate Radix features (keyboard nav, focus management)
   - Create composite examples

7. Configure Storybook theme switcher:
   - Add global decorator for ThemeProvider
   - Add toolbar control to switch between themes
   - Make themes hot-swappable in real-time

8. Package themes for distribution:
   - Export theme objects from src/themes/index.js
   - Create CSS variable versions as separate files
   - Document how to create custom themes
   - Export both components and primitives

9. Prepare for distribution:
   - Configure package.json with proper exports
   - Set up build script for bundling
   - Ensure Radix dependencies are peer dependencies
   - Create clean public API

10. Deploy and document:
    - Build Storybook for production
    - Deploy to Netlify or Vercel
    - Write comprehensive README with:
      - Installation (including Radix peer deps)
      - Usage examples
      - Theming guide
      - Accessibility features from Radix

ALTERNATIVE OPTIONS TO CONSIDER:
- Headless UI (by Tailwind team) - similar to Radix
- React Aria (by Adobe) - more comprehensive but heavier
- Ariakit - another excellent unstyled option

START WITH: Project initialization with Radix UI, folder structure, and design tokens setup.

Let me know when each phase is complete so I can review before moving to the next step.
