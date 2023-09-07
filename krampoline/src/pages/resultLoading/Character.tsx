import React from 'react';
import { styled } from 'styled-components';

function Character() {
  return (
    <Container>
      <img
        src={require('./groom_with_shadow.png')}
        alt="groom"
        width={178}
        height={159}
      />
      <ImageBg />
    </Container>
  );
}

export default Character;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: calc(159px + 48px);

  img {
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const ImageBg = () => {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_148_628)">
        <circle cx="85" cy="85" r="81" fill="#FFE180" />
      </g>
      <defs>
        <filter
          id="filter0_f_148_628"
          x="0"
          y="0"
          width="170"
          height="170"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_148_628" />
        </filter>
      </defs>
    </svg>
  );
};
