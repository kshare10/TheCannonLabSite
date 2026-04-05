import FadeIn from '../components/FadeIn';

export default function Research() {
  const sections = [
    {
      title: "Photoredox Dual-Catalysis for Umpolung C–C Bond Forming Reactions",
      text: "With the ultimate goal of finding new catalytic reactivity for C–C bond forming umpolung reactions, we are investigating the combination of photoredox catalysts with base or acid co-catalysis. We have used this strategy to develop the reactivities of ketyl and 1,3-dicarbonyl radicals. These radical intermediates provide access to challenging bond forming processes from stable and readily available ketone or dicarbonyl starting materials. The resulting reactivity is more efficient and greener than the corresponding samarium(II) or manganese(III)-mediated reactions.",
      references: (
        <>
          <span style={{ color: '#ffffff' }}>See: </span>
          <a href="http://dx.doi.org/10.1021/acs.orglett.8b02442" target="_blank" rel="noreferrer">Foy, N. J.; Forbes, K. C.; Crooke, A. M.; Gruber, M. D.; Cannon, J. S. <i>Org. Lett.</i> <b>2018</b>, <i>20</i>, 5727</a> and <a href="https://dx.doi.org/10.1021/acs.joc.1c03055" target="_blank" rel="noreferrer">Forbes, K. C.; Crooke, A. M.; Lee, Y.; Kawada, M.; Shamskhou, K. M.; Zhang, R. A.; Cannon, J. S. <i>J. Org. Chem.</i> <b>2022</b>, <i>87</i>, 3498</a>.
        </>
      ),
      image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/08/unsaved-chemdraw-document.jpeg?resize=485%2C203&ssl=1"
    },
    {
      title: "Auxiliary-Directed Enolate Alkylation",
      text: "New stereoselective syntheses of carbon–carbon bonds are in constant demand. We are working to develop the use of sulfinamide auxiliaries as an alternative strategy to access amino acid derivatives. These reactions provide high diastereoselectivity in the formation of new C–C bonds in the synthesis of unnatural amino acids. This work has the advantage of the large family of reactions available to enolate nucleophiles, and we hope to apply this approach to an array of diastereoselective reactions.",
      references: (
        <>
          <span style={{ color: '#ffffff' }}>See: </span>
          <a href="http://dx.doi.org/10.1021/acs.joc.8b01379" target="_blank" rel="noreferrer">Dwulet, N. C.; Zolfaghari, T. Z.; Brown, M. L.; Cannon, J. S. <i>J. Org. Chem.</i> <b>2018</b>, <i>83</i>, 11510</a>.
        </>
      ),
      image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2019/12/untitled-totsyn-1colacs-1-1.jpeg?resize=580%2C105&ssl=1"
    },
    {
      title: "Computational Evaluation of Organic Reaction Mechanisms",
      text: "The utility and practical application of quantum mechanical theory to synthetic organic chemistry is growing at a rapid pace. We employ theoretical methods to understand underlying catalytic reactivity and aid in their development of new catalysts with improved reactivity and selectivity. The low cost and increasing accuracy of theory make it invaluable for modern methodology development.",
      references: (
        <>
          <span style={{ color: '#ffffff' }}>See: </span>
          <a href="http://dx.doi.org/10.1021/acs.joc.8b01379" target="_blank" rel="noreferrer">Dwulet, N. C.; Zolfaghari, T. Z.; Brown, M. L.; Cannon, J. S. <i>J. Org. Chem.</i> <b>2018</b>, <i>83</i>, 11510</a> and <a href="https://dx.doi.org/10.1021/acs.joc.1c03055" target="_blank" rel="noreferrer">Forbes, K. C.; Crooke, A. M.; Lee, Y.; Kawada, M.; Shamskhou, K. M.; Zhang, R. A.; Cannon, J. S. <i>J. Org. Chem.</i> <b>2022</b>, <i>87</i>, 3498</a>.
        </>
      ),
      image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2016/06/untitled3.png?resize=401%2C179&ssl=1"
    },
    {
      title: "Stereoselective Total Synthesis of Natural Products",
      text: "New reaction methodologies must be tested in complex settings to examine the frontiers of their utility. Natural products not only provide inspiration for the development of new reactions, but are also the ideal testing ground for new methods.",
      references: (
        <>
          <span style={{ color: '#ffffff' }}>See: </span>
          <a href="http://dx.doi.org/10.1021/acsomega.9b03990" target="_blank" rel="noreferrer">Deardorff, D. R.; Niman, S. W.; Paulsen, M. I.; Sookezian, A.; Whalen, M. E.; Finlayson, C. J.; Frivold, C.; Brown, H. C.; Cannon, J. S. <i>ACS Omega</i> <b>2020</b>, <i>5</i>, 2005</a>.
        </>
      ),
      image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/08/unsaved-chemdraw-document-1.jpeg?resize=360%2C286&ssl=1"
    }
  ];

  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: '5rem', marginBottom: '4rem', textAlign: 'center' }}>Research Areas</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p style={{ fontSize: '1.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 8rem auto' }}>
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
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>{section.text}</p>
                <p style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{section.references}</p>
              </div>
              {section.image && (
                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                  <div className="figure-soft-wrapper">
                    <img src={section.image} alt={section.title} className="figure-soft-img" />
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
