import React from "react";
import styles from "./main.module.css"
import MainText from "./mainText/mainText";
import Categories from "./categories/categories";
import Items from "./items/items";
import SeeMoreButton from "./seeMoreButton/seeMoreButton";

const Main = () => {
    return (
        <div className={styles.main}>
            <MainText/>
            <Categories/>
            <Items/>
            <SeeMoreButton/>
        </div>
    )
}

export default Main;