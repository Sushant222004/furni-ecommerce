import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Hero from "../components/Hero";

function Contact() {
  return (
    <div>
      <div className=" bg-gray-100">
        <Hero />
        <div className="max-w-225 mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-[#3b5d50] p-3 rounded-lg text-white">
                <FiMapPin />
              </div>
              <p className="text-sm text-gray-600">
                43 Raymouth Rd. Baltemoer, London 3910
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#3b5d50] p-3 rounded-lg text-white">
                <FiMail />
              </div>
              <p className="text-sm text-gray-600">info@yourdomain.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#3b5d50] p-3 rounded-lg text-white">
                <FiPhone />
              </div>
              <p className="text-sm text-gray-600">+1 294 3925 3939</p>
            </div>
          </div>

          <div className="max-w-225 mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold">Contact</h1>

            <form action="">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4  ">
                  <div className="flex flex-col flex-1">
                    <label>First name</label>
                    <input
                      className="border border-gray-300 rounded-lg px-4 py-3 bg-white"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label>Last name</label>
                    <input
                      className="border border-gray-300 rounded-lg px-4 py-3 bg-white"
                      type="text"
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label>Email Address</label>
                  <input
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-white"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Message</label>
                  <textarea
                    className="border border-gray-300 rounded-lg px-4 py-3 min-h-40 bg-white"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="self-start bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-black transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
