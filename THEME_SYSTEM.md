# Theme System Documentation

## Overview
This application includes a dynamic theme switching system that allows users to change between 5 professionally designed color themes. The system uses CSS custom properties (CSS variables) for seamless, instant theme transitions.

## Available Themes

### 1. **Modern Slate with Gold** (Default)
- **Background**: #2C3E50 (Slate blue/gray)
- **Primary Text**: #ECF0F1 (Soft white)
- **Accent**: #D4AF37 (Metallic gold)
- **Secondary Accent**: #3498DB (Professional blue)
- **Highlight**: #E67E22 (Warm orange)
- **Best For**: Modern, professional applications with elegant accents

### 2. **Dark Elegance**
- **Background**: #1E1E2F (Dark navy/gray)
- **Primary Text**: #E5E5E5 (Light gray)
- **Accent**: #D4AF37 (Gold)
- **Secondary Accent**: #7F9CF5 (Soft blue)
- **Highlight**: #FBBF50 (Soft yellow-gold)
- **Best For**: Dashboards, developer tools, dark mode enthusiasts

### 3. **Minimal Professional**
- **Background**: #FFFFFF (White)
- **Primary Text**: #212121 (Dark charcoal)
- **Accent**: #D4AF37 (Gold)
- **Secondary Accent**: #0D6EFD (Professional blue)
- **Highlight**: #6C757D (Gray for subtle elements)
- **Best For**: Clean, minimal web apps, corporate presentations

### 4. **Muted Luxury**
- **Background**: #F8F9FA (Off-white)
- **Primary Text**: #333333 (Charcoal)
- **Accent**: #D4AF37 (Gold)
- **Secondary Accent**: #0A9396 (Teal)
- **Highlight**: #EE6C4D (Warm orange)
- **Best For**: Premium applications with sophisticated, soft tones

### 5. **Deep Blue & Gold**
- **Background**: #0B1D2A (Navy/dark)
- **Primary Text**: #E5E5E5 (Light gray)
- **Accent**: #D4AF37 (Metallic gold)
- **Secondary Accent**: #17C3B2 (Turquoise)
- **Highlight**: #F4D35E (Golden yellow)
- **Best For**: Luxurious, high-end, professional applications

## How It Works

### CSS Custom Properties
Themes are defined using CSS custom properties in `src/styles/_colors.scss`:

```css
:root {
  --theme-bg-primary: /* Primary background color */
  --theme-bg-secondary: /* Secondary background color */
  --theme-text-primary: /* Main text color */
  --theme-text-secondary: /* Secondary text color */
  --theme-accent: /* Main accent color */
  --theme-accent-secondary: /* Secondary accent color */
  --theme-accent-highlight: /* Highlight/button color */
  --theme-accent-light: /* Light variant of accent */
  --theme-border: /* Border color */
  --theme-transition: /* Smooth transition duration */
  --theme-duration: /* Animation duration */
}
```

### Data Attributes
Each theme is applied as a `data-theme` attribute:

```html
<!-- Modern Slate with Gold -->
<html data-theme="modern-slate-gold">

<!-- Dark Elegance -->
<html data-theme="dark-elegance">

<!-- Minimal Professional -->
<html data-theme="minimal-professional">

<!-- Muted Luxury -->
<html data-theme="muted-luxury">

<!-- Deep Blue & Gold -->
<html data-theme="deep-blue-gold">
```

### Theme Persistence
User's theme preference is saved to `localStorage` and restored on subsequent visits.

## Using the Theme Switcher

### Location
- The theme switcher button appears as a floating button in the bottom-right corner (✨)
- Click to open the theme menu with all available options
- Click a theme to apply it instantly

### Features
- 🎨 Real-time theme transitions
- 💾 Persistent storage (survives page reloads)
- ✨ Animated theme button with hover effects
- 📱 Responsive design (works on mobile)
- ⚡ Instant visual feedback

## Implementing Themes in Components

### Using CSS Variables
Instead of hardcoded colors, use CSS custom properties in SCSS:

```scss
.component {
  background: var(--theme-bg-primary);
  color: var(--theme-text-primary);
  border: 1px solid var(--theme-border);
  transition: var(--theme-transition);
  
  &:hover {
    color: var(--theme-accent);
  }
}
```

### Color Mapping
- **Backgrounds**: `var(--theme-bg-primary)`, `var(--theme-bg-secondary)`
- **Text**: `var(--theme-text-primary)`, `var(--theme-text-secondary)`
- **Accents**: `var(--theme-accent)`, `var(--theme-accent-secondary)`, `var(--theme-accent-highlight)`
- **Utilities**: `var(--theme-accent-light)`, `var(--theme-border)`

## Adding New Themes

1. Add theme definition in `src/styles/_colors.scss`:

```scss
[data-theme="custom-theme"] {
  --theme-bg-primary: #ffffff;
  --theme-bg-secondary: #f5f5f5;
  --theme-text-primary: #000000;
  --theme-text-secondary: #666666;
  --theme-accent: #ff6b6b;
  --theme-accent-secondary: #4ecdc4;
  --theme-accent-highlight: #ffe66d;
  --theme-accent-light: rgba(255, 107, 107, 0.1);
  --theme-border: rgba(255, 107, 107, 0.2);
}
```

2. Add to THEMES array in `src/components/ThemeSwitcher/ThemeSwitcher.tsx`:

```typescript
const THEMES: { id: Theme; label: string; description: string }[] = [
  // ... existing themes ...
  {
    id: 'custom-theme',
    label: 'Custom Theme',
    description: 'Your theme description'
  },
];
```

3. Update the Type definition:

```typescript
type Theme = 
  | 'modern-slate-gold' 
  | 'dark-elegance' 
  | 'minimal-professional' 
  | 'muted-luxury' 
  | 'deep-blue-gold'
  | 'custom-theme';
```

## Performance Notes

- **Zero Runtime Overhead**: Uses native CSS variables (no JavaScript color calculations)
- **Instant Transitions**: CSS `transition` property handles smooth color changes
- **Lightweight Storage**: Only stores a simple string in localStorage
- **No Flickering**: Theme is applied on mount before first render

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Custom Properties support required
- ✅ No polyfills needed

## Files Modified

- `src/styles/_colors.scss` - Theme definitions
- `src/components/ThemeSwitcher/ThemeSwitcher.tsx` - Theme switcher component
- `src/components/ThemeSwitcher/ThemeSwitcher.scss` - Theme switcher styles
- `src/components/index.ts` - Export theme switcher
- `src/App.tsx` - Include theme switcher in main layout
- `src/index.css` - Use CSS variables for global styles
