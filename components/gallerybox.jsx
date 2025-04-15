import Image from "next/image";
import React, { useState } from "react";
import galleryData from "@/public/data/gallery.json";

export default function Gallerybox() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Image Grid */}
      <div className="bg-black relative h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {galleryData.map((photo, index) => (
          <div
            key={index}
            className="relative w-full cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              layout="responsive"
              width={selectedImage.width}
              height={selectedImage.height}
              className="rounded-lg object-contain w-full h-auto"
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
