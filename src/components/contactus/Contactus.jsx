import React from "react";
import "./Contactus.css";

const Contactus = () => {
    return (
        <>
            <div className="contact-us">
                <div className="contact-left">
                    <h2>Contact Us</h2>
                    <p>Malleshwaram , Square Road , Banglore -560023</p>
                    <br />
                    <br />
                    <div>
                        <p>+91 1234567890</p>
                        <br />
                        <p>+91 4757113636</p>
                    </div>
                </div>

                <div className="contact-center">
                    <h1>GERICHT</h1>
                    <p>
                        " Best way to find yourself is to find yourself in the
                        service of others "
                    </p>
                    <img
                        src="./images/spoon.png"
                        className="contactus-spoon"
                        alt=""
                    />
                    <div className="socials">
                        <img src="./images/facebook.png" alt="" />
                        <img src="./images/twitter.png" alt="" />
                        <img src="./images/instagram.png" alt="" />
                    </div>
                    <p>2023 Arthanur. All Rights reserved </p>
                </div>

                <div className="contact-right">
                    <h2>Working Hours</h2>
                    <p>Monday - Friday</p>
                    <p>10:00am to 2:00pm</p>
                    <br />
                    <p>Saturday - Sunday</p>
                    <p>10:00am to 11:00pm</p>
                </div>
            </div>
        </>
    );
};

export default Contactus;
