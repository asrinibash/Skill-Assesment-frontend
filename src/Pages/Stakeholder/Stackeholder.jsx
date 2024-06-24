import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Component() {
  const partners = [
    {
      name: "Partner 1",
      description:
        "Description of the partner and their role in the assessment process.",
    },
    {
      name: "Partner 2",
      description:
        "Description of the partner and their role in the assessment process.",
    },
    {
      name: "Partner 3",
      description:
        "Description of the partner and their role in the assessment process.",
    },
    {
      name: "Partner 3",
      description:
        "Description of the partner and their role in the assessment process.",
    },
    {
      name: "Partner 3",
      description:
        "Description of the partner and their role in the assessment process.",
    },
    {
      name: "Partner 3",
      description:
        "Description of the partner and their role in the assessment process.",
    },
    {
      name: "Partner 3",
      description:
        "Description of the partner and their role in the assessment process.",
    },
  ];

  const trainingPartners = [
    {
      name: "Training Partner 1",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 2",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 3",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 3",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 3",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 3",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 3",
      description: "Description of the training partner and their offerings.",
    },
    {
      name: "Training Partner 3",
      description: "Description of the training partner and their offerings.",
    },
  ];

  const assessmentAgencies = [
    {
      name: "Agency 1",
      description:
        "Description of the agency and their role in the assessment process.",
    },
    {
      name: "Agency 2",
      description:
        "Description of the agency and their role in the assessment process.",
    },
    {
      name: "Agency 3",
      description:
        "Description of the agency and their role in the assessment process.",
    },
    {
      name: "Agency 3",
      description:
        "Description of the agency and their role in the assessment process.",
    },
    {
      name: "Agency 3",
      description:
        "Description of the agency and their role in the assessment process.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarouselSection
            title="Our Trusted Stakeholders"
            description="We collaborate with a network of leading organizations to deliver comprehensive assessment solutions."
            items={partners}
            CardComponent={PartnerCard}
            bgColor="bg-blue-50"
          />
          <CarouselSection
            title="Our Training Partners"
            description="We partner with top training organizations to provide the best resources for employee development."
            items={trainingPartners}
            CardComponent={TrainingCard}
            bgColor="bg-green-50"
          />
          <CarouselSection
            title="Assessment Agencies We Work With"
            description="We collaborate with leading agencies to provide comprehensive and reliable assessment solutions."
            items={assessmentAgencies}
            CardComponent={AgencyCard}
            bgColor="bg-purple-50"
          />
          <Testimonials />
        </div>
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-100 to-indigo-300 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Empowering Stakeholders for Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Our comprehensive assessment solutions help organizations identify
              and nurture talent, ensuring success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className=" lg:block">
            <img
              src="https://images.unsplash.com/photo-1630673287511-4d477913d7a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Rha2Vob2xkZXJzfGVufDB8fDB8fHww"
              alt="Stakeholders"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselSection({
  title,
  description,
  items,
  CardComponent,
}) {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="py-8"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <CardComponent {...item} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}

function PartnerCard({ name, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <img
          src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          alt={`${name} Logo`}
          className="w-24 h-24 mx-auto rounded-lg object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-center mb-4 text-blue-600">
          {name}
        </h3>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function TrainingCard({ name, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <img
          src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          alt={`${name} Logo`}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-center mb-4 text-green-600">
          {name}
        </h3>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function AgencyCard({ name, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <img
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFnZW5jeXxlbnwwfDB8MHx8fDA%3D"
          alt={`${name} Logo`}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-center mb-4 text-purple-600">
          {name}
        </h3>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-green-100 to-green-50 w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-800">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients and partners about their experiences
            working with our assessment company.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <TestimonialCard
            quote="The assessment solutions provided by this company have been invaluable in helping us identify and develop the talents of our employees. Highly recommended!"
            name="John Doe"
            title="CEO, Acme Inc."
            imageSrc="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          />
          <TestimonialCard
            quote="Working with this assessment company has been a game-changer for our organization. Their expertise and innovative solutions have helped us unlock the full potential of our team."
            name="Jane Smith"
            title="HR Manager, Globex Inc."
            imageSrc="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          />
          <TestimonialCard
            quote="Working with this assessment company has been a game-changer for our organization. Their expertise and innovative solutions have helped us unlock the full potential of our team."
            name="Jane Smith"
            title="HR Manager, Globex Inc."
            imageSrc="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          />
          <TestimonialCard
            quote="Working with this assessment company has been a game-changer for our organization. Their expertise and innovative solutions have helped us unlock the full potential of our team."
            name="Jane Smith"
            title="HR Manager, Globex Inc."
            imageSrc="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, title, imageSrc }) {
  return (
    <div className="bg-green-200 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl p-6 flex flex-col">
      <blockquote className="text-gray-600 mb-4">{quote}</blockquote>
      <div className="flex items-center mt-auto">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}
