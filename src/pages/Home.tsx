import Hero from '../components/Hero';
import FadeIn from '../components/FadeIn';
import './Home.css';

const posts = [
  {
    title: "New publication!",
    date: "October 24, 2024",
    author: "cannonchem",
    content: "Congratulations to Chris, Aerin, Gahan and Kenneth on their paper describing a photoredox-catalyzed chemoselective ketone reduction that just appeared in Tetrahedron Letters! We’re excited to be continuing to contribute to the vibrant field of photoredox catalysis.",
    image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2024/10/untitled-acs-document-1996-3.png?resize=676%2C161&ssl=1"
  },
  {
    title: "Summer Research 2024",
    date: "August 1, 2024",
    author: "cannonchem",
    content: "Another summer research program is on the books. This marks the tenth summer of research for the Cannon Lab! We had a great time discovering new chemistry and then sharing it with our colleagues.",
    images: [
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2024/08/img_2587-1.jpg?w=676&ssl=1",
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2024/08/img_2593-edited.jpg?w=676&ssl=1",
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2024/08/img_2590-edited.jpg?w=676&ssl=1",
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2024/08/img_2596.jpg?w=676&ssl=1",
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2024/08/img_2598.jpg?w=676&ssl=1"
    ]
  },
  {
    title: "Rachel Zhang ’23 Awarded NSF Graduate Research Fellowship!",
    date: "April 4, 2024",
    author: "cannonchem",
    content: "Congratulations to Cannon Lab alumnus Rachel Zhang ’23 for being awarded a Graduate Research Fellowship from the National Science Foundation! Rachel will use the award to support her graduate studies at the University of California, Santa Barbara."
  },
  {
    title: "2023 Summer Research Program",
    date: "August 4, 2023",
    author: "cannonchem",
    content: "Wednesday was the conference at the end of our summer research program. Another great summer of chemistry, colleagues, and sharing our work! Already can’t wait to continue our work in the Fall!",
    image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2023/08/img_1339-1.jpg?resize=676%2C507&ssl=1"
  },
  {
    title: "Cannon Lab at the NOS",
    date: "August 3, 2023",
    author: "cannonchem",
    content: "Jeff, Chris, and Ciara had a blast sharing our research at the 48th National Organic Chemistry Symposium at Notre Dame! It was great to meet new people, connect with old friends, and see a lot of inspirational chemistry over four days!",
    image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2023/08/img_4570.jpg?w=676&ssl=1"
  },
  {
    title: "Prof. Cannon Named Henry Dreyfus Teacher-Scholar",
    date: "November 3, 2022",
    author: "cannonchem",
    content: "Professor Cannon was selected as one of eight 2022 Henry Dreyfus Teacher-Scholars! This award is in recognition of young faculty who are both excellent scholars and dedicated to undergraduate education. Special thanks to all of the Cannon Lab members past and present whose hard work is reflected in this award!",
    image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/11/henry_award_receipts_announcement_twitter.jpg?resize=632%2C329&ssl=1"
  },
  {
    title: "Occidental Summer Research Conference",
    date: "August 4, 2022",
    author: "cannonchem",
    content: "Yesterday was Occidental’s Summer Research Conference, hosted by our Undergraduate research center. It was a fun day to share our science with our friends and colleagues. Congratulations to all the Cannon Lab students who presented posters or gave talks!",
    images: [
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/08/20220803_132031.jpeg?w=676&ssl=1",
      "https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/08/20220803_132036.jpeg?w=676&ssl=1"
    ]
  },
  {
    title: "Photoredox-catalyzed Oxidation of Anions",
    date: "February 9, 2022",
    author: "cannonchem",
    content: "Our work on the photoredox-catalyzed oxidation of anions to generate electrophilic radicals is published in The Journal of Organic Chemistry! This work generates 1,3-dicarbonyl and amidyl radicals by a stepwise proton-coupled electron transfer process for the functionalization of alkenes. The result is a highly atom-economical process for hydro-, amido-, and dialkylation of alkenes. We used experimental and computational mechanistic experiments to understand the role of the catalyst as an electron shuttle between starting material and product molecules.",
    image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2022/02/toc.jpg?resize=322%2C166&ssl=1"
  },
  {
    title: "Back in the Lab!",
    date: "July 26, 2021",
    author: "cannonchem",
    content: "After over a year of lab closures and limited access, the Cannon Lab is back at wet chemistry! We’re very excited to be back to making carbon-carbon bonds!",
    image: "https://i0.wp.com/cannonchem.com/wp-content/uploads/2021/07/img_8902.jpg?w=676&ssl=1"
  },
  {
    title: "NIH Grant funded!",
    date: "September 10, 2020",
    author: "cannonchem",
    content: "Our research in photoredox catalysis has been funded by a grant from the National Institute of General Medical Science of the National Institutes of Health! The funds from this grant will support a number of research students and any supplies they need to conduct their research. The reactions studied under this grant will enable the use of visible light to conduct challenging carbon-carbon bond forming reactions."
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container py-4">
        
        <div className="posts-feed">
          {posts.map((post, idx) => (
            <FadeIn key={idx} delay={0.1} direction="none">
              <article className="post-section">
                <div className="post-text-content">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-author">by {post.author}</span>
                  </div>
                  <p className="post-paragraph">{post.content}</p>
                </div>
                
                {post.image && (
                  <div className="post-image-spreader" style={{ display: 'flex', justifyContent: 'center' }}>
                    {post.image.includes('untitled-acs') || post.image.includes('toc.jpg') ? (
                      <div className="figure-soft-wrapper">
                        <img src={post.image} alt={post.title} className="figure-soft-img" />
                        <div className="figure-soft-overlay"></div>
                      </div>
                    ) : (
                      <img src={post.image} alt={post.title} className="rounded-image post-hero-image" />
                    )}
                  </div>
                )}

                {post.images && (
                  <div className="post-gallery-grid">
                    {post.images.map((img, i) => (
                      <img key={i} src={img} alt={`${post.title} gallery ${i}`} className="rounded-image gallery-image" />
                    ))}
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
