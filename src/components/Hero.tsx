import portfolio from '../data/portfolio';
import { handleNavClick } from '../utils/scrollToId';
import { getSocialIcon, DownloadIcon, LocationIcon, AcademicCapIcon, BriefcaseIcon } from './Icons';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="space-y-6">
              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                👋 Hi, I'm{' '}
                <span className="gradient-text">{portfolio.name}</span>
              </h1>

              {/* Title */}
              <p className="text-xl md:text-2xl text-dark-300 font-medium">
                {portfolio.title}
              </p>

              {/* Bio */}
              <p className="text-dark-400 text-lg leading-relaxed max-w-xl">
                {portfolio.bio}
              </p>

              {/* Info Pills */}
              <div className="flex flex-wrap gap-3">
                {portfolio.location && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 rounded-full text-dark-300">
                    <LocationIcon className="w-4 h-4 text-primary-400" />
                    <span className="text-sm">{portfolio.location}</span>
                  </div>
                )}
                {portfolio.education[0] && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 rounded-full text-dark-300">
                    <AcademicCapIcon className="w-4 h-4 text-primary-400" />
                    <span className="text-sm">{portfolio.education[0].period}</span>
                  </div>
                )}
                {portfolio.experience[0] && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 rounded-full text-dark-300">
                    <BriefcaseIcon className="w-4 h-4 text-primary-400" />
                    <span className="text-sm">{portfolio.experience[0].role}</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={portfolio.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <DownloadIcon className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="btn-secondary"
                >
                  Contact Me
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                {portfolio.socials.map((social) => {
                  const Icon = getSocialIcon(social.icon);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in animate-delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-75" />
              
              {/* Profile Image Placeholder */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-dark-800 border-4 border-dark-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">{portfolio.name.charAt(0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
