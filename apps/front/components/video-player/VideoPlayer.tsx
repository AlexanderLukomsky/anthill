'use client';

import { Box, Stack } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';

import { Controls } from './Controls';

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
    <Stack sx={{ background: '#404040' }}>
      <Box
        ref={containerPlayerRef}
        sx={{ maxWidth: '1250px', width: '100%', height: '100vh', position: 'relative' }}
      >
        {hasWindow && (
          <ReactPlayer
            width="100%"
            height="100%"
            ref={playerRef}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={handlePlayerProgress}
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
      </Box>
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