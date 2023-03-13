import styled, { css, keyframes } from 'styled-components';

const WhiteGradient = css`
	background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
`;

const Scroll = (size: number) => keyframes`
  0% { transform: translateY(0); }
	100% { transform: translateY(calc(-100px * ${size / 2}))}
`;

export const Slider = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  height: 760px;
  margin: auto;
  overflow-y:hidden;
  position: relative;
  width: 500px;

  &::before,
	&::after {
		${WhiteGradient}
		content: "";
		height: 100px;
		position: absolute;
		z-index: 2;
	}

  &::after {
		right: 0;
    left: 0;
		bottom: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
    right: 0;
		top: 0;
	}
`;

export const SlideTrack = styled.div<{ size: number }>`
  animation: ${({ size }) => Scroll(size)} 40s linear infinite;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100px * ${({ size }) => size});
`;

export const Slide = styled.div`
  height: 100px;
`;
