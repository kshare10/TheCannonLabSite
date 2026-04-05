import FadeIn from '../components/FadeIn';

export default function Courses() {
  const courses = [
    {
      title: "Organic Chemistry I and II",
      number: "Chem 220 and 221",
      description: "Introductory organic chemistry is designed to give students the skills to understand the structure and interactions of covalently-bonded molecules containing carbon. Key topics include molecular structure, intermolecular interactions, reactivity, and synthesis. Special emphasis is placed on developing logical problem-solving skills around multi-step synthesis and electron motion in reaction mechanisms."
    },
    {
      title: "Organic Chemistry Labs I and II",
      number: "Chem 220L and 221L",
      description: "Organic chemistry lab teaches the techniques and general reactions of organic chemistry. The first semester focuses on introducing proper techniques for conducting reactions, purifying products, and analyzing the structure and purity of these products. The second semester applies these techniques to the synthesis of several interesting organic molecules."
    },
    {
      title: "Physical Organic Chemistry",
      number: "Chem 360",
      description: "Physical organic chemistry is the detailed study of organic reactions and their mechanisms. In this class, students are given the tools to create mechanistic hypotheses for organic processes and design experiments to support or disprove them. Students will be able to utilize frontier molecular orbital theory to make generalizations about reactivity. Students will also be exposed to density functional theory (DFT) as a method for studying the structure and reactivity of organic reactions.",
      note: "Offered in Spring of odd-numbered years"
    }
  ];

  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: '6rem', marginBottom: '8rem' }}>Courses</h1>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1000px' }}>
        {courses.map((course, idx) => (
          <FadeIn key={idx} delay={0.1} direction="none">
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: idx !== 0 ? '4rem' : '0', paddingTop: idx !== 0 ? '4rem' : '0', borderTop: idx !== 0 ? '1px solid rgba(0, 229, 255, 0.15)' : 'none' }}>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '3rem', margin: 0 }}>{course.title}</h2>
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                  {course.number}
                </span>
              </div>
              
              <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '900px' }}>
                {course.description}
              </p>
              
              {course.note && (
                <div style={{ marginTop: '2rem', color: '#555', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 600 }}>
                  * {course.note}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
