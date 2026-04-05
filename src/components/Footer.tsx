import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>The Cannon Lab</h3>
          <p>Occidental College Chemistry & Biochemistry</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <a href="https://maps.app.goo.gl/yCccBdMZ1Ymegh9a8" target="_blank" rel="noopener noreferrer">
            Norris Hall of Chemistry<br />
            Los Angeles, CA 90041
          </a>
        </div>
      </div>
    </footer>
  );
}
