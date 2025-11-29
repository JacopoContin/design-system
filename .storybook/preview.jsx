import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from '../src/contexts/ThemeContext';
import { themes } from '../src/themes';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we use themes
    },
  },

  // Global types for toolbar controls
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'default', title: 'Default (Light)', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'ocean', title: 'Ocean (Branded)', icon: 'paintbrush' },
          { value: 'brutalist', title: 'Brutalist Retro', icon: 'box' },
        ],
        dynamicTitle: true,
      },
    },
  },

  // Global decorator to wrap all stories with ThemeProvider
  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme || 'default';

      return (
        <ThemeProvider themes={themes} defaultTheme={themeName}>
          <ThemeUpdater themeName={themeName} />
          <div className="min-h-screen p-8">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

// Component to update theme when toolbar changes
function ThemeUpdater({ themeName }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(themeName);
  }, [themeName, setTheme]);

  return null;
}

export default preview;
