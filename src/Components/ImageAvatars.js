import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import myAvatar from '../Images/myAvatar.jpg';

export default function ImageAvatars() {
  return (
    <div>
        <Avatar sx={{ml: 14}} alt="Remy Sharp" src={myAvatar} />
    </div>
  );
}