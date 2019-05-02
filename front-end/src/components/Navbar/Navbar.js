import React, { Component } from 'react';
import globalStyles from '../../components/Styles/Styles.js';
import cx from 'classnames';

export default class Navbar extends Component {
    render() {
        return (
            <nav className={cx(globalStyles["navbar"], globalStyles["is-info"])}>
                <div className={globalStyles["navbar-brand"]}>
                    <a className={globalStyles["navbar-item"]} href="/">
                        <img src="../imgs/logo.png" alt="Guess the number logo" width="192" height="28" />
                    </a>
                    <div className={cx(globalStyles["navbar-burger"], globalStyles["burger"])}
                        data-target="navMenuExample4">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navMenuExample4" className={globalStyles["navbar-menu"]}>
                    <div className={globalStyles["navbar-start"]}>
                        <a className={globalStyles["navbar-item"]} href="/">
                            Home
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}




