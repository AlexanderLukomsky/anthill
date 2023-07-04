'use client';

import { VideoPlayer } from 'components/video-player';
import { Button } from 'packages.inputs.button';
import { useState } from 'react';

export const Video = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>open video</Button>

      {open && (
        <VideoPlayer
          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          onClose={handleClose}
        />
      )}
    </>
  );
};
