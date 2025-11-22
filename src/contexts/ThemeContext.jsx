import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'default',
  setTheme: () => {},
  themes: [],
});

/**
 * Hook to access theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * ThemeProvider component
 * Manages theme state and applies CSS variables to the document root
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} props.themes - Theme definitions object
 * @param {string} props.defaultTheme - Default theme name
 */
export const ThemeProvider = ({
  children,
  themes = {},
  defaultTheme = 'default'
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  // Apply CSS variables when theme changes
  useEffect(() => {
    const currentTheme = themes[theme];
    if (!currentTheme) {
      console.warn(`Theme "${theme}" not found. Using default theme.`);
      return;
    }

    const root = document.documentElement;

    // Apply color variables
    if (currentTheme.colors) {
      Object.entries(currentTheme.colors).forEach(([key, value]) => {
        if (typeof value === 'object') {
          // Handle nested color objects (e.g., primary.DEFAULT, primary.foreground)
          Object.entries(value).forEach(([subKey, subValue]) => {
            const varName = subKey === 'DEFAULT'
              ? `--color-${key}`
              : `--color-${key}-${subKey}`;
            root.style.setProperty(varName, subValue);
          });
        } else {
          root.style.setProperty(`--color-${key}`, value);
        }
      });
    }

    // Apply spacing variables
    if (currentTheme.spacing) {
      Object.entries(currentTheme.spacing).forEach(([key, value]) => {
        root.style.setProperty(`--spacing-${key}`, value);
      });
    }

    // Apply typography variables
    if (currentTheme.typography) {
      const { fontFamily, fontSize, fontWeight, lineHeight } = currentTheme.typography;

      if (fontFamily) {
        Object.entries(fontFamily).forEach(([key, value]) => {
          root.style.setProperty(`--font-${key}`, value);
        });
      }

      if (fontSize) {
        Object.entries(fontSize).forEach(([key, value]) => {
          root.style.setProperty(`--font-size-${key}`, value);
        });
      }

      if (fontWeight) {
        Object.entries(fontWeight).forEach(([key, value]) => {
          root.style.setProperty(`--font-weight-${key}`, value);
        });
      }

      if (lineHeight) {
        Object.entries(lineHeight).forEach(([key, value]) => {
          root.style.setProperty(`--line-height-${key}`, value);
        });
      }
    }

    // Apply border variables
    if (currentTheme.borders) {
      const { borderRadius, borderWidth } = currentTheme.borders;

      if (borderRadius) {
        Object.entries(borderRadius).forEach(([key, value]) => {
          root.style.setProperty(`--radius-${key}`, value);
        });
      }

      if (borderWidth) {
        Object.entries(borderWidth).forEach(([key, value]) => {
          root.style.setProperty(`--border-width-${key}`, value);
        });
      }
    }

    // Apply shadow variables
    if (currentTheme.shadows) {
      Object.entries(currentTheme.shadows).forEach(([key, value]) => {
        root.style.setProperty(`--shadow-${key}`, value);
      });
    }

    // Add theme attribute to root element for CSS selectors
    root.setAttribute('data-theme', theme);
  }, [theme, themes]);

  const value = {
    theme,
    setTheme,
    themes: Object.keys(themes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
