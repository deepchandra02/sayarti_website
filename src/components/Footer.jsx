import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);  // State for modal visibility
  const [modalMessage, setModalMessage] = useState("");     // State for modal message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kd6qj08', 'contact_form', form.current, 'xTZsT44KVUMEWawBd')
      .then((result) => {
        console.log(result.text);
        setModalMessage("Email sent successfully!");
        setModalVisible(true);
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error.text);
        setModalMessage("Error sending email. Please try again later.");
        setModalVisible(true);
      });
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' id="footerSection">
      <div>
        <h1 className='w-full text-3xl font-bold text-[#498536]'>Sayarti </h1>
        <p className='py-4'>Follow us and stay tuned</p>
        <div className='flex justify-start gap-4'>
          <a href='https://www.instagram.com/sayarti.qtr/' target='_blank' rel="noreferrer">
            <FaInstagram size={30} href='https://www.instagram.com/sayarti.qtr/' />
          </a>
          <a href='https://www.linkedin.com/company/sayartiqtr/' target='_blank' rel="noreferrer">
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-end'>
        <div className='w-full text-white px-4'>
          <div className='mx-auto grid lg:grid-cols-3'>
            <div></div>
            <div className='lg:col-span-2'>
              <form ref={form} onSubmit={sendEmail}>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                  Get in touch with the team
                </h1>
                <p>Email us!</p>
                <div className='flex flex-col items-center sm:items-start w-full mt-4'>
                  <input
                    className='p-3 flex w-full rounded-md text-black'
                    name="user_email"
                    type='email'
                    placeholder='Your Email'
                    value={email} // Controlled component
                    onChange={e => setEmail(e.target.value)} // Update state on change
                  />
                  <textarea name="message" rows="5"
                    className='p-3 flex w-full rounded-md text-black mt-4'
                    placeholder='Your Message'
                    value={message} // Controlled component
                    onChange={e => setMessage(e.target.value)} // Update state on change
                  >
                  </textarea>
                  <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 px-6 py-3'>
                    <input type="submit" value="Send" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-80">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[80%] max-w-md z-60">
            <p className="text-center text-xl mb-4 text-black">{modalMessage}</p>
            <button className="block mx-auto bg-[#00df9a] text-black rounded-md font-medium px-6 py-3" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;