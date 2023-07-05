import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ExpandIcon } from 'packages.icons.expand';
import { PlayIcon } from 'packages.icons.play';
import { PauseIcon } from 'packages.icons.pause';
import { CollapseIcon } from 'packages.icons.collapse';
import { VolumeControl } from './VolumeControl';
import { Range } from './Range';
import {
  controlsContainerStyle,
  controlsRowStyle,
  iconButtonStyle,
  iconStyle,
  textStyle,
} from './style';
import { formatTime } from './helpers';

type ControlsProps = {
  isFullScreen: boolean;
  playing: boolean;
  volume: number;
  movieDuration: number;
  currentPlayerTime: number;
  onPlay: () => void;
  onPause: () => void;
  onToggleScreenMode: () => void;
  onVolumeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChangeCommitted: () => void;
};

export const Controls: FC<ControlsProps> = ({
  isFullScreen,
  playing,
  volume,
  movieDuration,
  currentPlayerTime,
  onPlay,
  onPause,
  onToggleScreenMode,
  onVolumeChange,
  onPlayerTimeChange,
  onPlayerTimeChangeCommitted,
}) => {
  const formattedCurrentPlayerTime = formatTime(currentPlayerTime);
  const formattedMovieDuration = formatTime(movieDuration);

  return (
    <Stack
      sx={(theme) => ({
        ...controlsContainerStyle,
        [theme.breakpoints.down('md')]: {
          maxWidth: '327px',
        },
      })}
    >
      <Stack direction="row" alignItems="center" sx={controlsRowStyle}>
        {!playing && (
          <IconButton sx={iconButtonStyle} onClick={onPlay}>
            <PlayIcon sx={iconStyle} />
          </IconButton>
        )}

        {playing && (
          <IconButton sx={iconButtonStyle} onClick={onPause}>
            <PauseIcon sx={iconStyle} />
          </IconButton>
        )}

        <VolumeControl volume={volume} onChange={onVolumeChange} />

        <IconButton sx={iconButtonStyle} onClick={onToggleScreenMode}>
          {isFullScreen && <CollapseIcon sx={iconStyle} />}
          {!isFullScreen && <ExpandIcon sx={iconStyle} />}
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" sx={controlsRowStyle}>
        <Typography variant="regular_text_14" sx={textStyle}>
          {formattedCurrentPlayerTime}
        </Typography>

        <Range
          min={0}
          max={movieDuration}
          value={currentPlayerTime}
          step={0.01}
          onChange={onPlayerTimeChange}
          onChangeCommitted={onPlayerTimeChangeCommitted}
        />

        <Typography variant="regular_text_14" sx={textStyle}>
          {formattedMovieDuration}
        </Typography>
      </Stack>
    </Stack>
  );
};
