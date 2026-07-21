import type { Author } from '../types';

import AP from '../assets/AP.png';
import ARP from '../assets/ARP.png';
import JS from '../assets/JS.png';
import NS from '../assets/NS.png';
import SK from '../assets/SK.png';

export const authors: Record<string, Author> = {
  sofia: {
    name: 'Nilanjan Sarkar',
    avatar: NS,
    bio: 'Passionate home cook and food photographer based in Barcelona. Obsessed with Mediterranean flavours and slow-cooking techniques.',
  },
  marco: {
    name: 'Javeed Shaik',
    avatar: JS,
    bio: 'Professional chef turned food blogger. Italian by heart, global by palate. Specialises in pasta, risotto, and modern Italian cuisine.',
  },
  priya: {
    name: 'Arpan Paramanik',
    avatar: ARP,
    bio: 'Spice enthusiast and recipe developer from Kerala. Bringing authentic Indian home cooking to kitchens around the world.',
  },
  sudeep: {
    name: 'Sudeep Koley',
    avatar: SK,
    bio: 'Professional chef turned food blogger.',
  },
  arijit: {
    name: 'Arijit Pal',
    avatar: AP,
    bio: 'Passionate home cook and food photographer.',
  },
};
