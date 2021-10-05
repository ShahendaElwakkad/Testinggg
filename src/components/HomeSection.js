import React, {useEffect} from 'react';
import './HomeSection.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./OurWork.css";

const HomeSection = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <>
        <div className="container-fluid">
            <section id="features" >
                <h2 className="h2-OurWork">What We Do in Wasta </h2>
                <div class="row">
                    <div class="feature-box" data-aos="zoom-in">
                        <i class="icon fas fa-cogs fa-4x"></i>
                        <h2>Business Planning</h2>
                        <p>Grow your business with our expertise in Wasta Marketing Agency.</p>
                    </div>
                    <div class="feature-box" data-aos="zoom-in">
                        <i class="icon far fa-chart-bar fa-4x"></i>
                        <h2>Business Analysis</h2>
                        <p>Our team work by methodologies of how to engage with your audience and convert them into real.</p>
                    </div>
                    <div class="feature-box" data-aos="zoom-in">
                        <i class="icon fas fa-lightbulb fa-4x"></i>
                        <h2>Brand Development and Advertising</h2>
                        <p>Building brands, driving revenue and generating leads. </p>
                        <p>We take care of your advertising so you can focus on the business.</p>
                    </div>
                    <div class="feature-box" data-aos="zoom-in"> 
                        <i class="icon fas fa-code fa-4x"></i>
                        <h2>Web Design & Development</h2>
                        <p>Time to create your startup website by our tools and methodologies.</p>
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}

export default HomeSection;
