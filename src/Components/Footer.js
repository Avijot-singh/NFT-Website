import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
        <div className="footer-section">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Help & Support</h3>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Connect</h3>
            <ul>
                <li><a href="https://www.twitter.com/login" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Stay updated with the latest news and offers!</p>
            <input type="email" placeholder="Your email..." />
            <button>Subscribe</button>
        </div>
    </footer>
  );
}

export default Footer;
