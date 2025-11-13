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
    <section className="py-12 sm:py-16 md:py-20 lg:py-3 bg-white mb-25">
      <div className="max-w-16xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Experience Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600">Experience</h2>

          {/* Intro Text */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            I have worked with various companies and clients to deliver high-quality software solutions.
          </p>

          {/* Experience List */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-3">
                {/* Company Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {exp.company} ({exp.location})
                </h3>

                {/* Position */}
                <p className="text-base sm:text-lg font-semibold text-teal-600">{exp.position}</p>

                {/* Duration */}
                <p className="text-sm sm:text-base text-gray-600">Duration: {exp.duration}</p>

                {/* Description */}
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
