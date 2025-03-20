import Image from "next/image";
import Link from "next/link";
import eventPhoto from "@/public/data/event.json";
// Show Image of next meet flyer and link to google maps location
export default function NextMeet() {
  return (
    <div className="flex flex-col items-center justify-center">
      {eventPhoto.map((photo, index) => (
              <div key={index} className="relative w-full h-full justify-center items-center align-center flex">
                <Link href="https://www.google.com/maps/place/Lennys+Grill+%26+Subs/@29.4411918,-98.9359619,11z/data=!4m10!1m2!2m1!1slennys!3m6!1s0x865c69d6301f6c9b:0x851550ff542bcbde!8m2!3d29.5131667!4d-98.6963566!15sCgZsZW5ueXMiA4gBAVoIIgZsZW5ueXOSAQ1zYW5kd2ljaF9zaG9w4AEA!16s%2Fg%2F11kqgn8_ws?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
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