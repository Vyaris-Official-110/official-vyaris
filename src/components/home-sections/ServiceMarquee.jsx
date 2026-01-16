import { Star } from 'lucide-react';

const services = [
  { name: 'Web Development', hollow: false },
  // { name: 'Brand Strategy', hollow: true },
  // { name: 'UI/UX Design', hollow: false },
  // { name: 'Digital Marketing', hollow: true },
  { name: 'Mobile Apps', hollow: false },
  // { name: 'E-Commerce', hollow: true },
  { name: 'SEO Optimization', hollow: false },
  { name: 'Custom Software Development', hollow: false },
];

const ServiceItem = ({ name, hollow }) => (
  <div className="flex items-center gap-8 flex-shrink-0">
    <span
      className={`text-3xl md:text-4xl font-black uppercase tracking-tight whitespace-nowrap ${hollow ? 'hollow-text' : 'text-white'
        }`}
    >
      {name}
    </span>
    <Star
      className="w-6 h-6 text-primary fill-primary flex-shrink-0"
      aria-hidden="true"
    />
  </div>
);

const ServiceMarquee = () => {
  // Duplicate the services array for seamless looping
  const duplicatedServices = [...services, ...services];

  return (
    <div className="border-y border-zinc-800 bg-zinc-950 py-6">
      <div className="container mx-auto px-4 relative overflow-hidden">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex whitespace-nowrap">
          {/* First scroll track */}
          <div className="flex gap-8 animate-infinite-scroll">
            {duplicatedServices.map((service, index) => (
              <ServiceItem
                key={`first-${index}`}
                name={service.name}
                hollow={service.hollow}
              />
            ))}
          </div>

          {/* Duplicate scroll track for seamless loop */}
          <div className="flex gap-8 animate-infinite-scroll" aria-hidden="true">
            {duplicatedServices.map((service, index) => (
              <ServiceItem
                key={`second-${index}`}
                name={service.name}
                hollow={service.hollow}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMarquee;
