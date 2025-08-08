import React, { useState, useEffect } from 'react';
import { Code, Palette, Server, Smartphone, Award, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: Code, level: 95 },
    { name: 'UI/UX Design', icon: Palette, level: 88 },
    { name: 'Backend Development', icon: Server, level: 92 },
    { name: 'Mobile Development', icon: Smartphone, level: 85 },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Figma', 'Tailwind CSS', 'Next.js'
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up-animation' : ''}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent gradient-shift-animation">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className={`${isVisible ? 'slide-in-left-animation' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm Khamidkhanov7, a dedicated full-stack developer with a passion for creating 
                innovative digital solutions. My journey in programming began over 3 years ago, and 
                since then, I've been constantly learning and evolving with the ever-changing tech landscape.
              </p>
              <p>
                I specialize in building modern web applications using cutting-edge technologies like 
                React, TypeScript, and Node.js. My approach combines technical expertise with creative 
                problem-solving to deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and mentoring fellow developers.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'slide-in-right-animation' : ''}`} style={{ animationDelay: '0.5s' }}>
            <div className="w-80 h-80 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-2xl flex items-center justify-center float-animation pulse-glow-animation gradient-shift-animation hover-lift">
              <div className="text-6xl font-bold text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">K7</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-white mb-8 text-center ${isVisible ? 'scale-in-animation' : ''}`} style={{ animationDelay: '0.7s' }}>Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover-lift border border-gray-700/50 hover:border-purple-500/50 ${isVisible ? 'slide-in-left-animation' : ''}`}
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="text-purple-400 mr-3 hover-glow" size={24} />
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-blue-400 h-3 rounded-full transition-all duration-1000 hover-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-gray-400 mt-2">{skill.level}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-white mb-8 text-center ${isVisible ? 'scale-in-animation' : ''}`} style={{ animationDelay: '1.3s' }}>Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className={`bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-gray-700 hover:border-purple-400 hover:bg-gray-750 transition-all duration-300 hover-lift hover-glow ${isVisible ? 'scale-in-animation' : ''}`}
                style={{ animationDelay: `${1.5 + index * 0.05}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className={`bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 ${isVisible ? 'fade-in-up-animation' : ''}`} style={{ animationDelay: '2s' }}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What I Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover-lift">
              <Award className="text-purple-400 mx-auto mb-4 hover-glow float-animation" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Quality</h3>
              <p className="text-gray-300">
                I believe in delivering high-quality solutions that exceed expectations and stand the test of time.
              </p>
            </div>
            <div className="text-center hover-lift">
              <Code className="text-blue-400 mx-auto mb-4 hover-glow float-animation" size={48} style={{ animationDelay: '0.5s' }} />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">
                Staying at the forefront of technology and continuously learning new approaches and methodologies.
              </p>
            </div>
            <div className="text-center hover-lift">
              <Heart className="text-emerald-400 mx-auto mb-4 hover-glow float-animation" size={48} style={{ animationDelay: '1s' }} />
              <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-300">
                Working closely with clients and teams to create solutions that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;