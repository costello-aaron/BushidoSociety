import Image from "next/image";
import Link from "next/link";
import eventPhoto from "@/public/data/event.json";
// Show Image of next meet flyer and link to google maps location
export default function NextMeet() {
  return (
    <div className="flex flex-col items-center justify-center">
      {eventPhoto.map((photo, index) => (
              <div key={index} className="relative w-full h-full justify-center items-center align-center flex">
                <Link href="https://www.google.com/maps/place/7-Eleven/@29.4421838,-98.664354,20.57z/data=!4m6!3m5!1s0x865c4337c646ad0d:0x505cec1e491989aa!8m2!3d29.4420603!4d-98.6642949!16s%2Fg%2F11q25sgm_s?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3Ds" target="_blank">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes={{objectFit: "contain"}}
                    className="rounded-lg"
                  />
                </Link>  
              </div>
            ))}
    </div>
  );
}