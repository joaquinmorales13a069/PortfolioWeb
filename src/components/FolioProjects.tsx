
import { FaCode, FaEye, FaGithub } from "react-icons/fa";

type Props = {
    index: number;
    id: number;
    title: string;
    liveLink: string;
    githubLink: string;
    description: string;
    technologies: string[];
    image: string;
};

const FolioProjects = (props: Props) => {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up-delay"
            style={{ animationDelay: `${props.index * 0.1}s` }}
        >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <FaCode className="text-6xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">
                            {props.title}
                        </p>
                    </div>
                </div>

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {props.liveLink && (
                        <a
                            href={props.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                        >
                            <FaEye className="text-lg" />
                        </a>
                    )}
                    {props.githubLink && (
                        <a
                            href={props.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {props.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {props.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {props.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                    {props.liveLink && (
                        <a
                            href={props.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                        >
                            <FaEye className="text-sm" />
                            <span>Live Demo</span>
                        </a>
                    )}
                    {props.githubLink && (
                        <a
                            href={props.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center space-x-2"
                        >
                            <FaGithub className="text-sm" />
                            <span>Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FolioProjects;
