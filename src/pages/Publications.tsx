import FadeIn from '../components/FadeIn';

export default function Publications() {
  const undergraduatePubs = [
    "Chris Boeke, Aerin Mellott, Gahan Lahiri, Hin Yu Kenneth Huang, Jeffrey S. Cannon*; “A Mild and Chemoselective Photoredox-Catalyzed Reduction of Aromatic Ketones,” Tetrahedron Lett. 2024, 152, ASAP.",
    "Katherine C. Forbes, Anne Marie Crooke, Yuri Lee, Masamu Kawada, Kian M. Shamskhou, Rachel A. Zhang, Jeffrey S. Cannon*; “Photoredox-catalyzed Oxidation of Anions for the Atom-Economical Hydro-, Amido-, and Dialkylation of Alkenes,” J. Org. Chem. 2022, 87, 3498.",
    "Donald R. Deardorff, Scott W. Niman, Mark I. Paulsen, Anasheh Sookezian, Meghan E. Whalen, Christopher J. Finlayson, Collrane Frivold, Hilary C. Brown, Jeffrey S. Cannon*; “Combined Enzyme- and Transition Metal-Catalyzed Strategy for the Enantioselective Syntheses of Nitrogen Heterocycles: (–)-Coniine, DAB-1, and Nectrisine,” ACS Omega 2020, 5, 2005–2014.",
    "Jeffrey S. Cannon*, Larry E. Overman*; “Discussion Addendum for Preparation of the COP Catalysts: [(S)-COP-OAc]2, [(S)-COP-Cl]2, and (S)-COP-hfacac,” Org. Synth. 2018, 95, 500–511.",
    "Natalie C. Dwulet, Tina A. Zolfaghari, Molly L. Brown, Jeffrey S. Cannon*; “Diastereoselective Synthesis of Unnatural Amino Acids by Alkylation of α-tert-Butanesulfinamide Auxiliary-Bound Enolates,” J. Org. Chem. 2018, 83, 11510–11518.",
    "Nicholas J. Foy, Katherine C. Forbes, Anne Marie Crooke, Maxwell D. Gruber, Jeffrey S. Cannon*; “Dual Lewis Acid/Photoredox-Catalyzed Addition of Ketyl Radicals to Vinylogous Carbonates in the Synthesis of 2,6-Dioxabicyclo[3.3.0]octan-3-ones,” Org. Lett. 2018, 20, 5727–5731.",
    "Jeffrey S. Cannon*, Larry E. Overman*; “Palladium(II)-Catalyzed Enantioselective Reactions Using COP Catalysts,” Acc. Chem. Res. 2016, 49, 2220–2231."
  ];

  const graduatePubs = [
    "Jeffrey S. Cannon*; “A Nitrone Dipolar Cycloaddition Strategy toward an Enantioselective Synthesis of Massadine,” Org. Lett. 2018, 20, 3883–3887.",
    "Shao-Xiong Luo, Jeffrey S. Cannon, Buck L. H. Taylor, Keary M. Engle, K. N. Houk, Robert H. Grubbs; “Z-Selective Cross-Metathesis and Homodimerization of 3E-1,3-Dienes: Reaction Optimization, Computational Analysis, and Synthetic Applications,” J. Am. Chem. Soc. 2016, 138, 14039–14046.",
    "Jeffrey S. Cannon, Lufeng Zou, Peng Liu, Yu Lan, Daniel J. O’Leary, K. N. Houk, Robert H. Grubbs; “Carboxylate-Assisted C(sp3)–H Activation in Olefin Metathesis-Relevant Ruthenium Complexes,” J. Am. Chem. Soc. 2014, 136, 6733–6743.",
    "Jeffrey S. Cannon, Robert H. Grubbs; “Alkene Chemoselectivity in Ruthenium-Catalyzed Z‑Selective Olefin Metathesis,” Angew. Chem., Int. Ed. 2013, 52, 9001–9004.",
    "Jeffrey S. Cannon, Angela C. Olson, Larry E. Overman; “Palladium(II)-Catalyzed Enantioselective Synthesis of 2-Vinyl Oxygen Heterocycles,” J. Org. Chem. 2012, 77, 1961–1973.",
    "Jeffrey S. Cannon, James H. Frederich, Larry E. Overman; “Palladacyclic Imidazoline-Naphthalene Complexes: Synthesis and Catalytic Performance in Pd(II)-Catalyzed Enantioselective Reactions of Allylic Trichloroacetimidates,” J. Org. Chem. 2012, 77, 1939–1951.",
    "Jeffrey S. Cannon, Larry E. Overman; “Is There No End to the Total Syntheses of Strychnine? Lessons to be Learned for Strategy and Tactics in Total Synthesis,” Angew. Chem., Int. Ed. 2012, 51, 4288–4311.",
    "Jeffrey S. Cannon, Stefan F. Kirsch, Larry E. Overman; “Catalytic Asymmetric Synthesis of Chiral Allylic Esters,” J. Am. Chem. Soc. 2010, 132, 15185–15191.",
    "Jeffrey S. Cannon, Stefan F. Kirsch, Larry E. Overman, Helen F. Sneddon; “Mechanism of the Cobalt Oxazoline Palladacycle (COP)-Catalyzed Asymmetric Synthesis of Allylic Esters,” J. Am. Chem. Soc. 2010, 132, 15192–15203."
  ];

  return (
    <div className="container py-4">
      <FadeIn>
        <h1 style={{ fontSize: '5rem', marginBottom: '8rem' }}>Publications</h1>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1200px' }}>
        
        <FadeIn delay={0.1}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Occidental College</h2>
            <p style={{ color: 'var(--accent-color)', marginBottom: '3rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Undergraduate co-authors are integral to our research</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '0', listStyle: 'none' }}>
              {undergraduatePubs.map((pub, idx) => (
                <li key={idx} style={{ padding: '2rem 0', borderTop: '1px solid rgba(0, 229, 255, 0.15)', fontSize: '1.2rem', color: 'var(--text-color)', lineHeight: '1.6' }}>
                  {pub}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Graduate and Postdoctoral</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '0', listStyle: 'none' }}>
              {graduatePubs.map((pub, idx) => (
                <li key={idx} style={{ padding: '2rem 0', borderTop: '1px solid rgba(0, 229, 255, 0.15)', fontSize: '1.2rem', color: 'var(--text-color)', lineHeight: '1.6' }}>
                  {pub}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
