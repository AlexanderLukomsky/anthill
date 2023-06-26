'use client';

import { Stack } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';
import { styled } from '@mui/material/styles';
import { Controls } from './Controls';
import { CloseButton } from './CloseButton';

const Player = styled(ReactPlayer)({
  '& video': {
    position: 'absolute',
    width: '1251px !important',
    height: '704px !important',
  },
});

export type VideoPlayerProps = {};

export const VideoPlayer: FC<VideoPlayerProps> = () => {
  const playerRef = useRef(null);
  const containerPlayerRef = useRef(null);

  const [currentPlayerTime, setCurrentPlayerTime] = useState(0);

  const [, setRender] = useState(0);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  const handleToggleScreenMode = () => {
    screenfull.toggle(containerPlayerRef.current);

    screenfull.onchange(() => {
      setRender((prev) => prev + 1);
    });
  };

  const handleTogglePlay = () => {
    setPlaying((play) => !play);
  };

  const handleToggleMute = () => {
    setMuted((muted) => !muted);
  };

  const handleVolumeChange = (event: Event, value: number) => {
    setVolume(value);
  };

  const handlePlayerTimeChange = (event: Event, value: number) => {
    playerRef.current.seekTo(value + 1);
    setCurrentPlayerTime(value);
  };

  const handlePlayerProgress = (player: OnProgressProps) => {
    setRender((prev) => prev + 1);

    setCurrentPlayerTime(playerRef.current.getCurrentTime());
  };

  const movieDuration = playerRef.current ? playerRef.current.getDuration() : 0;
  const playedTime = format(currentPlayerTime);
  const fullMovieTime = format(movieDuration);

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
        }}
      >
        <CloseButton onClick={() => {}} />

        {hasWindow && (
          <Player
            ref={playerRef}
            url="https://www.youtube.com/watch?v=EH1qaUQn6ug"
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={handlePlayerProgress}
            controls={false}
            width="100%"
            height="100%"
            onPlay={() => {
              setPlaying(true);
            }}
            onPause={() => {
              setPlaying(false);
            }}
          />
        )}
        <Controls
          isFullScreen={screenfull.isFullscreen}
          playing={playing}
          playedTime={playedTime}
          fullMovieTime={fullMovieTime}
          muted={muted}
          volume={volume}
          movieDuration={movieDuration}
          currentPlayerTime={currentPlayerTime}
          onToggleScreenMode={handleToggleScreenMode}
          onTogglePlay={handleTogglePlay}
          onToggleMute={handleToggleMute}
          onVolumeChange={handleVolumeChange}
          onCurrentPlayerTimeChange={handlePlayerTimeChange}
        />
      </Stack>
    </Stack>
  );
};

const format = (seconds) => {
  if (seconds === '00:00') {
    return '00:00';
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};
