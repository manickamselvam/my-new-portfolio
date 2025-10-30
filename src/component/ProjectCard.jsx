const ProjectCard = ({ projects }) => {
  return projects.map((item, index) => (
    <div
      key={index}
      className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={item.imagePath}
        alt="Project Thumbnail"
        className="object-cover h-24 p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{item.tittle}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
        {/* Skills Code Commented Temprorily */}
        {/* <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            React
          </span>
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Node.js
          </span>
          <span className="bg-yellow-100 text-yellow-700 text-sm font-medium px-3 py-1 rounded-full">
            JavaScript
          </span>
          <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
            Tailwind CSS
          </span>
        </div> */}

        <div className="flex justify-between items-center mt-4">
          <a
            href={item.linktoTheArticle}
            target="_blank"
            className="text-blue-600 hover:underline font-medium"
          >
            View Project
          </a>
          <a
            href={item.linktoTheArticle}
            target="_blank"
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  ));
};

export default ProjectCard;
