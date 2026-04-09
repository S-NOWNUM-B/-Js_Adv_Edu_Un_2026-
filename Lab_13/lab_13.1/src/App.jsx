import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import {
  ThemedButtonWithTheme,
  ThemedCardWithTheme,
  ThemedTextWithTheme,
  ThemedInputWithTheme,
  ThemeSwitcherWithTheme,
} from './components/ThemedComponents';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ThemeProvider>
      <div style={{
        minHeight: '100vh',
        padding: '32px',
        transition: 'background-color 0.3s ease',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
          }}>
            <ThemedTextWithTheme variant="title">
              HOC Theme Demo
            </ThemedTextWithTheme>
            <ThemeSwitcherWithTheme />
          </div>

          <ThemedCardWithTheme elevated style={{ marginBottom: '24px' }}>
            <ThemedTextWithTheme variant="subtitle" style={{ marginBottom: '16px', display: 'block' }}>
              Themed Buttons
            </ThemedTextWithTheme>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <ThemedButtonWithTheme variant="primary">Primary</ThemedButtonWithTheme>
              <ThemedButtonWithTheme variant="secondary">Secondary</ThemedButtonWithTheme>
              <ThemedButtonWithTheme variant="outline">Outline</ThemedButtonWithTheme>
              <ThemedButtonWithTheme variant="ghost">Ghost</ThemedButtonWithTheme>
            </div>
          </ThemedCardWithTheme>

          <ThemedCardWithTheme style={{ marginBottom: '24px' }}>
            <ThemedTextWithTheme variant="subtitle" style={{ marginBottom: '16px', display: 'block' }}>
              Themed Input
            </ThemedTextWithTheme>
            <ThemedInputWithTheme
              label="Username"
              placeholder="Enter your username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </ThemedCardWithTheme>

          <ThemedCardWithTheme>
            <ThemedTextWithTheme variant="subtitle" style={{ marginBottom: '12px', display: 'block' }}>
              About HOC Pattern
            </ThemedTextWithTheme>
            <ThemedTextWithTheme variant="body">
              Higher-Order Components (HOCs) are a powerful pattern in React for reusing component logic.
              The withTheme HOC injects theme props into any wrapped component, enabling consistent styling
              across your application without prop drilling.
            </ThemedTextWithTheme>
            <ThemedTextWithTheme variant="caption" style={{ marginTop: '12px', display: 'block' }}>
              This demo showcases theme context, HOC pattern, and component composition.
            </ThemedTextWithTheme>
          </ThemedCardWithTheme>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
