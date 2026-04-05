import FadeIn from '../components/FadeIn';
import coursesData from '../data/courses.json';

interface Course {
  title: string;
  number: string;
  description: string;
  note: string | null;
}

const courses: Course[] = coursesData;

export default function Courses() {
  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', marginBottom: '8rem' }}>Courses</h1>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1000px' }}>
        {courses.map((course, idx) => (
          <FadeIn key={idx} delay={0.1 * (idx + 1)}>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: idx !== 0 ? '4rem' : '0', paddingTop: idx !== 0 ? '4rem' : '0', borderTop: idx !== 0 ? '1px solid rgba(0, 229, 255, 0.15)' : 'none' }}>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: 0 }}>{course.title}</h2>
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
