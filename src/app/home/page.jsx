// import Banner from "../Component/Banner";
import Cards from "../user-card/page";
import Testimonials from "../testimonial/page";
import BannerSecond from "../Component/BannerSecond";
import FAQ from "../Component/FAQ";


const homePage = () => {
  return (
    <div className=''>
      {/* <Banner /> */}
      <BannerSecond />
      <Cards />
     <Testimonials />
     <FAQ />
    </div>
  );
};

export default homePage;