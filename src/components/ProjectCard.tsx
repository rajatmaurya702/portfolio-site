import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 transition-transform transform hover:scale-105 w-72">
      <img src={image} alt={title} className="w-72 h-40 object-cover rounded-md" />
      <h3 className="text-xl font-bold text-gray-900 mt-4">{title}</h3>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
      >
        Visit Project
      </a>
    </div>
  );
};

export default ProjectCard;
