export type TrackType = {
  id: number;
  title: string;
  artist: string;
  categoryId: number;
  thumbnail: string;
  audio: string;
};

export type CategoryType = {
  id: number;
  name: string;
  thumbnail: string;
};
