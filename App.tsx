import * as React from 'react';
import { Icon } from './components/Icon/Icon';
import { InfiniteSlider } from './components/InfiniteSlider/InfiniteSlider';
import { VerticalInfiniteSlider } from './components/VerticalInfiniteSlider/VerticalInfiniteSlider';
import './style.css';

export default function App() {
  const icons = [
    {
      element: Icon,
      icon: 'https://code.visualstudio.com/assets/images/code-stable.png',
      size: '100px',
      alt: 'vscode-logo',
    },
    {
      element: Icon,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      size: '100px',
      alt: 'typescript-logo',
    },
    {
      element: Icon,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      size: '100px',
      alt: 'javascript-logo',
    },
    {
      element: Icon,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      size: '100px',
      alt: 'css-3-logo',
    },
    {
      element: Icon,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      size: '100px',
      alt: 'react-logo',
    },
    {
      element: Icon,
      icon: 'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
      size: '100px',
      alt: 'redux-logo',
    },
    {
      element: Icon,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg',
      size: '100px',
      alt: 'eslint-logo',
    },
    {
      element: Icon,
      icon: 'https://styled-components.com/logo.png',
      size: '100px',
      alt: 'styled-component-logo',
    },
  ];
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Infinite Slider</h1>
      <InfiniteSlider slides={[...icons, ...icons]} />
      <h1>Vertical Infinite Slider</h1>
      <VerticalInfiniteSlider slides={[...icons, ...icons]} />
    </div>
  );
}
