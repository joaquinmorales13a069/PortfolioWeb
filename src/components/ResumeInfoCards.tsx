
import { FaCalendarAlt } from "react-icons/fa";

type Props = {
    index: number;
    info1: number;
    info2: string;
    info3: string;
    info4: string;
    info5: string;
    info6?: string[];
};

export const ResumeInfoCards = (props: Props) => {
    return (
        <div
            className="border-l-4 border-yellow-500 pl-6 animate-slide-up-delay"
            style={{ animationDelay: `${props.index * 0.1}s`}}
        >
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {props.info2}
                        </h3>
                        <p className="text-lg text-yellow-600 font-semibold">
                            {props.info3}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                            <FaCalendarAlt className="text-sm" />
                            <span>{props.info4}</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    {props.info5}
                </p>

                <div className="flex flex-wrap gap-2">
                    {props.info6
                        ? props.info6.map((tech, techIndex) => (
                              <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium"
                              >
                                  {tech}
                              </span>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};
