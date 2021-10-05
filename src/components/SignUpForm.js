import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const SignUpForm = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <>
            <div class="container" data-aos="zoom-in">
                <div class="contact-box">
                    <div class="left"></div>
                    <div class="right">
                        <h2>Join Our Community</h2>
                        <input type="text" class="field" placeholder="Your First Name" />
                        <input type="text" class="field" placeholder="Your Last Name" />
                        <input type="text" class="field" placeholder="Email" />
                        <input type="password" class="field" placeholder="Password" />
                        <input type="password" class="field" placeholder="Password again" />
                        <button class="button">Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpForm;