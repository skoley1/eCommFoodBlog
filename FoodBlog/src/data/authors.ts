import type { Author } from '../types';

import AP from '../assets/AP.png';
import ARP from '../assets/ARP.png';
import JS from '../assets/JS.png';
import NS from '../assets/NS.png';
import SK from '../assets/SK.png';

export const authors: Record<string, Author> = {
  arijit: {
    name: 'Arijit Pal',
    avatar: AP,
    bio: 'Food enthusiast and contributor at Food@eComm.',
  },
  arpan: {
    name: 'Arpan Paramanik',
    avatar: ARP,
    bio: 'Food enthusiast and contributor at Food@eComm.',
  },
  javeed: {
    name: 'Javeed Shaik',
    avatar: JS,
    bio: 'Food enthusiast and contributor at Food@eComm.',
  },
  nilanjan: {
    name: 'Nilanjan Sarkar',
    avatar: NS,
    bio: 'Food enthusiast and contributor at Food@eComm.',
  },
  sudeep: {
    name: 'Sudeep Koley',
    avatar: SK,
    bio: 'Food enthusiast and contributor at Food@eComm.',
  },
};
