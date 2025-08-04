import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices and Patterns',
      excerpt: 'Learn how to structure and organize your React applications for maximum scalability and maintainability. Discover proven patterns and practices used by industry leaders.',
      content: 'Full article content would go here...',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'Architecture', 'Best Practices']
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the emerging trends and technologies that are shaping the future of web development. From AI integration to new frameworks, here\'s what to expect.',
      content: 'Full article content would go here...',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Trends', 'Future', 'Technology', 'Innovation']
    },
    {
      id: 3,
      title: 'Mastering TypeScript: Advanced Techniques for Better Code',
      excerpt: 'Take your TypeScript skills to the next level with advanced techniques, utility types, and design patterns that will make your code more robust and maintainable.',
      content: 'Full article content would go here...',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'TypeScript',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'Advanced', 'Programming', 'Types']
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js and Express: A Complete Guide',
      excerpt: 'A comprehensive guide to building robust and scalable RESTful APIs using Node.js and Express. Learn about routing, middleware, authentication, and more.',
      content: 'Full article content would go here...',
      date: '2023-12-28',
      readTime: '12 min read',
      category: 'Backend',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Express', 'API', 'Backend']
    },
    {
      id: 5,
      title: 'CSS Grid vs Flexbox: When to Use Each Layout Method',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal results in your web projects.',
      content: 'Full article content would go here...',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'CSS',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CSS', 'Layout', 'Grid', 'Flexbox']
    },
    {
      id: 6,
      title: 'Database Design Principles: From Concept to Implementation',
      excerpt: 'Learn the fundamental principles of database design, normalization, and how to create efficient database schemas for your applications.',
      content: 'Full article content would go here...',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Database',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Database', 'Design', 'SQL', 'Architecture']
    }
  ];

  const categories = ['All', 'React', 'TypeScript', 'Web Development', 'Backend', 'CSS', 'Database'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials about web development, technology, and the ever-evolving digital landscape
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {new Date(filteredPosts[0].date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock size={16} className="mr-1" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{filteredPosts[0].title}</h3>
                  <p className="text-gray-300 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold">
                    Read More <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm">
                  Read More <ArrowRight className="ml-1" size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-gray-300">
              Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter and get the latest articles, tutorials, and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;