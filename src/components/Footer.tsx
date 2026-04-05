import globalData from '../data/global.json';
import './Footer.css';

export default function Footer() {
  const { title, subtitle, contactLabel, addressLines, mapUrl, email } = globalData.footer;
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="footer-contact">
          <h4>{contactLabel}</h4>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            {addressLines.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx !== addressLines.split('\n').length - 1 && <br />}
              </span>
            ))}
          </a>
          <p style={{ marginTop: '0.5rem' }}>{email}</p>
        </div>
      </div>
    </footer>
  );
}
