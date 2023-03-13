import styled, { css, keyframes } from 'styled-components';

const WhiteGradient = css`
  background: linear-gradient(to right,  rgba(231, 231, 231, 1) 0%,rgba(231, 231, 231, 0) 100%);
`;

const Scroll = (size: number) => keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * ${size / 2}))}
`;

export const Slider = styled.div`
  background: #e7e7e7;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  height: 100px;
  margin: auto;
  overflow:hidden;
  position: relative;
  width: 960px;

  &::before,
	&::after {
		${WhiteGradient}
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}

  &::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
`;

export const SlideTrack = styled.div<{ size: number }>`
  animation: ${({ size }) => Scroll(size)} 40s linear infinite;
	display: flex;
	width: calc(250px * ${({ size }) => size});
`;

export const Slide = styled.div`
  height: 100px;
	width: 250px;
`;
