import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../Constants";
import LocationAndContact from "../../Components/HomeComponents/LocationAndContact.jsx";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-100 to-indigo-300 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600">
                  We're here to help! Get in touch with our team to learn more
                  about our assessment solutions and how we can empower your
                  organization. We're here to help! Get in touch with our team
                  to learn more about our assessment solutions and how we can
                  empower your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    to="#contact-form"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white border  rounded-md shadow-md hover:bg-blue-50 transition duration-300 ease-in-out"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={images.carosel3}
                  alt="Contact Us"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocationAndContact />

          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-indigo-100"
            id="contact-form"
          >
            <div className="container px-4 md:px-6 mx-auto ">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                  Fill the form & Get in touch
                </h2>
                <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Enter the subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-300 focus:border-transparent min-h-[150px]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-50 to-purple-100 text-blue-800 font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Our Location</h2>
              <p className="mt-4 text-xl text-gray-600">
                Visit us at our headquarters in Anytown, USA.
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-500 text-lg">
                Map placeholder
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
