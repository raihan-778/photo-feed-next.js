import { PhotoCard } from "./PhotoCard";

export const PhotoList = ({ photoData }) => {
  return (
    <div className="img-grid">
      {photoData.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
