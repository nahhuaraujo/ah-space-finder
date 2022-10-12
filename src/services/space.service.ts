import { ISpace } from '../models/space.model';
import somePlace from '../assets/someplace.jpg';

export const getSpaces = async (): Promise<ISpace[]> => {
  const spaces: ISpace[] = [
    {
      id: 1,
      name: 'Some nicely well set up place',
      location: 'Not Argentina',
      address: 'Fake street 234',
      available: true,
      imageUrl: somePlace,
      userId: null,
    },
    {
      id: 2,
      name: 'Some other nice place',
      location: 'Not Argentina',
      address: 'Fake street 234',
      available: true,
      imageUrl: somePlace,
      userId: null,
    },
    {
      id: 3,
      name: 'A well organized space',
      location: 'Not Argentina',
      address: 'Fake street 234',
      available: true,
      imageUrl: somePlace,
      userId: 1,
    },
    {
      id: 4,
      name: 'Sideral space',
      location: 'Not Argentina',
      address: 'Fake street 234',
      available: true,
      imageUrl: somePlace,
      userId: null,
    },
  ];
  return spaces;
};
