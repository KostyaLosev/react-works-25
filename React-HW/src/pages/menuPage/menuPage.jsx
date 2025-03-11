import React from "react";
import styles from "./menuPage.module.css"
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";

const MenuPage = () =>{
    return (
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default MenuPage;