import React from 'react';
import ContactService from '../ContactService';
import { Data2 } from '../Data';
import MarketingCards from '../MarketingCards';
import Footer from "../Footer";

const Design = () => {
    return (
        <>
            <h1 className="design"></h1>
            <ContactService {...Data2}/>
            <MarketingCards 
                title1="Strategy & Consultation"
                paragraph1="It's time to get ahead of the competition. You need a marketing strategy that sets you apart from the crowd.
                            Wasta Designs has been helping eCommerce businesses for years and will help you build a strategy that works."

                title2="UI Design"
                paragraph2="Bad UX has burned customers. They don't know how to use your site, and they're about to leave. We make your product look and feel great with our clean-style interface design process.
                            Let us create an easy-to-use design that converts. "

                title3="Woocommerce Development"
                paragraph3="Your business is growing, but your website is not. 
                Clients don't want to wait for slow pages and outdated features. Wasta Designs builds responsive, fast websites on WooCommerce Cart with the latest tech."


                title4="Maintenance & Technical Support"
                paragraph4="Your website goes down? You lose money and valuable time. Wasta Designs has your back with 99% uptime guaranteed, 24/7 technical support, and monthly maintenance to keep you up and running." />



                <MarketingCards 
                title1="Web Development"
                paragraph1="Our developers choose Woocommerce from different eCommerce web-platforms for many reasons. We focus on how to bring the best out of it to maximize conversions."

                title2="Hooks & Integrations"
                paragraph2="Our engineers integrate with any third party service API the business will need. Payments, inventory, shipping, customer services, marketing, automation, analysis & reporting "

                title3="Digital Marketing"
                paragraph3="Our digital team runs high-performance campaigns on Facebook and Google Ads. In parallel, we run ongoing Search Engine Optimization and experiment lots of automation."


                title4="App Developpment"
                paragraph4="Our developers code mobile apps dedicated to eCommerce only. We focus on usability and performance to guarantee intuitive app experience for our merchant's customers." />

                <Footer />
        </>
    )
}

export default Design;
