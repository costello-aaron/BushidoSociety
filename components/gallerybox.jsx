import Image from "next/image";
import galleryData from "@/public/data/gallery.json";

export default function Gallerybox() {
  return (
    <div className="bg-black relative h-full grid grid-cols-5 align-center items-center justify-center gap-4 p-4">
      {galleryData.map((photo, index) => (
        <div key={index} className="relative w-full h-full justify-center items-center align-center flex">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={{objectFit: "contain"}}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
