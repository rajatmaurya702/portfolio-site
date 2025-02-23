import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-[30vh]">
        <div className="w-[85%] max-w-4xl px-6">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-3xl shadow-lg">
            {/* Left - Info */}
            <div className="md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Software Developer
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate software developer skilled in building efficient, scalable applications using modern technologies.
              </p>
            </div>

            {/* Right - Image + Name */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHYkmclaACRJw/profile-displayphoto-shrink_200_200/B56ZUz7V9CGsAY-/0/1740332950420?e=1746057600&v=beta&t=t3RROHc744Yp0aIAXXVAvU_ssqZfnhNWZo2tmlRqDGw"
                alt="Profile"
                className="w-[250px] h-[250px] object-cover rounded-full shadow-xl"
              />
              <h2 className="mt-3 text-2xl font-extrabold text-gray-900">Rajat Maurya</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Projects & Profiles Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

        {/* Projects Section */}
        <section className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🚀 Projects</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/rajatmaurya702/Screen-Recorder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                🎥 Screen Recorder
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rajatmaurya702/Chat-application"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                💬 Chat Application
              </a>
            </li>
          </ul>
        </section>

        {/* Profiles Section */}
        <section className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🌎 Profiles</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com/in/rajatmaurya017/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                🔗 LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rajatmaurya702"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                🐙 GitHub
              </a>
            </li>
            <li>
              <a
                href="https://codeforces.com/profile/rajat.maurya3423"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                🏆 Codeforces
              </a>
            </li>
            <li>
              <a
                href="https://www.codechef.com/users/rajat_3435"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                🍽️ CodeChef
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
