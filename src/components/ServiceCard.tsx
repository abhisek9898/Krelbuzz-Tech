import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="text-6xl text-blue-600 mb-8 ">{icon}</div>
      <h3 className="text-3xl font-bold mb-12">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default ServiceCard;
