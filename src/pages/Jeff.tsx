import FadeIn from '../components/FadeIn';

export default function Jeff() {
  return (
    <div className="container py-4">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
        <FadeIn>
          <img 
            src="https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/02/2021-1026_faculty-jeffcannon-33.jpg" 
            alt="Prof. Jeff Cannon" 
            className="rounded-image"
            style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%' }}
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>Jeff Cannon</h1>
          <p style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 600, fontFamily: 'var(--font-display)' }}>Associate Professor of Chemistry</p>
        </FadeIn>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1000px' }}>

        <FadeIn delay={0.2}>
          <div style={{ paddingBottom: '5rem', borderBottom: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: '3.5rem' }}>Biosketch</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Jeff graduated from Occidental College magna cum laude with honors where he worked with Prof. Donald Deardorff. He then moved to UC Irvine where he worked with Prof. Larry Overman on catalysis and total synthesis projects to earn his Ph.D. in 2012. After two years as an NIH postdoctoral fellow in the laboratory of Nobel laureate Prof. Robert Grubbs, Jeff returned to his alma mater as a professor specializing in organic chemistry. Jeff teaches introductory organic chemistry as well as advanced classes in organic synthesis and physical organic chemistry. His research interests are centered around new methods for the stereoselective formation of carbon-carbon bonds. Outside of lab, Jeff enjoys long-distance cycling.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ paddingBottom: '5rem', borderBottom: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: '3.5rem' }}>Education</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <li>
                <div style={{ fontSize: '1.5rem', color: 'var(--text-color)', fontWeight: 600 }}>California Institute of Technology</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>NIH Postdoctoral Scholar 2012–2014</div>
                <div style={{ color: '#555', marginTop: '0.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Advisor: Robert H. Grubbs</div>
              </li>
              <li>
                <div style={{ fontSize: '1.5rem', color: 'var(--text-color)', fontWeight: 600 }}>University of California, Irvine</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Ph.D. in Chemistry (2007–2012)</div>
                <div style={{ color: '#555', marginTop: '0.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Advisor: Larry E. Overman</div>
              </li>
              <li>
                <div style={{ fontSize: '1.5rem', color: 'var(--text-color)', fontWeight: 600 }}>Occidental College</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>B.A. in Chemistry (2003–2007)</div>
                <div style={{ color: '#555', marginTop: '0.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Advisor: Donald R. Deardorff</div>
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div>
            <h2 style={{ fontSize: '3.5rem' }}>Honors and Grants</h2>
            <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              <li>National Institutes of Health R15 Grant, 2024</li>
              <li>Organic Syntheses Research Grant for Faculty at a PUI, 2024</li>
              <li>Henry Dreyfus Teacher-Scholar Award, 2022</li>
              <li>National Institutes of Health R15 Grant, 2020</li>
              <li>National Science Foundation Major Research Instrumentation Grant for a 400 MHz NMR Spectrometer (PI), 2020</li>
              <li>Organic Syntheses Research Grant for Faculty at a PUI, 2020</li>
              <li>National Science Foundation Major Research Instrumentation Grant for a high-performance computing cluster (co-PI), 2019</li>
              <li>National Science Foundation Research at Undergraduate Institutions Grant, 2019</li>
              <li>Occidental College Faculty Enrichment Grant, 2018</li>
              <li>ACS Petroleum Research Fund Undergraduate New Investigator Grant, 2016</li>
              <li>NIH Ruth L. Kirschstein NRSA Postdoctoral Fellowship, 2012-2014</li>
              <li>Bristol-Myers Squibb Minority Chemist Fellowship, 2010</li>
              <li>NSF Graduate Research Fellowship; Honorable Mention, 2008</li>
              <li>UC Irvine Dissertation Fellowship, 2012</li>
              <li>UC Irvine Chancellor’s Fellowship, 2007</li>
              <li>Barry M. Goldwater Scholar, 2006</li>
              <li>Pfizer Summer Research Fellow, 2006</li>
            </ul>
            <div style={{ marginTop: '4rem' }}>
              <a href="https://cannonchem.com/wp-content/uploads/2024/08/cannon-cv.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                Download Full CV
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
