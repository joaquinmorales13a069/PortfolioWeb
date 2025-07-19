import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkedAlt,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { contactData } from "../data/portfolioData";

const Contact: React.FC = () => {
    // Load .env variables
    const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const getSocialIcon = (iconName: string) => {
        const icons: {
            [key: string]: React.ComponentType<{ className?: string }>;
        } = {
            FaGithub,
            FaLinkedin,
            FaTwitter,
            FaEnvelope,
        };
        return icons[iconName] || FaEnvelope;
    };

    // Gets input values and assigned them to form object (useState)
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Process form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(serviceId, templateId, e.currentTarget, {
                publicKey: publicKey,
            });
            console.log("Email sent successfully");
            alert("Email sent successfully");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-yellow-400
     to-yellow-600 p-8"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                        Contact
                    </h1>
                    <p className="text-xl text-white/80 animate-fade-in-delay">
                        Let's get in touch and start working together
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                {" "}
                                Get in Touch
                            </h2>

                            <div className="space-y-6">
                                {/* email */}
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <FaEnvelope className="text-2xl text-yellow-500" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            {contactData.email}
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <FaPhone className="text-2xl text-yellow-500" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600">
                                            {contactData.phone}
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <FaMapMarkedAlt className="text-2xl text-yellow-500" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Location
                                        </h3>
                                        <p className="text-gray-600">
                                            {contactData.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Follow Me
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {contactData.social.map((social) => {
                                    const Icon = getSocialIcon(social.icon);
                                    const isEmailLink =
                                        social.url.startsWith("mailto:");
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            {...(!isEmailLink && {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            })}
                                            className=" flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 hover:scale-105 transition-all duration-300 animate-slide-up-delay"
                                        >
                                            <Icon className="text-xl text-yellow-500" />
                                            <span className="font-medium text-gray-800">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Availability
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                    <span className="font-medium text-gray-800">
                                        Status
                                    </span>
                                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                                        Available
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                    <span className="font-medium text-gray-800">
                                        Response Time
                                    </span>
                                    <span className="text-gray-600">
                                        Within 24 hours
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                                    <span className="font-medium text-gray-800">
                                        Timezone
                                    </span>
                                    <span className="text-gray-600">
                                        Australian Eastern Standard Time(UTC+10)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form  */}
                    <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay-3">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Send Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <FaPaperPlane className="text-lg" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center animate-slide-up-delay-4">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            I'm always excited to work on new and challenging
                            projects. Let's discuss how I can help you achieve
                            your goals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href={`mailto:${contactData.email}`}
                                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
                            >
                                Email Me
                            </a>
                            <a
                                href={`tel:${contactData.phone}`}
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300"
                            >
                                Call Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
