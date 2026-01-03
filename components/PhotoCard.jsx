import Image from "next/image";
import Link from "next/link";

export const PhotoCard = ({ photo }) => {
  return (
    <Link href={`./photos/${photo.id}`} className="group">
      <Image src={photo?.url} height={700} width={700} alt={photo.title} />

      <div class="title-container">
        <h4 class="title">{photo.title}</h4>
      </div>
    </Link>
  );
};
