import Image from 'next/image';

const AboutUs = () => {
  return (
    <main className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/path/to/your/background-image.jpg" // Update this path if needed
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Talento</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Talento, we connect you with top-tier talent for your events. Whether you're planning a party, a wedding, or a corporate gathering, our platform makes it easy to find the perfect performers to make your event unforgettable.
          </p>
        </div>
        <div className="mt-10 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white">
            <a href="#" className="hover:text-orange-500">Our Mission <span aria-hidden="true">&rarr;</span></a>
            <a href="#" className="hover:text-orange-500">Our Team <span aria-hidden="true">&rarr;</span></a>
            <a href="#" className="hover:text-orange-500">Contact Us <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

