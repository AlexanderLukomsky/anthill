import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { PauseSharp } from '@mui/icons-material';
import { IconPlay, MaximizeIcon, MinimizeIcon } from './Icons';
import { VolumeControl } from './VolumeControl';
import { Range } from './Range';

type ControlsProps = {
  isFullScreen: boolean;
  playing: boolean;
  playedTime: any;
  fullMovieTime: any;
  muted: any;
  volume: number;
  movieDuration: any;
  currentPlayerTime: any;
  onToggleScreenMode: () => void;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onVolumeChange: (event: Event, value: number) => void;
  onCurrentPlayerTimeChange: (event: Event, value: number) => void;
};

export const Controls: FC<ControlsProps> = ({
  isFullScreen,
  playing,
  playedTime,
  fullMovieTime,
  muted,
  volume,
  movieDuration,
  currentPlayerTime,
  onToggleScreenMode,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
  onCurrentPlayerTimeChange,
}) => (
  <Stack
    sx={{
      bgcolor: 'rgba(16, 16, 16, 0.40)',
      p: '16px',
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 1000,
      gap: '8px',
      borderRadius: '8px',
      maxWidth: '638px',
      width: '100%',
    }}
  >
    <Stack direction="row" sx={{ gap: '16px' }}>
      <IconButton sx={{ width: '24px', height: '24px', p: 0 }} onClick={onTogglePlay}>
        {!playing && <IconPlay />}
        {playing && <PauseSharp sx={{ color: 'white' }} />}
      </IconButton>

      <VolumeControl
        muted={muted}
        volume={volume}
        onChange={onVolumeChange}
        onToggleMute={onToggleMute}
      />

      <IconButton sx={{ width: '24px', height: '24px', p: 0 }} onClick={onToggleScreenMode}>
        {isFullScreen && <MinimizeIcon />}
        {!isFullScreen && <MaximizeIcon />}
      </IconButton>
    </Stack>

    <Stack direction="row" alignItems="center" sx={{ gap: '16px' }}>
      <Typography style={{ color: 'white' }}>{playedTime}</Typography>

      <Range
        min={0}
        max={movieDuration}
        value={currentPlayerTime}
        step={0.01}
        onChange={onCurrentPlayerTimeChange}
      />

      <Typography style={{ color: 'white' }}>{fullMovieTime}</Typography>
    </Stack>
  </Stack>
);
