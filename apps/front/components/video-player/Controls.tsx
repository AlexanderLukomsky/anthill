import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { IconPlay, MaximizeIcon, MinimizeIcon } from './Icons';
import { VolumeControl } from './VolumeControl';

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
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 2,
    }}
  >
    <IconButton onClick={onToggleScreenMode}>
      {isFullScreen && <MinimizeIcon />}
      {!isFullScreen && <MaximizeIcon />}
    </IconButton>

    {!playing && (
      <IconButton onClick={onTogglePlay}>
        <IconPlay />
      </IconButton>
    )}

    {playing && (
      <IconButton sx={{ color: 'white' }} onClick={onTogglePlay}>
        pause
      </IconButton>
    )}

    <VolumeControl
      muted={muted}
      volume={volume}
      onChange={onVolumeChange}
      onToggleMute={onToggleMute}
    />

    <Box>
      <Slider
        min={0}
        max={movieDuration}
        value={currentPlayerTime}
        step={0.01}
        size="small"
        onChange={onCurrentPlayerTimeChange}
      />
      <Typography style={{ color: 'white' }}>{playedTime}</Typography>
      <Typography style={{ color: 'white' }}>{fullMovieTime}</Typography>
    </Box>
  </Stack>
);
