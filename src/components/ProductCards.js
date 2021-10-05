import React, {useEffect} from 'react';
import "./ProductCards.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Aos from 'aos';
import "aos/dist/aos.css";


toast.configure();

const ProductCards = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    const [product] = React.useState({
        name: "Startup Business & Business Plans",
        desc:"Planning, Branding, Graphic Design, Website Design & Digital Marketing ",
        price: 6800,
        
        
        name2: "Software & Web Developement",
        desc2:"Website Design, eCommerce Solutions & Website Maintenance",
        price2: 1900,
    
        name3: "Buisness Growth & Maintenance",
        desc3:"Google Ads, Social Media Marketing & Search engine Optimization",
        price3: 4300,


        name4: "Sales & Digital Marketing",
        desc4:"Digital Strategy, Marketing Automation, Content Writing & Google Ads",
        price4: 2200,
       
      });
        

      async function handleToken(token, addresses) {
        const response = await axios.post(
          "https://ry7v05l6on.sse.codesandbox.io/checkout",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
        //   toast("Something went wrong", { type: "error" });
        }
      }
    
        return (
        <>
            <div className="containerr">
                <div className="product" data-aos="zoom-in-down">
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <h3 className="para">On Sale ${product.price}</h3>
                    <img class="images" src="https://www.fiscalnepal.com/wp-content/uploads/2020/12/start-up.jpg"></img>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                    token={handleToken}
                    amount={product.price * 100}
                    name="Tesla Roadster"
                    billingAddress
                    shippingAddress
                />

                <div className="product" data-aos="zoom-in-down">
                    <h2>{product.name2}</h2>
                    <p>{product.desc2}</p>
                    <h3 className="para">On Sale ${product.price2}</h3>
                    <img class="images" src="https://lh3.googleusercontent.com/proxy/5RvjNpxFPGWfcpySczIArTI3C3SALUQ-jMF9iX7U_5LJ0mZTO7DVSesDBTo0-cK5353PgJ--8_LDxPkghp_JUxFH6dylaIm5_UjIlMsSk9NZFx0tYecuKtCv2xMLl5Uv"></img>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                    token={handleToken}
                    amount={product.price2 * 100}
                    name="Tesla Roadster"
                    billingAddress
                    shippingAddress
                />

                <div className="product" data-aos="zoom-in-down">
                    <h2>{product.name3}</h2>
                    <p>{product.desc3}</p>
                    <h3 className="para">On Sale ${product.price3}</h3>
                    <img class="images" src="https://us.123rf.com/450wm/marchmeena/marchmeena1901/marchmeena190100045/120892638-business-development-to-success-and-growing-growth-concept-businessman-pointing-arrow-graph-corporat.jpg?ver=6"></img>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                    token={handleToken}
                    amount={product.price3 * 100}
                    name="Tesla Roadster"
                    billingAddress
                    shippingAddress
                />

                <div className="product" data-aos="zoom-in-down">
                    <h2>{product.name4}</h2>
                    <p>{product.desc4}</p>
                    <h3 className="para">On Sale ${product.price4}</h3>
                    <img class="images" src="https://cliconference.com/wp-content/uploads/2018/08/shutterstock_457517419.jpg"></img>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                    token={handleToken}
                    amount={product.price4 * 100}
                    name="Tesla Roadster"
                    billingAddress
                    shippingAddress
                />  
            </div>
            
        </>
    )
}

export default ProductCards;
