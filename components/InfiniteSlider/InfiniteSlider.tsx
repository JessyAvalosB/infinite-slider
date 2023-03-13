import * as React from 'react';
import { Slide, Slider, SlideTrack } from '../InfiniteSlider/Style';

interface InfiniteSliderProps {
  slides: any[];
}

export const InfiniteSlider = ({
  slides = [],
}: InfiniteSliderProps): JSX.Element => {
  return (
    <Slider>
      <SlideTrack>
        {slides.map(({ element: Element }, i) => {
          return (
            <Slide key={i}>
              <Element />
            </Slide>
          );
        })}
      </SlideTrack>
    </Slider>
  );
};
