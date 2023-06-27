'use client';

import { Stack } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';
import { Controls } from './Controls';
import { CloseButton } from './CloseButton';

export type VideoPlayerProps = {};

const initialPlayerState = {
  volume: 0.5,
  muted: false,
  playing: false,
  playerTime: 0,
  currentPlayerTime: 0,
  seeking: false,
};

export const VideoPlayer: FC<VideoPlayerProps> = () => {
  const playerRef = useRef(null);
  const containerPlayerRef = useRef(null);

  const [{ volume, muted, playing, currentPlayerTime, seeking }, setPlayerState] =
    useState(initialPlayerState);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleScreenMode = () => {
    screenfull.toggle(containerPlayerRef.current);

    screenfull.onchange(() => {
      setIsFullScreen(screenfull.isFullscreen);
    });
  };

  const handlePlay = () => {
    setPlayerState((prev) => ({ ...prev, playing: true }));
  };

  const handlePause = () => {
    setPlayerState((prev) => ({ ...prev, playing: false }));
  };

  const handleMute = () => {
    setPlayerState((prev) => ({ ...prev, muted: true }));
  };
  const handleUnmute = () => {
    setPlayerState((prev) => ({ ...prev, muted: false }));
  };

  const handleVolumeChange = (event: Event, value: number) => {
    setPlayerState((prev) => ({ ...prev, volume: value }));
  };

  const handlePlayerTimeChangeCommitted = () => {
    setPlayerState((prev) => ({ ...prev, seeking: false }));
  };

  const handlePlayerTimeChange = (event: Event, value: number) => {
    playerRef.current.seekTo(value - 0.01);
    setPlayerState((prev) => ({ ...prev, currentPlayerTime: value, seeking: true }));
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

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.3)',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Stack
        ref={containerPlayerRef}
        sx={{
          maxWidth: '1250px',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
          position: 'relative',
          '@media(max-width:700px)': { height: '356px', maxWidth: '636px' },
          '@media(max-width:375px)': { height: '196px', maxWidth: '351px' },
        }}
      >
        <CloseButton onClick={() => {}} />

        {hasWindow && (
          <ReactPlayer
            ref={playerRef}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={handlePlayerProgress}
            controls={false}
            width="100%"
            height="100%"
            onPlay={handlePlay}
            onPause={handlePause}
            loop={false}
          />
        )}
        <Controls
          isFullScreen={isFullScreen}
          playing={playing}
          muted={muted}
          volume={volume}
          movieDuration={movieDuration}
          currentPlayerTime={currentPlayerTime}
          onPlay={handlePlay}
          onPause={handlePause}
          onMute={handleMute}
          onUnmute={handleUnmute}
          onToggleScreenMode={handleToggleScreenMode}
          onVolumeChange={handleVolumeChange}
          onPlayerTimeChange={handlePlayerTimeChange}
          onPlayerTimeChangeCommitted={handlePlayerTimeChangeCommitted}
        />
      </Stack>
    </Stack>
  );
};
