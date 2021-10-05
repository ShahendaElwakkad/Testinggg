import React, {useEffect} from 'react';
import "./ContactForm.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const ContactForm = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <>
            <div class="container" data-aos="zoom-in">
                <div class="contact-box">
                    <div class="left"></div>
                    <div class="right">
                        <h2>How We Can Help You ?</h2>
                        <input type="text" class="field" placeholder="Your Name" />
                        <input type="text" class="field" placeholder="Your Email" />
                        <input type="text" class="field" placeholder="Phone" />
                        <textarea placeholder="Message" class="field"></textarea>
                        <button class="button">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;
