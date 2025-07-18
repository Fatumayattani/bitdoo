import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Zap, Users, TrendingUp, CheckCircle, Star, Award, Clock, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Shield,
      title: 'Trustless & Secure',
      description: 'Smart contracts ensure funds are held securely in escrow until loan terms are met.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access Bitcoin microloans from anywhere in the world, no traditional bank required.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Loan requests are processed instantly through automated smart contracts.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the community, for the community. Transparent and decentralized.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const stats = [
    { label: 'Total Loans Funded', value: '$2.4M', icon: TrendingUp },
    { label: 'Active Borrowers', value: '1,250', icon: Users },
    { label: 'Success Rate', value: '94%', icon: CheckCircle },
    { label: 'Countries Served', value: '45', icon: Globe },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'São Paulo, Brazil',
      text: 'Bitdoo helped me expand my small business when traditional banks said no. The process was transparent and fair.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'James Okoye',
      location: 'Lagos, Nigeria',
      text: 'Fast, secure, and accessible. Bitdoo is revolutionizing how we think about microfinance in Africa.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      text: 'The reputation system builds trust, and the Bitcoin integration opens up global opportunities.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent animate-gradient"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center relative z-10">
            <div className="animate-fade-in-down mb-6">
              <img 
                src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                alt="Bitcoin" 
                className="w-20 h-20 mx-auto rounded-full shadow-lg animate-pulse-glow mb-4"
              />
            </div>
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Decentralized Bitcoin
              <span className="gradient-text block animate-gradient">Microloans</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Empowering global communities with trustless, transparent Bitcoin lending. 
              No banks, no middlemen - just peer-to-peer financial freedom built on the Internet Computer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {user ? (
                <>
                  <Link
                    to="/loan-request"
                    className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover-glow flex items-center justify-center group"
                  >
                    Apply for Loan
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/dashboard"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover-lift shadow-lg"
                  >
                    View Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover-glow flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover-lift shadow-lg"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4 hover-glow rounded-full p-3 w-fit mx-auto">
                  <stat.icon className="h-8 w-8 text-orange-500 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text animate-number-count">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 gradient-text">
              Why Choose Bitdoo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built on cutting-edge blockchain technology to provide the most secure, 
              transparent, and accessible lending platform for Bitcoin microloans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 card-enhanced rounded-xl hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full ${feature.bgColor} hover-glow`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-100/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 gradient-text">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simple, transparent, and secure lending process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              {
                step: '1',
                title: 'Create Account',
                description: 'Sign up and verify your identity to start your lending journey with Bitdoo.',
                icon: Users,
              },
              {
                step: '2',
                title: 'Submit Loan Request',
                description: 'Fill out your loan application with terms, amount, and repayment schedule.',
                icon: DollarSign,
              },
              {
                step: '3',
                title: 'Get Funded',
                description: 'Lenders review and fund your loan through secure smart contracts.',
                icon: CheckCircle,
              },
            ].map((item, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl hover-glow animate-pulse-glow">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{item.description}</p>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 gradient-text">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              See what our community members say about their Bitdoo experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-enhanced p-8 rounded-xl hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg hover-glow mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent animate-gradient"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of borrowers and lenders who trust Bitdoo for their Bitcoin microloan needs.
          </p>
          {!user && (
            <Link
              to="/signup"
              className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover-lift shadow-2xl inline-flex items-center group"
            >
              Create Your Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;