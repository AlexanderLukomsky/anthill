'use client';

import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlayIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      d="M7.251 3.518C6.219 3.796 5.44 4.555 5.114 5.6l-.094.3v12.2l.094.3c.304.973 1.011 1.71 1.937 2.019a2.855 2.855 0 0 0 1.988-.035c.42-.16 10.431-5.788 10.769-6.053.465-.366.827-.913.999-1.513.074-.255.092-.417.092-.818 0-.401-.018-.563-.092-.818-.177-.619-.568-1.196-1.043-1.543-.135-.098-2.545-1.473-5.355-3.055C10.803 4.553 9.2 3.672 8.96 3.586c-.303-.108-.399-.122-.88-.134-.438-.01-.595.003-.829.066m6.169 4.801c3.512 1.975 5.125 2.903 5.226 3.006.382.391.339 1.101-.086 1.437-.264.208-10.133 5.732-10.34 5.787a1.004 1.004 0 0 1-.692-.086c-.14-.073-.339-.286-.434-.463-.071-.135-.074-.362-.074-6V6.14l.088-.164c.098-.184.324-.398.509-.481.08-.036.229-.052.423-.044l.3.011 5.08 2.857"
      fillRule="evenodd"
    />
  </SvgIcon>
);
