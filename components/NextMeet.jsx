import Image from "next/image";
import Link from "next/link";
import eventPhoto from "@/public/data/event.json";
// Show Image of next meet flyer and link to google maps location
export default function NextMeet() {
  return (
    <div className="flex flex-col items-center justify-center">
      {eventPhoto.map((photo, index) => (
              <div key={index} className="relative w-full h-full justify-center items-center align-center flex">
                <Link href="https://www.google.com/maps/place/Dave's+Hot+Chicken/@29.4448186,-98.6727669,335m/data=!3m1!1e3!4m6!3m5!1s0x865c436e803423d3:0xdc577857129f729f!8m2!3d29.4455673!4d-98.6721544!16s%2Fg%2F11sctrmr3_?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
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