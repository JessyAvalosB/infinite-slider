import styled from 'styled-components';
import { IconBaseTypes } from '../Icon/Icon';

export const BaseIcon = styled.img<IconBaseTypes>`
  width: ${({ size }) => size};
`;
