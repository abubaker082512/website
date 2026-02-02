import NewsletterForm from './NewsletterForm';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__grid">
      <div>
        <h3>ABT IT Innovations Pvt. Ltd.</h3>
        <p>
          Building secure, scalable digital ecosystems for mid-market and enterprise
          clients across industries.
        </p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>123 Innovation Park, Bengaluru, IN</p>
        <p>+91 80 4000 2100</p>
        <p>hello@abtit.com</p>
      </div>
      <div>
        <h4>Solutions</h4>
        <ul>
          <li>Cloud &amp; DevOps</li>
          <li>Cybersecurity</li>
          <li>Data &amp; AI</li>
          <li>Product Engineering</li>
        </ul>
      </div>
      <div>
        <h4>Insights</h4>
        <p>Subscribe to receive practical IT modernization insights.</p>
        <NewsletterForm />
      </div>
    </div>
    <div className="footer__bottom">
      <p>© 2024 ABT IT Innovations Pvt. Ltd. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
