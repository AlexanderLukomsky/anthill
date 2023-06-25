import { Box, IconButton, Slider } from '@mui/material';
import { FC, useRef, useState } from 'react';
import { VolumeOff } from '@mui/icons-material';
import { SoundOnIcon } from './Icons';

type VolumeControlProps = {
  muted: boolean;
  volume: number;
  onChange: (event: Event, value: number) => void;
  onToggleMute: () => void;
};

export const VolumeControl: FC<VolumeControlProps> = ({
  muted,
  volume,
  onChange,
  onToggleMute,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      sx={{ position: 'relative', maxWidth: 'max-content' }}
      onMouseEnter={() => {
        setIsShow(true);
      }}
      onMouseLeave={() => {
        setIsShow(false);
      }}
    >
      <IconButton onClick={onToggleMute}>
        {!muted && <SoundOnIcon />}
        {muted && <VolumeOff style={{ color: 'white' }} />}
      </IconButton>

      {isShow && (
        <Box
          onMouseOver={() => {
            setIsShow(true);
          }}
          ref={sliderRef}
          sx={{
            position: 'absolute',
            top: '-149px',
            p: '10px 5px',
            right: 0,
            height: '150px',
          }}
        >
          <Slider
            orientation="vertical"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            size="small"
            onChange={onChange}
          />
        </Box>
      )}
    </Box>
  );
};
