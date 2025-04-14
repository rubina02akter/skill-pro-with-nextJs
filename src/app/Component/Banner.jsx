import img1 from '../../../public/images/Screenshot 2025-04-15 at 2.39.30 AM.png'
import img2 from '../../../public/images/Screenshot 2025-04-15 at 2.39.46 AM.png'
import img3 from '../../../public/images/Screenshot 2025-04-15 at 2.39.55 AM.png'
import img4 from '../../../public/images/Screenshot 2025-04-15 at 2.40.18 AM.png'
import img5 from '../../../public/images/Screenshot 2025-04-15 at 2.40.32 AM.png'
import img6 from '../../../public/images/Screenshot 2025-04-15 at 2.40.48 AM.png'
import img7 from '../../../public/images/Screenshot 2025-04-15 at 2.40.04 AM.png'
import Image from 'next/image'
export default function Banner() {
  return (
    <div>
      <div className="carousel carousel-center  rounded-box md:h-[500px] space-x-4 p-4">
  <div className="carousel-item">
    <Image
      src={img1}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
  <div className="carousel-item">
    <Image
      src={img2}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
  <div className="carousel-item">
    <Image
      src={img3}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
  <div className="carousel-item">
    <Image
      src={img4}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
  <div className="carousel-item">
    <Image
      src={img5}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
  <div className="carousel-item">
    <Image
      src={img6}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
  <div className="carousel-item">
    <Image
      src={img7}
      className="rounded-box md:w-[400px] w-[200px] h-[300px] md:h-full" />
  </div>
 
 
</div>
    </div>
  )
}
