'use client';

import { Stack, Box } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';
import { Controls } from './Controls';
import { CloseButton } from './CloseButton';
import { containerStyle } from './style';

export type VideoPlayerProps = {
  onClose: () => void;
  url: string;
};

const initialPlayerState = {
  volume: 0.5,
  playing: false,
  playerTime: 0,
  currentPlayerTime: 0,
  seeking: false,
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ url, onClose }) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const containerPlayerRef = useRef<HTMLDivElement | null>(null);

  const [{ volume, playing, currentPlayerTime, seeking }, setPlayerState] =
    useState(initialPlayerState);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleScreenMode = () => {
    if (containerPlayerRef.current) {
      screenfull.toggle(containerPlayerRef.current);

      screenfull.onchange(() => {
        setIsFullScreen(screenfull.isFullscreen);
      });
    }
  };

  const handlePlay = () => {
    setPlayerState((prev) => ({ ...prev, playing: true }));
  };

  const handlePause = () => {
    setPlayerState((prev) => ({ ...prev, playing: false }));
  };

  const handleVolumeChange = (event: Event, value: number | number[]) => {
    setPlayerState((prev) => ({ ...prev, volume: value as number }));
  };

  const handlePlayerTimeChangeCommitted = () => {
    setPlayerState((prev) => ({ ...prev, seeking: false }));
  };

  const handlePlayerTimeChange = (event: Event, value: number | number[]) => {
    playerRef.current?.seekTo((value as number) - 0.01);
    setPlayerState((prev) => ({ ...prev, currentPlayerTime: value as number, seeking: true }));
  };

  const handlePlayerProgress = (player: OnProgressProps) => {
    if (!seeking) {
      setPlayerState((prev) => ({
        ...prev,
        currentPlayerTime: player.playedSeconds,
      }));
    }
  };

  const movieDuration = playerRef.current ? playerRef.current.getDuration() : 0;

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const containerWidth = screenfull.isFullscreen ? '100%' : '1280px';

  return (
    <Stack alignItems="center" justifyContent="center" sx={containerStyle}>
      <Stack
        ref={containerPlayerRef}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          overflow: 'hidden',

          // '@media(max-width:700px)': { height: '356px', maxWidth: '636px' },
          // '@media(max-width:375px)': { height: '196px', maxWidth: '351px' },
        }}
      >
        <CloseButton onClick={onClose} />

        {hasWindow && (
          <Box sx={{ maxWidth: containerWidth, width: '100%' }}>
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
                ref={playerRef}
                url={url}
                playing={playing}
                volume={volume}
                onProgress={handlePlayerProgress}
                controls={false}
                onPlay={handlePlay}
                onPause={handlePause}
                loop={false}
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        )}

        <Controls
          isFullScreen={isFullScreen}
          playing={playing}
          volume={volume}
          movieDuration={movieDuration}
          currentPlayerTime={currentPlayerTime}
          onPlay={handlePlay}
          onPause={handlePause}
          onToggleScreenMode={handleToggleScreenMode}
          onVolumeChange={handleVolumeChange}
          onPlayerTimeChange={handlePlayerTimeChange}
          onPlayerTimeChangeCommitted={handlePlayerTimeChangeCommitted}
        />
      </Stack>
    </Stack>
  );
};
