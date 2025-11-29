# Radix Design System

A production-ready, themeable React component library built on **Radix UI** primitives with **Tailwind CSS**. Perfect for creating accessible, customizable user interfaces across multiple client projects.

[![npm version](https://img.shields.io/npm/v/@jacopocontin/design-system.svg)](https://www.npmjs.com/package/@jacopocontin/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Multiple Themes** - Default (light), Dark, Luminist, and Brutalist themes with hot-swappable support
- ♿ **Accessibility First** - Built on Radix UI for WAI-ARIA compliance and keyboard navigation
- 🎯 **Design Tokens** - Centralized color, spacing, typography, borders, and shadows
- 🔧 **Composable** - Radix Slot pattern for flexible component composition
- 📦 **Tree-shakeable** - Optimized bundle size with ESM support
- 🎭 **Storybook Docs** - Interactive documentation with live examples
- 💅 **Tailwind CSS** - Utility-first styling with CSS variables for theming

## 📦 Installation

```bash
npm install @jacopocontin/design-system
```

### Peer Dependencies

```bash
npm install react react-dom
```

## 🚀 Quick Start

```jsx
import { Button, ThemeProvider, themes } from '@jacopocontin/design-system';
import '@jacopocontin/design-system/styles.css';

function App() {
  return (
    <ThemeProvider themes={themes} defaultTheme="default">
      <div className="p-8">
        <h1>Welcome to Radix Design System</h1>
        <Button variant="primary">Click me</Button>
      </div>
    </ThemeProvider>
  );
}
```

## 🎨 Theming

### Using Built-in Themes

```jsx
import { ThemeProvider, themes } from '@jacopocontin/design-system';

function App() {
  return (
    <ThemeProvider themes={themes} defaultTheme="dark">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

Available themes:
- `default` - Clean light theme
- `dark` - Dark mode theme
- `luminist` - Atmospheric theme inspired by luminism art movement with soft golden light
- `brutalist` - Brutalist retro theme with burnt orange and bold typography

### Switching Themes Dynamically

```jsx
import { useTheme } from '@jacopocontin/design-system';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="default">Light</option>
      <option value="dark">Dark</option>
      <option value="luminist">Luminist</option>
      <option value="brutalist">Brutalist</option>
    </select>
  );
}
```

### Creating Custom Themes

```jsx
import { ThemeProvider } from '@jacopocontin/design-system';

const customTheme = {
  name: 'custom',
  colors: {
    primary: {
      DEFAULT: '280 100% 65%',  // Purple
      foreground: '0 0% 100%',
    },
    background: '0 0% 100%',
    foreground: '222 47% 11%',
    // ... other colors
  },
  spacing: { /* ... */ },
  typography: { /* ... */ },
  borders: { /* ... */ },
  shadows: { /* ... */ },
};

const allThemes = {
  default: defaultTheme,
  custom: customTheme,
};

<ThemeProvider themes={allThemes} defaultTheme="custom">
  {/* Your app */}
</ThemeProvider>
```

## 🧩 Components

### Button

```jsx
import { Button } from '@jacopocontin/design-system';

<Button variant="primary" size="md">Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
```

**Props:**
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `destructive`
- `size`: `sm` | `md` | `lg`
- `asChild`: boolean - Use Radix Slot for composition
- `disabled`: boolean

### Input

```jsx
import { Input } from '@jacopocontin/design-system';

<Input placeholder="Enter text..." />
<Input state="error" defaultValue="Invalid" />
<Input state="success" defaultValue="Valid" />
<Input type="email" placeholder="Email..." />
```

**Props:**
- `state`: `default` | `error` | `success`
- `type`: Standard HTML input types
- `disabled`: boolean

### Dialog (Modal)

```jsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@jacopocontin/design-system';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description here.</DialogDescription>
    </DialogHeader>
    <p>Content goes here</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Select (Dropdown)

```jsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@jacopocontin/design-system';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Switch (Toggle)

```jsx
import { Switch } from '@jacopocontin/design-system';

const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onCheckedChange={setEnabled} />
```

### Tooltip

```jsx
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@jacopocontin/design-system';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Icon

The design system includes **Lucide React** icons built-in with 25+ commonly used icons:

