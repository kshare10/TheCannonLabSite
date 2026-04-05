import FadeIn from '../components/FadeIn';
import groupData from '../data/members.json';

export default function Group() {
  const { groupPhotoUrl, season, members, alumni } = groupData;

  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '2rem', textAlign: 'center' }}>The Group</h1>
      </FadeIn>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={groupPhotoUrl} 
              alt={`Cannon Lab Group ${season}`} 
              className="rounded-image"
              style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
            <p style={{ marginTop: '2rem', fontSize: '1.5rem', color: 'var(--accent-color)', fontWeight: 600, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px' }}>{season}</p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '4rem', padding: '0 2rem' }}>
          {members.map((member, idx) => (
            <FadeIn key={idx} delay={0.1 * (idx % 3)}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{member.name}</h3>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1.2rem', marginBottom: '1rem' }}>{member.title}</h4>
                {member.detail && <p style={{ color: '#555', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{member.detail}</p>}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: '4rem', padding: '4rem 0', borderTop: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', textAlign: 'center' }}>Alumni</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
              {alumni.map((alum, i) => (
                <div key={i} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                  {alum}
                </div>
              ))}
            </div>

          </div>
        </FadeIn>

      </div>
    </div>
  );
}
