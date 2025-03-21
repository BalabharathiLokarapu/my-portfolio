export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      
      {/* 🔹 About Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">Hello, I'm Balabharathi Lokarapu</h1>
        <p className="mt-4 text-lg">
          Electronics & Communication Engineering Student | Passionate about AI & Web Development
        </p>
        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1ykWfXReDGGuHC41GiYUXorYDiMI0xYPy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          📄 Download Resume
        </a>
      </section>

      {/* 🔹 Skills Section */}
      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Skills</h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <li className="bg-white p-3 shadow rounded">Python</li>
          <li className="bg-white p-3 shadow rounded">Java</li>
          <li className="bg-white p-3 shadow rounded">SQL</li>
          <li className="bg-white p-3 shadow rounded">Data Structures & Algorithms</li>
          <li className="bg-white p-3 shadow rounded">Embedded Systems</li>
          <li className="bg-white p-3 shadow rounded">Web Development</li>
        </ul>
      </section>

      {/* 🔹 Certifications Section */}
      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">🎖 Certifications</h2>
        <ul className="mt-4">
          <li className="bg-white p-3 shadow rounded mb-2">Salesforce Certified AI Associate (Oct 2024)</li>
          <li className="bg-white p-3 shadow rounded mb-2">CodeChef Certifications - Python & SQL (2023)</li>
          <li className="bg-white p-3 shadow rounded mb-2">Python Certification - HackerRank (2024)</li>
        </ul>
      </section>

      {/* 🔹 Contact Section */}
      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">📩 Contact Me</h2>
        <p className="mt-2">📞 Phone: <strong>+91-9121058129</strong></p>
        <p>📧 Email: <strong><a href="mailto:balabharathilokarapu14@gmail.com" className="text-blue-500">balabharathilokarapu14@gmail.com</a></strong></p>
      </section>
      
    </main>
  );
}
