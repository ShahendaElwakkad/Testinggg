import React from 'react';
import MarketingCards from '../MarketingCards';
import Footer from '../Footer';

export default function Marketing() {
  return (
    <>
      <h1 className='marketing'></h1>
      <MarketingCards 
        title1="Online Marketing"
        paragraph1="Social Media Management, Social media designs, Social
                    media campaigns, Online order management & E-Mail Marketing Campaigns"

        title2="Offline Marketing"
        paragraph2="Offline Marketing Services include Outdoor advertising, 
                    Egyptian league advertising, Event management & Printing Packaging"


        title3="Outsourced Marketing"
        paragraph3="We offers the whole package at a fraction of the cost. We work remotely to deliver a full marketing services.
                    you don’t have to pay for our office space or employee benefits."


        title4="Media Production"
        paragraph4="Media Production Services include Photography Videography TV & Radio Ads."
      />

      <Footer />

      
    </>
  );
}
