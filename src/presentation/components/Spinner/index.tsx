import React from 'react';
import { PreloaderWrapper, Indicator } from './styles';

interface SpinnerProps {
  size?: number;
  height?: number;
  colorText?: string;
  sizeText?: number;
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 35,
  height = 25,
  // color un poco mmás oscuro que el verde en rgb
  colorText = 'rgba(59, 211, 171, 3)', 
  sizeText = 7,
  text = 'Cargando...'
}) => {
  return (
    <PreloaderWrapper id="preloader" data-testid="cmp-spinner">
      <Indicator className="indicator">
        <svg width={size} height={height} viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
          <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
          <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
        </svg>
        {text && (
          <div
            className="loadingName"
            style={{ color: colorText, textAlign: 'center', fontSize: sizeText }}
          >
            {text}
          </div>
        )}
      </Indicator>
    </PreloaderWrapper>
  );
};

export default Spinner;
