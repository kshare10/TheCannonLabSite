import FadeIn from '../components/FadeIn';

export default function Group() {
  const members = [
    { name: "Rachel Schachter", title: "Research Associate", detail: "A.B. Occidental College" },
    { name: "Allison Bello ’26", title: "Undergraduate", detail: "Biochemistry" },
    { name: "Oakley Cook ’27", title: "Undergraduate", detail: "Biochemistry" },
    { name: "Madeline Fernandez ’28", title: "Undergraduate", detail: "" },
    { name: "Ben Rachel Gross ’27", title: "Undergraduate", detail: "Chemistry" },
    { name: "Ixchel Hernandez ’27", title: "Undergraduate", detail: "Urban & Environmental Policy" },
    { name: "Kenneth Huang ’26", title: "Undergraduate", detail: "Chemistry" },
    { name: "Nathan Kim ’26", title: "Undergraduate", detail: "Biology" },
    { name: "Sua Kim ’28", title: "Undergraduate", detail: "" },
    { name: "Kyle Share ’27", title: "Undergraduate", detail: "Biochemistry and Kinesiology" },
    { name: "Ian Terell ’26", title: "Undergraduate", detail: "Chemistry and CSLC" },
    { name: "Ozan Topalan ’27", title: "Undergraduate", detail: "Biochemistry" },
    { name: "Jack Yurich ’28", title: "Undergraduate", detail: "" }
  ];
  const alumni = [
    "Morgan Jackson ’25", "Haeyoon Kim ’25", "Songhee Lee ’25", "Carter Park ’25", 
    "Zane Blum ’24", "Chris Boeke ’24", "Ciara Gillen ’24", "Kiana Kea ’24", "Allison Shao ’24",
    "Lucien Delgutte ’23", "Chris George ’23", "Gahan Lahiri ’23", "Kayla Lin ’23", "Rachel Zhang ’23",
    "Greg Evans ’22", "Clarissa Kiyomura ’22", "Claire Luethe ’22", "Kian Shamskhou ’22", "Max Young ’22",
    "Aerin Mellott ’21", "Alex Orebic ’21", "Sophia Yang ’21",
    "Kiersten Gabaldon ’20", "Marc Kawada ’20", "Yuri Lee ’20", "Kayla Steinke ’20",
    "Joseph Costello ’19", "Anne Marie Crooke ’19", "Daniel Essayan ’19", "Tre’Shunda James ’19", "Paul Tomlinson ’19",
    "Santiago Bedoya-Gallego ’18", "Molly Brown ’18", "Katherine Forbes ’18", "Scott Niman ’18", "Matthew Schmidt ’18", "Tina Zolfaghari ’18",
    "Natalie Dwulet ’17", "Nicholas Foy ’17", "Benjamin Sartor ’17", "Trent Benedick ’17", "Max Gruber ’17", "Brad Kawano ’17", "Isaac Wang ’17",
    "Jacob Sertich ’16", "Alex Rand ’15"
  ];

  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: '5rem', marginBottom: '2rem', textAlign: 'center' }}>The Group</h1>
      </FadeIn>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://i0.wp.com/cannonchem.com/wp-content/uploads/2025/09/img_5452-edited.jpg?resize=1040%2C1040&ssl=1" 
              alt="Cannon Lab Group Summer 2025" 
              className="rounded-image"
              style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
            <p style={{ marginTop: '2rem', fontSize: '1.5rem', color: 'var(--accent-color)', fontWeight: 600, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px' }}>Summer 2025</p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '4rem', padding: '0 2rem' }}>
          {members.map((member, idx) => (
            <FadeIn key={idx} delay={0.1 * (idx % 3)}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{member.name}</h3>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1.2rem', marginBottom: '1rem' }}>{member.title}</h4>
                {member.detail && <p style={{ color: '#555', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{member.detail}</p>}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: '4rem', padding: '4rem 0', borderTop: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Alumni</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
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
