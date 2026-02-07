# Color Variable System - Documentation

## Overview
This project uses a centralized color management system that makes it easy to maintain consistent themes and quickly update colors across the entire application.

## File Structure

```
DynamicDuo/src/
├── styles/
│   ├── _colors.scss       # SCSS color variables
│   ├── _index.scss        # Main styles index (imports colors)
│   └── themes.ts          # TypeScript theme configuration
└── components/
    └── [Component]/
        └── [Component].scss  # Imports styles/index
```

## How to Use

### 1. In SCSS Files

Import the colors at the top of any component SCSS file:

```scss
@import '../../styles/index';

.my-component {
  background-color: $primary-blue;
  color: $color-text-primary;
}
```

### 2. Available Color Categories

#### **Primary Colors (Brand)**
- `$primary-blue` - Main brand color (#2563eb)
- `$primary-blue-hover` - Hover state (#1d4ed8)
- `$primary-blue-light` - Light accent (#3b82f6)
- `$primary-blue-lightest` - Very light background (#dbeafe)

#### **Neutral Colors (Grayscale)**
- `$white` - Pure white (#ffffff)
- `$gray-50` through `$gray-900` - Gray scale
- `$black` - Pure black (#000000)

#### **Success Colors (Green)**
- `$success-light` - Light green background (#dcfce7)
- `$success` - Main success color (#059669)
- `$success-dark` - Dark success (#047857)

#### **Accent Colors (Purple)**
- `$accent-light` - Light purple background (#f3e8ff)
- `$accent` - Main accent color (#7c3aed)
- `$accent-dark` - Dark accent (#6d28d9)

#### **Product Teaser Theme**
- `$product-sunset` - Sunset orange (#ff7847)
- `$product-ember` - Dark brown (#2b0f0c)
- `$product-rose` - Light pink (#fdd7c9)
- `$product-sand` - Light beige (#fff4ee)
- `$product-ink` - Very dark brown (#1b1210)
- `$product-ocean` - Deep blue (#0e3d59)
- `$product-warm-1` to `$product-warm-4` - Warm gradient colors
- `$product-brown` - Medium brown (#4b2c24)
- `$product-brown-light` - Light brown (#b5441c)

#### **Semantic Colors (Application)**
These are the most commonly used colors that map to specific UI purposes:

- `$color-background` - Default page background
- `$color-background-light` - Light background (cards, modals)
- `$color-background-dark` - Slightly darker background

- `$color-text-primary` - Main text color
- `$color-text-secondary` - Secondary text (descriptions)
- `$color-text-tertiary` - Tertiary text
- `$color-text-light` - Light text
- `$color-text-white` - White text

- `$color-border` - Default border color
- `$color-border-light` - Light border color

- `$color-button-primary` - Primary button background
- `$color-button-primary-hover` - Primary button hover
- `$color-button-primary-text` - Primary button text

- `$color-button-secondary` - Secondary button background
- `$color-button-secondary-hover` - Secondary button hover
- `$color-button-secondary-text` - Secondary button text

#### **Special Colors**
- `$overlay-dark` - Dark overlay (rgba(0, 0, 0, 0.4))
- `$overlay-darker` - Darker overlay (rgba(0, 0, 0, 0.5))
- `$overlay-light` - Light blue overlay
- `$focus-ring` - Focus ring color
- `$focus-ring-double` - Double focus ring (for complex focus states)
- `$gradient-product` - Product section gradient

## Best Practices

### 1. Use Semantic Colors First
Always prefer semantic colors over direct color values:

✅ **Good:**
```scss
.header {
  background-color: $color-background-light;
  color: $color-text-primary;
}
```

❌ **Bad:**
```scss
.header {
  background-color: $white;
  color: $gray-900;
}
```

### 2. Maintain Consistency
Use the same color variables for similar UI elements across components:

```scss
// All primary buttons should use the same colors
.button--primary {
  background-color: $color-button-primary;
  color: $color-button-primary-text;
  
  &:hover {
    background-color: $color-button-primary-hover;
  }
}
```

### 3. Document Custom Colors
If you need to add new colors, add them to `_colors.scss` with clear comments:

```scss
// ============================================
// CUSTOM FEATURE COLORS
// ============================================
$feature-alert-bg: #fef2f2;
$feature-alert-text: #dc2626;
```

## Changing Themes

### Quick Theme Updates

To change the entire color scheme, edit values in [_colors.scss](src/styles/_colors.scss):

```scss
// Change primary brand color from blue to purple
$primary-blue: #7c3aed;  // Changed from #2563eb
$primary-blue-hover: #6d28d9;  // Changed from #1d4ed8
```

All components using `$primary-blue` will automatically update!

### TypeScript Theme System

For JavaScript/TypeScript integration, use the theme configuration:

```typescript
import { defaultTheme, darkTheme, applyTheme } from './styles/themes';

// Switch to dark theme
applyTheme(darkTheme);

// Access colors in JavaScript
const buttonColor = defaultTheme.primary.main;
```

## Adding New Components

When creating a new component:

1. Import the color system:
```scss
@import '../../styles/index';
```

2. Use semantic color variables:
```scss
.new-component {
  background-color: $color-background;
  color: $color-text-primary;
  border: 1px solid $color-border;
}
```

## Migration Guide

If you have hardcoded colors in your components:

**Before:**
```scss
.card {
  background-color: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
}
```

**After:**
```scss
@import '../../styles/index';

.card {
  background-color: $color-background-light;
  color: $color-text-primary;
  border: 1px solid $color-border;
}
```

## Color Reference Chart

| Use Case | Variable | Hex Value |
|----------|----------|-----------|
| Page background | `$color-background` | #f9fafb |
| Card background | `$color-background-light` | #ffffff |
| Main text | `$color-text-primary` | #111827 |
| Secondary text | `$color-text-secondary` | #6b7280 |
| Primary button | `$color-button-primary` | #2563eb |
| Border | `$color-border` | #e5e7eb |
| Success indicator | `$success` | #059669 |
| Accent color | `$accent` | #7c3aed |

## Support

For questions or issues with the color system:
1. Check [_colors.scss](src/styles/_colors.scss) for all available variables
2. Review existing component implementations for examples
3. Consult [themes.ts](src/styles/themes.ts) for TypeScript integration

---

**Benefits of This System:**
- ✅ Easy theme switching
- ✅ Consistent colors across the app
- ✅ Single source of truth
- ✅ Type-safe theme management
- ✅ Simple maintenance
- ✅ Quick brand updates