```jsx
import {
  Icon,
  CheckIcon,
  CloseIcon,
  AlertIcon,
  InfoIcon,
  HeartIcon,
  SettingsIcon,
  StarIcon,
  SearchIcon,
  MenuIcon,
  // ... and more
} from '@jacopocontin/design-system';

// Using Icon wrapper with included icons
<Icon size="md" variant="primary">
  <CheckIcon />
</Icon>

<Icon size="lg" variant="success">
  <HeartIcon />
</Icon>
```

**Available Sizes:** `xs` (12px) | `sm` (16px) | `md` (20px) | `lg` (24px) | `xl` (32px) | `2xl` (40px)

**Available Variants:** `default` | `primary` | `secondary` | `muted` | `error` | `success` | `warning`

**Included Lucide Icons (25+):**
- CheckIcon, CloseIcon, AlertIcon, InfoIcon, HeartIcon, SettingsIcon
- StarIcon, SearchIcon, MenuIcon, HomeIcon, UserIcon, MailIcon
- BellIcon, CalendarIcon, ClockIcon, DownloadIcon, UploadIcon
- TrashIcon, EditIcon, PlusIcon, MinusIcon
- ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon

**Using Any Lucide Icon:**

The design system includes lucide-react as a dependency. Use any icon from the [Lucide library](https://lucide.dev/icons/):

```jsx
import { Icon } from '@jacopocontin/design-system';
import { Sparkles, Zap, Coffee } from 'lucide-react';

<Icon size="md" variant="primary">
  <Sparkles />
</Icon>

<Icon size="lg" variant="warning">
  <Zap />
</Icon>
```

**Using Other Icon Libraries:**

The Icon component also works with other libraries:

```jsx
// Heroicons
import { StarIcon } from '@heroicons/react/24/outline';
<Icon size="lg"><StarIcon /></Icon>

// React Icons
import { FaStar } from 'react-icons/fa';
<Icon size="md"><FaStar /></Icon>
```

## 🎨 Design Tokens

Access design tokens directly for custom components:

```jsx
import { colors, spacing, shadows } from '@jacopocontin/design-system';

// Use in your custom components
const customStyles = {
  color: `hsl(${colors.primary.DEFAULT})`,
  padding: spacing.md,
  boxShadow: shadows.lg,
};
```

## 🎨 Tailwind CSS Integration

This design system is **built with Tailwind CSS** and works seamlessly with or without Tailwind in your project.

### Without Tailwind in Your App

Just import the CSS file - all styles are included:

```jsx
import '@jacopocontin/design-system/styles.css';
```

The CSS bundle includes all Tailwind utilities used by components. No Tailwind setup required!

### With Tailwind in Your App

If your app also uses Tailwind, you can extend the design system's tokens:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@jacopocontin/design-system/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // Your custom styles work alongside the design system
    },
  },
};
```

### Theme Switching

All themes use CSS variables, so switching themes is instant:

```jsx
import { ThemeProvider, useTheme, themes } from '@jacopocontin/design-system';

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme('default')}>☀️ Light</button>
      <button onClick={() => setTheme('dark')}>🌙 Dark</button>
      <button onClick={() => setTheme('luminist')}>✨ Luminist</button>
      <button onClick={() => setTheme('brutalist')}>🔲 Brutalist</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider themes={themes} defaultTheme="default">
      <ThemeSwitcher />
      {/* Your app */}
    </ThemeProvider>
  );
}
```

**Available Themes:**
- `default` - Clean light theme
- `dark` - Dark mode theme
- `luminist` - Atmospheric theme inspired by luminism art movement with soft golden light
- `brutalist` - Brutalist retro theme with burnt orange and bold typography

**Preview themes:** Visit the [Storybook](https://design-system-ecru.vercel.app/) and use the theme switcher in the toolbar!

## ♿ Accessibility

All components are built on Radix UI primitives, ensuring:

- ✅ WAI-ARIA compliant markup
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Focus management
- ✅ Proper semantic HTML

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Build library
npm run build:lib

# Run dev server
npm run dev
```

## 📚 Documentation

View the full interactive documentation at [design-system-ecru.vercel.app](https://design-system-ecru.vercel.app/)

## 🧪 Tech Stack

- **React 18/19** - UI library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **Storybook 8** - Component documentation

## 📄 License

MIT © [Your Name]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourorg/radix-design-system/issues)
- 📖 Docs: [Storybook](https://your-storybook-url.com)
