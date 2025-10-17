export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: Date;
  type: 'event' | 'conference';
}
