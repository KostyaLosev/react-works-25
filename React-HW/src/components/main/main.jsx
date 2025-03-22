import React from "react";
import styles from "./main.module.css";
import MainText from "./mainText/mainText";
import Categories from "./categories/categories";
import Items from "./items/items";

const Main = ({ incrementCart }) => {
    return (
        <div className={styles.main}>
            <MainText />
            <Items incrementCart={incrementCart} />
        </div>
    );
};

export default Main;