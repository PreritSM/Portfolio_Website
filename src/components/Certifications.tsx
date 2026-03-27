import portfolio from '../data/portfolio';
import { CertificateIcon } from './Icons';

const Certifications = () => {
  return (
    <section id="certifications" className="bg-dark-900/30">
      <div className="section-container">
        <h2 className="section-heading text-center">Certifications</h2>
        <p className="section-subheading text-center">
          Professional certifications and achievements
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.certifications.map((cert, index) => (
            <div
              key={index}
              className="card group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Certificate Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-purple-500/30 transition-colors">
                <CertificateIcon className="w-7 h-7 text-primary-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-dark-400 text-sm mb-3">{cert.issuer}</p>
              
              {/* Year Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
