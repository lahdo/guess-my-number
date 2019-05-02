import React, { Component } from 'react';
import { Link } from "react-router-dom"
import globalStyles from '../../Styles/Styles.js';
import cx from 'classnames';

export default class Instructions extends Component {
    render() {
        return (
            <div className={globalStyles["field"]}>
                <h1 className={globalStyles["title"]}>
                    INSTRUCTIONS
                    </h1>
                <ul>
                    <li>
                        <p className={globalStyles["subtitle"]}>
                            Try to guess <strong>the number</strong> computer has randomly selected.
                        </p>
                    </li>
                    <li>
                        <p className={globalStyles["subtitle"]}>
                            Enter your guess and see if your guess is too high or too low.
                        </p>
                    </li>
                    <li>
                        <p className={globalStyles["subtitle"]}>
                            Change your guess until the computer will tell you that you selected <strong>correct</strong> value!
                        </p>
                    </li>
                </ul>

                <p>
                    Current range is <code>[0 - 100]</code>.
                    </p>

            </div>
        );
    }
}