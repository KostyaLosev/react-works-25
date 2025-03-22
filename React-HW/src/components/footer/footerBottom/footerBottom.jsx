import React from "react";
import styles from "./footerBottom.module.css";
import Instagram from "../../../assets/Instagram.png";
import Twitter from "../../../assets/Twitter.png";
import Youtube from "../../../assets/Youtube.png";

const FooterBottom = ({ text }) => {
    const formatText = (text) => {
        const regex = /(Flowbase|Webflow)/g;
        const parts = text.split(regex);
        return parts.map((part, index) =>
            part === "Flowbase" || part === "Webflow" ? (
                <span key={index} className={styles.highlight}>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className={styles.bottom}>
            <p>{formatText(text)}</p>
            <div className={styles.socials}>
                <a href="#">
                    <img src={Instagram} alt="Instagram" className={styles.icon} />
                </a>
                <a href="#">
                    <img src={Twitter} alt="Twitter" className={styles.icon} />
                </a>
                <a href="#">
                    <img src={Youtube} alt="Youtube" className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default FooterBottom;