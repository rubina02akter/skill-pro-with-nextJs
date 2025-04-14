import Image from "next/image";
import imageBg from "../../../public/Screenshot 2025-04-15 at 2.15.05 AM.png";
import Banner from "./Banner";

export default function BannerSecond() {
  return (
    <div className='pt-4 grid lg:grid-cols-2 grid-cols-1'>
      <div>
        <Image src={imageBg} className="h-[500px] md:object-contain object-fill" alt='banner'/>
        <h2 className='text-white hidden lg:block font-extrabold text-xl bg-linear-to-bl from-violet-960 to-fuchsia-950  rounded-2xl p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing .
        </h2>
      </div>
      <div className='mt-24'>
        <h2 className='text-white font-extrabold text-xl bg-linear-to-bl from-violet-960 to-fuchsia-950 mx-4 rounded-2xl p-2'>CHOOSE YOUR SUBJECT TO GET THE BEST SERVICE</h2>
     <Banner />
      </div>
    </div>
  );
}
