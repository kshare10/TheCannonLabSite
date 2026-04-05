import FadeIn from '../components/FadeIn';
import pubsData from '../data/publications.json';

interface Author {
  name: string;
  underline: boolean;
}

interface Publication {
  authors: Author[];
  title: string;
  journal: string;
  year: number;
  volume: string;
  pages: string;
  doi: string;
  doiUrl: string;
}

function PubEntry({ pub }: { pub: Publication }) {
  return (
    <>
      {pub.authors.map((author, i) => (
        <span key={i}>
          {i > 0 && ', '}
          {author.underline ? <u>{author.name}</u> : author.name}
        </span>
      ))}
      {'; \u201C'}
      {pub.title}
      {',\u201D '}
      <em>{pub.journal}</em>
      {' '}
      <strong>{pub.year}</strong>
      {', '}
      <em>{pub.volume}</em>
      {', '}
      {pub.pages}
      {'. doi: '}
      <a href={pub.doiUrl} target="_blank" rel="noreferrer">{pub.doi}</a>
    </>
  );
}

const undergraduatePubs: Publication[] = pubsData.undergraduate;
const graduatePubs: Publication[] = pubsData.graduate;

export default function Publications() {
  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '8rem' }}>Publications</h1>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1200px' }}>
        
        <FadeIn delay={0.1}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Occidental College</h2>
            <p style={{ color: 'var(--accent-color)', marginBottom: '3rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Undergraduate co-authors are integral to our research</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '0', listStyle: 'none' }}>
              {undergraduatePubs.map((pub, idx) => (
                <li key={idx} style={{ 
                  marginTop: idx !== 0 ? '2rem' : '0',
                  paddingTop: idx !== 0 ? '2rem' : '0',
                  paddingBottom: '0',
                  borderTop: idx !== 0 ? '1px solid rgba(0, 229, 255, 0.15)' : 'none', 
                  fontSize: '1.2rem', color: 'var(--text-color)', lineHeight: '1.6' 
                }}>
                  <PubEntry pub={pub} />
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem' }}>Graduate and Postdoctoral</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '0', listStyle: 'none' }}>
              {graduatePubs.map((pub, idx) => (
                <li key={idx} style={{ 
                  marginTop: idx !== 0 ? '2rem' : '0',
                  paddingTop: idx !== 0 ? '2rem' : '0',
                  paddingBottom: '0',
                  borderTop: idx !== 0 ? '1px solid rgba(0, 229, 255, 0.15)' : 'none', 
                  fontSize: '1.2rem', color: 'var(--text-color)', lineHeight: '1.6' 
                }}>
                  <PubEntry pub={pub} />
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
