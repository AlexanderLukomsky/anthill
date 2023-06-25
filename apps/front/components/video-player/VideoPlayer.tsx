'use client';

import { Box, Slider, Stack, Typography } from '@mui/material';
import { Button } from 'packages.inputs.button';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';

export type VideoPlayerProps = {};

export const VideoPlayer: FC<VideoPlayerProps> = () => {
  const playerRef = useRef(null);
  const containerPlayerRef = useRef(null);

  const [currentPlayerTime, setCurrentPlayerTime] = useState(0);

  const [render, setRender] = useState(0);
  console.log(render);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  const handleFullScreenMode = () => {
    screenfull.toggle(containerPlayerRef.current);
  };

  const handlePlayerProgress = (player: OnProgressProps) => {
    setRender((prev) => prev + 1);

    setCurrentPlayerTime(playerRef.current.getCurrentTime());
    console.log('onProgress');
  };

  const movieDuration = playerRef.current ? playerRef.current.getDuration() : '00:00';
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
      <Box ref={containerPlayerRef} sx={{ maxWidth: '1250px', width: '100%', height: '700px' }}>
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
      </Box>

      <Stack
        sx={{
          background: 'rgba(16, 16, 16, 0.4);',

          color: '#fff',
        }}
      >
        <Button onClick={handleFullScreenMode}>fullscreen</Button>
        {!playing && <Button onClick={() => setPlaying(true)}>play</Button>}
        {playing && <Button onClick={() => setPlaying(false)}>pause</Button>}
        {!muted && <Button onClick={() => setMuted(true)}>muted</Button>}
        {muted && <Button onClick={() => setMuted(false)}>unmuted</Button>}

        <Box sx={{ height: '150px', position: 'absolute' }}>
          <Slider
            orientation="vertical"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            size="small"
            onChange={(event, value) => {
              setVolume(value as number);
            }}
          />
        </Box>
        <Box>
          <Slider
            min={0}
            max={movieDuration}
            value={currentPlayerTime}
            step={0.01}
            size="small"
            onChange={(event, value) => {
              console.log(value);
              setCurrentPlayerTime((value as number) + 1);
              playerRef.current.seekTo((value as number) + 1);
            }}
          />
          <Typography style={{ color: 'white' }}>{playedTime}</Typography>
          <Typography style={{ color: 'white' }}>{fullMovieTime}</Typography>
        </Box>
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
