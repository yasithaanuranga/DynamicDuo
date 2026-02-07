import { useState, useEffect } from 'react';
import './ThemeSwitcher.scss';

type Theme = 
  | 'modern-slate-gold' 
  | 'dark-elegance' 
  | 'minimal-professional' 
  | 'muted-luxury' 
  | 'deep-blue-gold';

const THEMES: { id: Theme; label: string; description: string }[] = [
  {
    id: 'modern-slate-gold',
    label: 'Modern Slate',
    description: 'Slate with Gold accents'
  },
  {
    id: 'dark-elegance',
    label: 'Dark Elegance',
    description: 'Navy with Gold highlights'
  },
  {
    id: 'minimal-professional',
    label: 'Minimal Pro',
    description: 'Clean & professional'
  },
  {
    id: 'muted-luxury',
    label: 'Muted Luxury',
    description: 'Soft tones, premium feel'
  },
  {
    id: 'deep-blue-gold',
    label: 'Deep Blue',
    description: 'Rich & luxurious'
  },
];

const getSavedTheme = (): Theme => {
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved && THEMES.some(t => t.id === saved)) {
    return saved;
  }
  return 'modern-slate-gold';
};

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => getSavedTheme());
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme to DOM when component mounts or theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button
        className="theme-switcher__toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Change theme"
        aria-label="Theme menu"
      >
        <span className="theme-switcher__icon">✨</span>
      </button>

      {isOpen && (
        <div className="theme-switcher__menu">
          <div className="theme-switcher__header">
            <h3>Choose Theme</h3>
          </div>
          <div className="theme-switcher__options">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                className={`theme-switcher__option ${
                  currentTheme === theme.id ? 'theme-switcher__option--active' : ''
                }`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <span className="theme-switcher__option-label">{theme.label}</span>
                <span className="theme-switcher__option-description">{theme.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="theme-switcher__backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
