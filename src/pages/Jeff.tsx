import FadeIn from '../components/FadeIn';
import { Helmet } from 'react-helmet-async';
import jeffData from '../data/jeff.json';

export default function Jeff() {
  const { name, photo, titles, institution, biosketch, education, honors, cvUrl, seoTitle } = jeffData;

  return (
    <section className="container py-4">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={biosketch.substring(0, 160) + '...'} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={biosketch.substring(0, 160) + '...'} />
      </Helmet>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
        <FadeIn>
          <div style={{ flex: '1 1 min(100%, 400px)' }}>
            <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', marginBottom: '1rem' }}>{name}</h1>
            {titles.map((title, idx) => (
              <p key={idx} style={{ 
                fontSize: idx === 0 ? '2rem' : '1.6rem', 
                color: idx === 0 ? 'var(--accent-color)' : 'var(--text-secondary)', 
                fontWeight: idx === 0 ? 600 : 500, 
                fontFamily: 'var(--font-display)' 
              }}>
                {title}
              </p>
            ))}
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'var(--font-display)', marginTop: '0.5rem' }}>{institution}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{
            width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)'
          }}>
            <img
              src={photo}
              alt={name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
        </FadeIn>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1000px' }}>

        <FadeIn delay={0.2}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>Biosketch</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {biosketch}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>Education</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {education.map((edu, idx) => (
                <li key={idx}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--text-color)', fontWeight: 600 }}>{edu.institution}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{edu.degree}</div>
                  <div style={{ color: '#555', marginTop: '0.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Advisor: {edu.advisor}</div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>Honors and Grants</h2>
            <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              {honors.map((honor, idx) => (
                <li key={idx}>{honor}</li>
              ))}
            </ul>
            <div style={{ marginTop: '4rem' }}>
              <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn">
                Download Full CV
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
