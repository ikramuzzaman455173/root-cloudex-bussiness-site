import NavButton from "../SharedComponents/Button/NavButton"
import SectionTitle from "../SharedComponents/SectionTitle"

const ContactForm = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="lg:mt-40 lg:mb-10 mt-20 mb-10">
      <SectionTitle title={"Want to talk about "} info={"your project?"} />
      </div>
      <section id='ContactForm' className='pb-16' data-aos="fade-up" data-aos-duration="1500">
      <h2 className=' capitalize md:font-[700] font-[600] md:text-[34px] text-[28px] md:mb-8 mb-4 text-center text-white pb-5'> get in touch</h2>
        <div className="md:flex justify-between gap-6 border-2 shadow-md items-center p-5 rounded-md">
          <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] g-map border-[#1E6DFF] border-[1px] p-2 rounded-lg custom-drop-software-develop-section">
            <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.824602741784!2d90.33700190049574!3d23.876706582464617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1688066234477!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='border-0 w-full h-full rounded-md'></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center ContactForm-form rounded-md px-4 lg:px-8 py-8 overflow-auto overflow-x-hidden custom-drop-software-develop-section border-[#1E6DFF] border-[1px] p-2" >
            <form className='w-full'>
              <div className="mb-5">
                <input type="text" name="named" placeholder='enter your name' className='w-full p-3 rounded-[5px] white-text input-box' required/>
              </div>

              <div className="mb-5">
                <input type="email" name="email" placeholder='enter your email' className='w-full p-3 rounded-[5px] white-text' required/>
              </div>

              <div className="mb-5">
                <input type="text" name="subject" placeholder='subject' className='w-full p-3 rounded-[5px]  white-text' required/>
              </div>

              <div className="mb-5">
                <textarea rows={3} placeholder='message...' name="message" className='w-full p-3 rounded-[5px]  white-text' required/>
              </div>

            <button type="submit" className="w-full"><NavButton value={"Send Message"} padding={"px-5"} /></button>

            </form>
          </div>

        </div>
    </section>
    </div>
  )
}
export default ContactForm
