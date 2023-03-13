import styled, { css, keyframes } from 'styled-components';

const WhiteGradient = css`
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
`;

const Scroll = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
`;

export const Slider = styled.div`
  background: white;
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

export const SlideTrack = styled.div`
  animation: ${Scroll} 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
`;

export const Slide = styled.div`
  height: 100px;
	width: 250px;
`;
