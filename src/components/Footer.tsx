import React, { useState } from "react";
import { IoChatbubbleEllipsesSharp, IoSend, IoClose } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]); // State to store messages

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    //send the message
    console.log("Message sent:", message);
    // messages array
    setMessages([...messages, message]);
    // Clear
    setMessage("");
  };

  return (
    <footer className="bg-gray-500 p-4 mt-0">
      <div className="container mx-8 flex justify-around text-white ">
        <div>&copy; 2024 Krelbuzz Tech. All rights reserved.</div>
        {/* Social media and chat */}
        <div className="flex items-center space-x-8">
          <div className="flex space-x-8">
            <FaLinkedin className="text-white hover:text-blue-500 text-2xl cursor-pointer" />
            <FaTwitter className="text-white hover:text-blue-500 text-2xl cursor-pointer" />
            <FaGithub className="text-white hover:text-blue-500 text-2xl cursor-pointer" />
            <FaFacebook className="text-white hover:text-blue-500 text-2xl cursor-pointer" />
          </div>
          <IoChatbubbleEllipsesSharp
            className="text-white hover:text-blue-500 text-2xl cursor-pointer"
            onClick={toggleChat}
          />
        </div>
      </div>
      {/* Chat dialog box */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96 h-96">
            {/* Close button */}
            <IoClose
              className="text-gray-500 absolute top-7 right-7 cursor-pointer text-3xl"
              onClick={toggleChat}
            />
            {/* Chat content */}
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              Chat with us
              <AiOutlineSmile className="ml-2 text-yellow-500 text-2xl" />
            </h2>
            {/* Render messages */}
            <div className="mb-2 overflow-y-auto h-64 border-b border-gray-300">
              {messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  {msg}
                </div>
              ))}
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 outline-none px-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <IoSend
                className="text-blue-500 text-xl cursor-pointer"
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
