import {
  Database,
  BarChart3,
  Code2,
  Server,
  Cloud,
  Wrench,
} from "lucide-react";

export default function AboutSection() {
  const technologies = [
    {
      category: "Data & Analytics",
      icon: Database,
      items: "SQL, PostgreSQL, MySQL, Python, Power BI, Excel, DAX",
    },
    {
      category: "Frontend Development",
      icon: Code2,
      items:
        "React, Redux, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS, Shadcn/UI",
    },
    {
      category: "Backend & Databases",
      icon: Server,
      items: "Node.js, Express.js, MongoDB, Mongoose, Firebase, Supabase",
    },
    {
      category: "APIs & Tooling",
      icon: Wrench,
      items: "Git, GitHub, Postman, REST APIs, JSON Web Tokens (JWT), Axios",
    },
    {
      category: "Deployment & Hosting",
      icon: Cloud,
      items: "Vercel, Netlify, Render, Firebase Hosting, Ubuntu CLI, Nginx",
    },
    {
      category: "Testing & Dev Environment",
      icon: BarChart3,
      items:
        "Jest, React Testing Library, VS Code, Visual Studio, MySQL Workbench",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600">
            About
          </h2>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            Hello, I'm Adarsha Baskota — a CS student and aspiring data engineer
            passionate about turning raw data into clear, actionable insights
            using SQL, Python, and Power BI. I pair that with a full-stack
            foundation in React, Next.js, Express, and MongoDB, so I can build
            the pipelines, dashboards, and applications around the data itself.
            Here are some of the technologies I've worked with:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                      {tech.category}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {tech.items}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
