import Illustration from "../assets/illustration.png";

function ContactUs() {
  return (
    <section className="w-full mt-10 py-12 px-4 sm:px-6 ">
      {/* Header */}
      <div
        data-aos="fade-up-left"
        className="max-w-7xl mx-auto flex flex-row max-lg:flex-col max-lg:text-center max-lg:items-center max-lg:justify-center"
      >
        <div>
          <h2 className="text-3xl font-bold bg-brand-green mb-6 max-md:text-center">
            Contact Us
          </h2>
        </div>
        <div>
          <p className="ml-10 max-lg:ml-0 max-lg:mb-10 mt-1.5">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
      </div>

      {/* Contact Form Wrapper */}
      <div data-aos="fade-up-right" className="mt-5 bg-gray-300  rounded-4xl w-full min-h-[550px] xl:min-h-[600px]">
        <div className="max-w-7xl mx-auto   flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6">
          
          {/* Form */}
          <form 
           className="w-full max-lg:mt-10 max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border bg-white rounded-lg focus:ring-brand-green focus:border-brand-green"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border bg-white rounded-lg focus:ring-brand-green focus:border-brand-green"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 border bg-white rounded-lg focus:ring-brand-green focus:border-brand-green"
              />
            </div>

            <div className="md:col-span-2 ">
              <button
                type="submit"
                className="px-6 py-3 bg-brand-dark max-sm:w-full text-white rounded-lg shadow hover:bg-brand-green transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Illustration (LARGE SCREENS ONLY) */}
          <div className="hidden lg:flex w-1/2 justify-end pl-10">
            <img
              src={Illustration}
              alt="Contact Illustration"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;
