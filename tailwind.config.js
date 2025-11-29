/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--color-primary))',
  				foreground: 'hsl(var(--color-primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--color-secondary))',
  				foreground: 'hsl(var(--color-secondary-foreground))'
  			},
  			background: 'hsl(var(--color-background))',
  			foreground: 'hsl(var(--color-foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--color-card))',
  				foreground: 'hsl(var(--color-card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--color-popover))',
  				foreground: 'hsl(var(--color-popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--color-muted))',
  				foreground: 'hsl(var(--color-muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--color-accent))',
  				foreground: 'hsl(var(--color-accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--color-destructive))',
  				foreground: 'hsl(var(--color-destructive-foreground))'
  			},
  			border: 'hsl(var(--color-border))',
  			input: 'hsl(var(--color-input))',
  			ring: 'hsl(var(--color-ring))',
  			success: {
  				DEFAULT: 'hsl(var(--color-success))',
  				foreground: 'hsl(var(--color-success-foreground))'
  			},
  			warning: {
  				DEFAULT: 'hsl(var(--color-warning))',
  				foreground: 'hsl(var(--color-warning-foreground))'
  			},
  			error: {
  				DEFAULT: 'hsl(var(--color-error))',
  				foreground: 'hsl(var(--color-error-foreground))'
  			},
  			info: {
  				DEFAULT: 'hsl(var(--color-info))',
  				foreground: 'hsl(var(--color-info-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		spacing: {
  			xs: 'var(--spacing-xs)',
  			sm: 'var(--spacing-sm)',
  			md: 'var(--spacing-md)',
  			lg: 'var(--spacing-lg)',
  			xl: 'var(--spacing-xl)',
  			'2xl': 'var(--spacing-2xl)'
  		},
  		fontFamily: {
  			sans: 'var(--font-sans)',
  			mono: 'var(--font-mono)'
  		},
  		borderRadius: {
  			none: '0px',
  			sm: 'var(--radius-sm)',
  			DEFAULT: 'var(--radius-md)',
  			md: 'var(--radius-md)',
  			lg: 'var(--radius-lg)',
  			xl: 'var(--radius-xl)',
  			'2xl': 'var(--radius-2xl)',
  			'3xl': 'var(--radius-2xl)',
  			full: '9999px'
  		},
  		boxShadow: {
  			none: 'none',
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			DEFAULT: 'var(--shadow)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)',
  			inner: 'var(--shadow-inner)'
  		}
  	}
  },
  plugins: [],
}

