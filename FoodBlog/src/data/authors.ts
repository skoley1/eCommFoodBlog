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
    bio: 'Passionate home cook and food photographer',
  },
  sudeep: {
    name: 'Sudeep Koley',
    avatar: SK,
    bio: 'Professional chef turned food blogger.',
  },
  arpan: {
    name: 'Arpan Paramanik',
    avatar: ARP,
    bio: 'Spice enthusiast and recipe developer from Kerala.',
  },
  nilanjan: {
    name: 'Nilanjan Sarkar',
    avatar: NS,
    bio: 'Bringing authentic Indian home cooking to kitchens around the world.',
  },
  javeed: {
    name: 'Javeed Shaik',
    avatar: JS,
    bio: 'Indian home cooking to kitchens around the world.',
  },
};
