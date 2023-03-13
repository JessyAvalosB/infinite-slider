import * as React from 'react';
import { BaseIcon } from '../Icon/Style';

export interface IconBaseTypes {
  icon: string;
  size: string;
}

export interface IconProps extends IconBaseTypes {
  alt: string;
}

export const Icon = ({ icon, size, ...rest }: IconProps): JSX.Element => {
  return <BaseIcon src={icon} size={size} {...rest} />;
};
