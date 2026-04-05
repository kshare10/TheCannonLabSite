import { useState } from 'react';
import Hero from '../components/Hero';
import FadeIn from '../components/FadeIn';
import { Helmet } from 'react-helmet-async';
import globalData from '../data/global.json';
import allPostsData from '../data/posts.json';
import './Home.css';

interface Post {
  title: string;
  date: string;
  author: string;
  contentHtml: string;
  image?: string;
  images?: string[];
  videoUrl?: string;
}

const posts: Post[] = Array.isArray(allPostsData) ? allPostsData : (allPostsData as any).posts || [];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(5);
  const { homeTitle, homeDescription } = globalData.seo;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, posts.length));
  };
  return (
    <>
      <Helmet>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDescription} />
        <meta property="og:title" content={homeTitle} />
        <meta property="og:description" content={homeDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <section className="container py-4">
        
        <div className="posts-feed">
          {posts.slice(0, visibleCount).map((post, idx) => (
            <FadeIn key={idx} delay={0.1} direction="none">
              <article className="post-section">
                <div className="post-text-content">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-author">by {post.author}</span>
                  </div>
                  <div className="post-paragraph rich-text-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </div>
                
                {post.videoUrl && (
                  <div className="post-video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '24px', width: '100%' }}>
                    <iframe src={post.videoUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allowFullScreen></iframe>
                  </div>
                )}

                {post.image && (
                  <div className="post-image-spreader" style={{ display: 'flex', justifyContent: 'center' }}>
                    {post.image.includes('untitled') || post.image.includes('toc.jpg') || post.image.includes('screen-shot') ? (
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
              {idx !== Math.min(visibleCount, posts.length) - 1 && (
                <hr className="post-separator" />
              )}
            </FadeIn>
          ))}
        </div>

        {visibleCount < posts.length && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <button 
              onClick={handleLoadMore}
              style={{
                background: 'transparent',
                border: '2px solid rgba(0, 229, 255, 0.8)',
                color: 'var(--accent-color)',
                padding: '1rem 3rem',
                fontSize: '1.25rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Load More Old Stories
            </button>
          </div>
        )}
      </section>
    </>
  );
}
