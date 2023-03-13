import * as React from 'react';
import { Slide, Slider, SlideTrack } from '../VerticalInfiniteSlider/Style';
import { InfiniteSliderProps } from '../InfiniteSlider/InfiniteSlider';

export const VerticalInfiniteSlider = ({
  slides = [],
}: InfiniteSliderProps): JSX.Element => {
  return (
    <Slider>
      <SlideTrack size={slides.length}>
        {slides.map(({ element: Element, ...props }, i) => {
          return (
            <Slide key={i}>
              <Element {...props} />
            </Slide>
          );
        })}
      </SlideTrack>
    </Slider>
  );
};
