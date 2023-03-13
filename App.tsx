import * as React from 'react';
import { InfiniteSlider } from './components/InfiniteSlider/InfiniteSlider';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Infinite Slider</h1>
      <InfiniteSlider slides={[]} />
    </div>
  );
}
