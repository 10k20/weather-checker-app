import React from 'react';
import './Footer.scss';

const Footer = () => (
    <footer>
        <div className='footer-container'>
            <div className='footer-breadcrumbs'>Weather App</div>
            <div className='footer-directory'>
                <div className='footer-directory-column'>
                    <div className='footer-directory-column-section'>
                        <div className='footer-directory-column-section-list'>
                            <h3 className='footer-directory-column-section-list-label'><a href="#/" className="inline-link">Socials</a></h3>
                            <div className='footer-directory-column-section-list-item'><a href="https://github.com/10k20" rel="noopener noreferrer" target="_blank" className="inline-link">Github</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://www.linkedin.com/in/kirill-knysh-6b249819b/" target="_blank" rel="noopener noreferrer" className="inline-link">LinkedIn</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://vk.com/artofficiales" target="_blank" rel="noopener noreferrer" className="inline-link">VK</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://instagram.com/ushida.samurai" target="_blank" rel="noopener noreferrer" className="inline-link">Instagram</a></div>
                        </div>
                    </div>
                </div>
                <div className='footer-directory-column'>
                    <div className='footer-directory-column-section'>
                        <div className='footer-directory-column-section-list'>
                            <h3 className='footer-directory-column-section-list-label'><a href="#/" className="inline-link">Tools</a></h3>
                            <div className='footer-directory-column-section-list-item'><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="inline-link">React</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Redux</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Saga</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" className="inline-link">Node.js</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Python</a></div>
                        </div>
                    </div>
                </div>
                <div className='footer-directory-column'>
                    <div className='footer-directory-column-section'>
                        <div className='footer-directory-column-section-list'>
                            <h3 className='footer-directory-column-section-list-label'><a href="#/" className="inline-link">Develop</a></h3>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Fonts</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Help Us</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Documentation</a></div>
                        </div>
                    </div>
                </div>
                <div className='footer-directory-column'>
                    <div className='footer-directory-column-section'>
                        <div className='footer-directory-column-section-list'>
                            <h3 className='footer-directory-column-section-list-label'><a href="#/" className="inline-link">Inspiration</a></h3>
                            <div className='footer-directory-column-section-list-item'><a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" className="inline-link">Apple</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">Google</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="inline-link">Youtube</a></div>
                        </div>
                    </div>
                </div>
                <div className='footer-directory-column'>
                    <div className='footer-directory-column-section'>
                        <div className='footer-directory-column-section-list'>
                            <h3 className='footer-directory-column-section-list-label'><a href="#/" className="inline-link">Support</a></h3>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Feedback</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Bug Reporting</a></div>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Contact Us</a></div>
                        </div>
                    </div>
                    <div className='footer-directory-column-section'>
                        <div className='footer-directory-column-section-list'>
                            <h3 className='footer-directory-column-section-list-label'><a href="#/" className="inline-link">Account</a></h3>
                            <div className='footer-directory-column-section-list-item'><a href="#/" target="_blank" rel="noopener noreferrer" className="inline-link">Coming Soon</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-mini'>
                <div className='footer-mini-news'>To view the latest developer news, visit <a className="inline-link" href="#/">News and Updates.</a></div>
                <div className='footer-mini-copyrights'>
                    <div className='footer-mini-copyrights-reserved'>Copyright © 2021 <a className="inline-link" href="https://github.com/10k20">10k20</a>. All rights reserved.</div>
                    <div className='footer-mini-copyrights-policy'>
                        <a href="#/" className='footer-mini-copyrights-policy-item inline-link'>Terms of Use</a>
                        <a href="#/" className='footer-mini-copyrights-policy-item inline-link'>Privacy Policy</a>
                        <a href="#/" className='footer-mini-copyrights-policy-item inline-link'>License Agreements</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;