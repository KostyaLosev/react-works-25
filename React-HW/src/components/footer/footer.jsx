import React, {Component} from "react";
import FooterBrand from "./footerBrand/footerBrand";
import FooterLinks from "./footerLinks/footerLinks";
import FooterBottom from "./footerBottom/footerBottom";
import styles from "./footer.module.css";

class Footer extends Component {
    render(){
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <FooterBrand/>
                <FooterLinks/>
            </div>
            <FooterBottom text="Built by Flowbase• Powered by Webflow" />
        </footer>
    );
};
};

export default Footer;
