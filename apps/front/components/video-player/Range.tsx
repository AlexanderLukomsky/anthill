import { Slider } from '@mui/material';
import { FC } from 'react';

type RangeProps = {
  min: number;
  max: number;
  value: number;
  step?: number;
  orientation?: 'horizontal' | 'vertical';
  onChange: (event: Event, value: number) => void;
  onChangeCommitted?: (event: Event, value: number) => void;
};

export const Range: FC<RangeProps> = ({
  min,
  max,
  value,
  step,
  orientation,
  onChange,
  onChangeCommitted,
}) => (
  <Slider
    sx={{
      '& .MuiSlider-thumb': {
        color: '#fff',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      '& .MuiSlider-track': {
        bgcolor: '#fff',
      },
      '& .MuiSlider-rail': {
        bgcolor: 'rgba(255, 255, 255, 0.30)',
      },
    }}
    min={min}
    max={max}
    value={value}
    step={step}
    orientation={orientation}
    size="small"
    onChange={onChange}
    onChangeCommitted={onChangeCommitted}
  />
);
