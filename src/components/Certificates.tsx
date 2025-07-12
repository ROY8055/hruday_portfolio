import React from 'react';

const Certificates = () => {
  const certs = [
    {
      title: "Full Stack Development - Udemy",
      link: "https://example.com/certificate1",
      date: "June 2024"
    },
    {
      title: "AI & ML Internship - IBM",
      link: "https://example.com/certificate2",
      date: "May 2024"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Certificates</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {certs.map((cert, idx) => (
          <li key={idx}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {cert.title} ({cert.date})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
