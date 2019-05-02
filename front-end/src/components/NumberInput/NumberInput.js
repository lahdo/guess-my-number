import React, { Component } from 'react';
import { Link } from "react-router-dom"
import globalStyles from '../../components/Styles/Styles.js';
import cx from 'classnames';

export default class NumberInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleChange(event) {
        this.props.setNumber(event.target.value);
    }

    handleOnClick(event) {
        this.props.checkGuess();
        event.preventDefault();
    }

    render() {
        return (
            <div className={cx(globalStyles["field"], globalStyles["is-grouped"])}>
                <p className={globalStyles["control"]}>
                    <input className={cx(globalStyles["input"], globalStyles["is-large"])}
                        type="text"
                        placeholder="Guess the number"
                        onChange={event => this.handleChange(event)}
                    />
                </p>
                <p className={globalStyles["control"]}>
                    <a className={cx(globalStyles["button"], globalStyles["is-large"], globalStyles["is-info"])}
                        onClick={this.handleOnClick} >
                        Guess
                    </a>
                </p>
            </div>
        );
    }
}