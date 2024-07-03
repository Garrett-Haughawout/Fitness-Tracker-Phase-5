import React, { useContext } from 'react';
import '../styles/Home.css';

function Home({ ThemeContext }) {
    const theme = useContext(ThemeContext);
    const classAddition = theme === 'dark' ? '-dark' : '';
    
    return (
        <div className={`home-container${classAddition}`}>
            <section className={`home-header${classAddition}`}>
                <h1>Welcome to FitLife</h1>
                <p>Your journey to a healthier life starts here.</p>
                <button className={`cta-button${classAddition}`}>Get Started</button>
            </section>
            <section id="workouts" className={`home-content${classAddition}`}>
                <div className={`content-box${classAddition}`}>
                    <h2>Workout Plans</h2>
                    <p>Customized workout plans tailored to your goals.</p>
                </div>
                <div className={`content-box${classAddition}`}>
                    <h2>Nutrition Guides</h2>
                    <p>Personalized nutrition plans to fuel your body.</p>
                </div>
                <div className={`content-box${classAddition}`}>
                    <h2>Track Progress</h2>
                    <p>Monitor your progress and stay motivated.</p>
                </div>
            </section>
            <section className={`home-features${classAddition}`}>
                <div className={`feature-box${classAddition}`}>
                    <h2>Community Support</h2>
                    <p>Join a community of fitness enthusiasts for support and motivation.</p>
                </div>
                <div className={`feature-box${classAddition}`}>
                    <h2>Expert Trainers</h2>
                    <p>Get guidance from certified trainers to reach your fitness goals.</p>
                </div>
            </section>
            <section id="contact" className={`home-contact${classAddition}`}>
                <h2>Contact Us</h2>
                <p>Have questions? Reach out to our support team for assistance.</p>
                <form className={`contact-form${classAddition}`}>
                    <input className='contact-form-input-dark' type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Home;
