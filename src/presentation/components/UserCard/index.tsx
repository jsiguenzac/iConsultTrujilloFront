import React from 'react';
import { AvatarWrapper, UserInfo } from './styled';

const UserCard: React.FC = () => (
    <AvatarWrapper>
        <img src="https://scontent.flim18-2.fna.fbcdn.net/v/t39.30808-1/495727835_3146161048871182_6283638010870078510_n.jpg?stp=c0.466.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHbfySSiGUHnRaqH-D-EmxVLUxj0N5Am4UtTGPQ3kCbhUM93ZRGD9wtZtOJzAD3Uq42oRkYvklM-NwpFwJE7wqY&_nc_ohc=TluVHu0sTQsQ7kNvwHLM5-5&_nc_oc=AdkKpkB6RJIijJFReD2OPtdLz5E91NWfAAJRsMcSV7Vz6QBSYvtOIljjqFNxeVBg5F0&_nc_zt=24&_nc_ht=scontent.flim18-2.fna&_nc_gid=2HyeX81_tlPk8DY51t0THg&oh=00_AfNbJV037lwiWmAL4yAV-OTDXE4UXraotkb3bOYXYSkjzw&oe=686D49FD" alt="Usuario" />
        <UserInfo>
            <h3>Joel Sigüenza</h3>
            <p>siguenzajoel10@gmail.com</p>
        </UserInfo>
    </AvatarWrapper>
);

export default UserCard;