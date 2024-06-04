export default function About () {
    return (
        <section id="about" className="py-20 bg-gray-200 rounded-lg w-full">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">About DevTales</h2>
                <p className="text-lg mb-4">DevTales was inspired by our passion for web development and the desire to share our journey with the community. This project started as a way to document our learnings, projects, and experiences in the tech world. It evolved into a comprehensive platform where developers can find valuable resources, tutorials, and insights into the latest trends in web development.</p>
                <p className="text-lg mb-4">
                Our journey began in ALXSE program, where we were challenged to create a portfolio project that showcases our skills and growth. This project is a testament to our dedication and love for coding. You can learn more about our school and its programs <a href="https://www.alxafrica.com/" className="text-blue-500 hover:underline">here</a>.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div className="flex flex-col mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Our Team</h3>
            <ul className="list-disc list-inside">
              <li>
                <a href="https://www.linkedin.com/in/emma-kiloko-0b4823229/" className="text-blue-500 hover:underline">LinkedIn</a> |
                <a href="https://github.com/kilokomuli" className="text-blue-500 hover:underline"> GitHub</a> |
                <a href="https://x.com/MuliEmmah23" className="text-blue-500 hover:underline"> Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Project Repository</h3>
            <a href="https://github.com/kilokomuli/devtales" className="text-blue-500 hover:underline">GitHub Repository</a>
          </div>
        </div>
      </div>
    </section>
  );
};