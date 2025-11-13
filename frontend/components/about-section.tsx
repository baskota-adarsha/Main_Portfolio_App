export default function AboutSection() {
 const technologies = [
  "React, Redux, Next.js, TypeScript, React Router, Context API",
  "Node.js, Express.js, MongoDB, Mongoose, Firebase, Supabase, MySQL","Postgres SQL",
  "HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap, Shadcn/UI",
  "Git, GitHub, Postman, REST APIs, JSON Web Tokens (JWT), Axios",
  "Vercel, Netlify, Render, Firebase Hosting, Ubuntu CLI, Nginx",
  "Jest, React Testing Library, VS Code, Visual Studio, MySQL Workbench",
]


  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-white">
      <div className="max-w-16xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600">About</h2>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            Hello, I'm Adarsha Baskota — a full-stack developer and computer science student passionate about building fast, intuitive, and scalable web applications. I love working with modern technologies like React, Node.js, Express, Next.js, and TypeScript to create meaningful digital experiences. Over the years, I’ve developed several projects ranging from e-commerce platforms to portfolio and blog systems, continuously sharpening my skills across both frontend and backend development. Here are some of the technologies I’ve worked with:
          </p>

          <ul className="space-y-2 text-gray-800 text-base sm:text-lg">
            {technologies.map((tech, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-teal-600 font-bold flex-shrink-0">•</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
