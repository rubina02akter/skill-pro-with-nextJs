'use client';

const contactPage = () => {
  const handleSubmit = () => {
    alert('Thank you for contacting us!')
  }
  return (
    <div className=' min-h-screen]'>
      <div className="min-h-screen  pt-24 px-6 lg:px-0 flex flex-col items-center">
      <h2 className="text-4xl font-bold  mb-6  text-white">Contact Us</h2>
      <p className="text-center text-amber-50  mb-12">
        Have questions or want to reach out? Fill out the form below or contact us directly!
      </p>

      <div className=" min-h-screen">
  <div className="">
 
    <div className="card border border-white md:w-96 w-full">
      <div className="card-body ">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Message</label>
          <input type="text" className="input" placeholder="Message"/>
  
          <button onClick={handleSubmit} className="btn w-80 mt-4">Send Message</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </div>

    </div>
  );
};

export default contactPage;