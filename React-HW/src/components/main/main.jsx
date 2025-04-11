import React, {Component} from "react";
import styles from "./main.module.css"
import MainText from "./mainText/mainText";
import Categories from "./categories/categories";
import Items from "./items/items";


class Main extends Component {
    render() {
    return (
        <div className={styles.main}>
            <MainText/>
            <Categories/>
            <Items incrementCart={this.props.incrementCart}/>
        </div>
    )
}
}

export default Main;