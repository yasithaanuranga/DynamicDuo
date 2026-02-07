// ============================================
// TYPESCRIPT THEME CONFIGURATION
// Type-safe theme management system
// ============================================

export interface Theme {
  // Primary Colors
  primary: {
    main: string;
    hover: string;
    light: string;
    lightest: string;
  };

  // Neutral Colors
  neutral: {
    white: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray900: string;
    black: string;
  };

  // Success Colors
  success: {
    light: string;
    main: string;
    dark: string;
  };

  // Accent Colors
  accent: {
    light: string;
    main: string;
    dark: string;
  };

  // Product Theme
  product: {
    sunset: string;
    ember: string;
    rose: string;
    sand: string;
    ink: string;
    ocean: string;
    warm1: string;
    warm2: string;
    warm3: string;
    warm4: string;
    brown: string;
    brownLight: string;
  };

  // Semantic Colors
  semantic: {
    background: string;
    backgroundLight: string;
    backgroundDark: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textLight: string;
    textWhite: string;
    border: string;
    borderLight: string;
  };

  // Button Colors
  button: {
    primaryBg: string;
    primaryBgHover: string;
    primaryText: string;
    secondaryBg: string;
    secondaryBgHover: string;
    secondaryText: string;
  };
}

// Default Theme Configuration
export const defaultTheme: Theme = {
  primary: {
    main: '#2563eb',
    hover: '#1d4ed8',
    light: '#3b82f6',
    lightest: '#dbeafe',
  },

  neutral: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray900: '#111827',
    black: '#000000',
  },

  success: {
    light: '#dcfce7',
    main: '#059669',
    dark: '#047857',
  },

  accent: {
    light: '#f3e8ff',
    main: '#7c3aed',
    dark: '#6d28d9',
  },

  product: {
    sunset: '#ff7847',
    ember: '#2b0f0c',
    rose: '#fdd7c9',
    sand: '#fff4ee',
    ink: '#1b1210',
    ocean: '#0e3d59',
    warm1: '#fff1e8',
    warm2: '#ffe8dd',
    warm3: '#fff8f2',
    warm4: '#ffe0d4',
    brown: '#4b2c24',
    brownLight: '#b5441c',
  },

  semantic: {
    background: '#f9fafb',
    backgroundLight: '#ffffff',
    backgroundDark: '#f3f4f6',
    textPrimary: '#111827',
    textSecondary: '#6b7280',
    textTertiary: '#4b5563',
    textLight: '#374151',
    textWhite: '#ffffff',
    border: '#e5e7eb',
    borderLight: '#d1d5db',
  },

  button: {
    primaryBg: '#2563eb',
    primaryBgHover: '#1d4ed8',
    primaryText: '#ffffff',
    secondaryBg: '#ffffff',
    secondaryBgHover: '#f9fafb',
    secondaryText: '#2563eb',
  },
};

// Example: Alternative Dark Theme (ready for future use)
export const darkTheme: Theme = {
  primary: {
    main: '#3b82f6',
    hover: '#2563eb',
    light: '#60a5fa',
    lightest: '#1e3a8a',
  },

  neutral: {
    white: '#1f2937',
    gray50: '#111827',
    gray100: '#1f2937',
    gray200: '#374151',
    gray300: '#4b5563',
    gray400: '#6b7280',
    gray500: '#9ca3af',
    gray600: '#d1d5db',
    gray700: '#e5e7eb',
    gray900: '#f9fafb',
    black: '#ffffff',
  },

  success: {
    light: '#065f46',
    main: '#10b981',
    dark: '#34d399',
  },

  accent: {
    light: '#581c87',
    main: '#a78bfa',
    dark: '#c4b5fd',
  },

  product: {
    sunset: '#ff7847',
    ember: '#2b0f0c',
    rose: '#fdd7c9',
    sand: '#fff4ee',
    ink: '#1b1210',
    ocean: '#0e3d59',
    warm1: '#fff1e8',
    warm2: '#ffe8dd',
    warm3: '#fff8f2',
    warm4: '#ffe0d4',
    brown: '#4b2c24',
    brownLight: '#b5441c',
  },

  semantic: {
    background: '#111827',
    backgroundLight: '#1f2937',
    backgroundDark: '#030712',
    textPrimary: '#f9fafb',
    textSecondary: '#9ca3af',
    textTertiary: '#d1d5db',
    textLight: '#e5e7eb',
    textWhite: '#111827',
    border: '#374151',
    borderLight: '#4b5563',
  },

  button: {
    primaryBg: '#3b82f6',
    primaryBgHover: '#2563eb',
    primaryText: '#ffffff',
    secondaryBg: '#1f2937',
    secondaryBgHover: '#374151',
    secondaryText: '#3b82f6',
  },
};

// Theme utility functions
export const getTheme = (themeName: 'default' | 'dark' = 'default'): Theme => {
  return themeName === 'dark' ? darkTheme : defaultTheme;
};

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  
  // Apply CSS custom properties
  root.style.setProperty('--color-primary', theme.primary.main);
  root.style.setProperty('--color-primary-hover', theme.primary.hover);
  root.style.setProperty('--color-background', theme.semantic.background);
  root.style.setProperty('--color-text-primary', theme.semantic.textPrimary);
  // Add more as needed...
};
