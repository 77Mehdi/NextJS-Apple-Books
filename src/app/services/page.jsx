"use client"; 

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive, fast, and SEO-friendly websites to meet your business needs.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Our team crafts native and cross-platform mobile apps for Android and iOS.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "We design intuitive user interfaces and delightful experiences for all platforms.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description:
        "We offer scalable cloud infrastructure services to enhance business operations.",
      icon: "☁️",
    },
    {
      title: "E-commerce Development",
      description:
        "Our experts build online stores with seamless shopping experiences.",
      icon: "🛒",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your business with our data-driven digital marketing strategies.",
      icon: "📊",
    },
  ];

  return (
    <div className="dark:bg-gray-900  bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold dark:text-gray-100 text-gray-800 mb-10">Our Services</h1>
        <p className="text-lg dark:text-gray-100 text-gray-600 mb-16">
          We offer a range of services to help your business thrive in the
          digital age.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="text-6xl">{service.icon}</div>
              <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
