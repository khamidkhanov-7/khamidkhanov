import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, MessageCircle, Instagram, Code } from 'lucide-react';

const Home = () => {
  const [showAnimations, setShowAnimations] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimations(true);
    }, 100);

    // Staggered animation stages
    const stages = [
      () => setAnimationStage(1), // 1s
      () => setAnimationStage(2), // 2s
      () => setAnimationStage(3), // 3s
      () => setAnimationStage(4), // 4s
    ];

    stages.forEach((stage, index) => {
      setTimeout(stage, (index + 1) * 1000);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 gradient-shift-animation overflow-hidden">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 ${
                animationStage >= 1 ? 'scale-in-animation float-animation pulse-glow-animation' : ''
              }`}
              style={{
                animationDelay: animationStage >= 1 ? '0s' : '1s'
              }}>
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center hover-glow">
                  <span className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">K7</span>
                </div>
              </div>
            </div>
            
            <h1 
              className={`text-5xl md:text-7xl font-bold text-white mb-6 hover-lift ${
                showAnimations ? 'typewriter-animation' : ''
              }`}
              style={{
                animationDelay: '0.5s'
              }}
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent gradient-shift-animation">
                Khamidkhanov7
              </span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto hover-lift ${
                animationStage >= 2 ? 'slide-in-left-animation' : ''
              }`}
              style={{
                animationDelay: animationStage >= 2 ? '0s' : '2s'
              }}
            >
              Full-stack developer passionate about creating innovative solutions and beautiful user experiences
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
                animationStage >= 3 ? 'scale-in-animation' : ''
              }`}
              style={{
                animationDelay: animationStage >= 3 ? '0s' : '3s'
              }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover-glow shadow-lg"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover-lift"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Social Links */}
            <div 
              className={`flex justify-center space-x-6 ${
                animationStage >= 4 ? 'slide-in-right-animation' : ''
              }`}
              style={{
                animationDelay: animationStage >= 4 ? '0s' : '4s'
              }}
            >
              <a href="https://github.com/khamidkhanov-7" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover-glow p-2 rounded-full">
                <Github size={24} />
              </a>
              <a href="https://leetcode.com/u/khamidkhanov7/" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover-glow p-2 rounded-full" title="LeetCode">
                <Code size={24} />
              </a>
              <a href="https://t.me/Khamidkhanov7" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover-glow p-2 rounded-full" title="Telegram">
                <MessageCircle size={24} />
              </a>
              <a href="https://instagram.com/khamidkhanov.7" className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover-glow p-2 rounded-full" title="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover-lift bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="text-4xl font-bold text-purple-400 mb-2 hover-glow">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center hover-lift bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="text-4xl font-bold text-blue-400 mb-2 hover-glow">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center hover-lift bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="text-4xl font-bold text-emerald-400 mb-2 hover-glow">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Work Preview */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover-lift">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover-lift border border-gray-700/50 hover:border-purple-500/50">
                <div className="h-48 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-lg mb-4 gradient-shift-animation hover-glow"></div>
                <h3 className="text-xl font-semibold text-white mb-2">Project {item}</h3>
                <p className="text-gray-400 mb-4">Description of the amazing project and its key features.</p>
                <Link
                  to="/projects"
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center transition-all duration-300 hover:translate-x-2"
                >
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover-lift"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;