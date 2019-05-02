import React, { Component } from 'react';
import { Link } from "react-router-dom"
import globalStyles from '../../components/Styles/Styles.js';
import cx from 'classnames';

export default class Footer extends Component {
    render() {
        return (
            <footer className={globalStyles["footer"]}>
                <div className={cx(globalStyles["content"], globalStyles["has-text-centered"])}>
                    <p>
                        This app was created in May 2019. <strong>Guess the number</strong> source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
                    </p>
                </div>
            </footer>
        );
    }
}