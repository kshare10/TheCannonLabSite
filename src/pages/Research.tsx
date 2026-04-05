import FadeIn from '../components/FadeIn';
import researchData from '../data/research.json';

interface Reference {
  text: string;
  url: string;
}

interface ResearchSection {
  title: string;
  text: string;
  image: string;
  references: Reference[];
}

const sections: ResearchSection[] = researchData;

export default function Research() {
  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: '5rem', marginBottom: '4rem', textAlign: 'center' }}>Research Areas</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem auto', lineHeight: '1.6' }}>
          Developing new methods for stereoselective and catalytic carbon-carbon bond formation.
        </p>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
        {sections.map((section, idx) => (
          <FadeIn key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
            <div style={{ 
              display: 'flex', 
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              gap: '4rem', 
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: idx !== 0 ? '4rem' : '0',
              paddingTop: idx !== 0 ? '4rem' : '0',
              borderTop: idx !== 0 ? '1px solid rgba(0, 229, 255, 0.15)' : 'none'
            }}>
              <div style={{ flex: '1 1 500px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{section.title}</h2>
                <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {section.text}
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  <span style={{ color: '#ffffff' }}>See: </span>
                  {section.references.map((ref, refIdx) => (
                    <span key={refIdx}>
                      {refIdx > 0 && ' and '}
                      <a href={ref.url} target="_blank" rel="noreferrer">{ref.text}</a>
                    </span>
                  ))}.
                </p>
              </div>
              {section.image && (
                <div style={{ flex: '0 1 400px' }}>
                  <div className="figure-soft-wrapper">
                    <img src={section.image} alt={section.title} className="rounded-image" style={{ width: '100%' }} />
                    <div className="figure-soft-overlay"></div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
