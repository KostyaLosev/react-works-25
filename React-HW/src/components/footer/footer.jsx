import React from "react";
import FooterBrand from "./footerBrand/footerBrand";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterBottom from "./FooterBottom/FooterBottom";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <FooterBrand />
                <FooterLinks />
            </div>
            <FooterBottom text="Built by Flowbase• Powered by Webflow" />
        </footer>
    );
};

export default Footer;
