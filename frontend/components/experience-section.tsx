import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Global IME Bank Limited",
      location: "Kathmandu, Nepal",
      position: "Software Development Intern",
      duration: "Jan 2025 - Apr 2025",
      description:
        "Contributed to the development of an internal web application using the MERN stack (MongoDB, Express, React, Node.js). Built features that allowed users to input and view personal data such as name, address, and age, with PDF generation support for record keeping. Gained hands-on experience in API integration, database design, and user interface development using Tailwind CSS.",
    },
    {
      company: "Freelance Projects",
      location: "Remote",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
      description:
        "Designed and built multiple full-stack projects, including an e-commerce platform, a blog application, and portfolio websites using React, Node.js, Express, MongoDB, and Firebase. Focused on responsive design, authentication, and deployment using platforms like Vercel and Render.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-white mb-25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Experience Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600">
            Experience
          </h2>

          {/* Intro Text */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            I have worked with various companies and clients to deliver
            high-quality software solutions.
          </p>

          {/* Experience List */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all bg-white"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>

                <div className="space-y-2 flex-1">
                  {/* Company Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {exp.company}
                  </h3>

                  {/* Position */}
                  <p className="text-base sm:text-lg font-semibold text-teal-600">
                    {exp.position}
                  </p>

                  {/* Location & Duration */}
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm sm:text-base text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
