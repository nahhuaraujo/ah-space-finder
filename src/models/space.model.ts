export interface ISpace {
  id: number;
  name: string;
  location: string;
  address: string;
  available: boolean;
  imageUrl?: string;
  userId: number | null;
}
