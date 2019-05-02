import React, { Component } from 'react';

import styles from './Main.module.css';
import globalStyles from '../Styles/Styles.js';
import Instructions from './Instructions/Instructions.js';
import NumberInput from '../NumberInput/NumberInput.js';
import Notification from './Notification/Notification.js';
import cx from 'classnames';
import { Link } from "react-router-dom"

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notificationOptions: {
                showTooHigh: false,
                showTooLow: false,
                showTooHighButClose: false,
                showTooLowButClose: false,
                showSuccess: false,
            },
            number: -1,
            randomNumber: 0,
            showSpinner: false,
            closeIndicator: 10,
            rangeOptions: {
                min: 0,
                max: 100
            }
        };

        this.setNotificationOptions = this.setNotificationOptions.bind(this);
        this.setNumber = this.setNumber.bind(this);
        this.checkGuess = this.checkGuess.bind(this);
        this.getRandomNumber = this.getRandomNumber.bind(this);
        this.setRandomNumber = this.setRandomNumber.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    componentDidMount() {
        this.setRandomNumber();
    }

    setRandomNumber() {
        this.setState({ "randomNumber": this.getRandomNumber() });
    }

    newGame() {
        let notificationOptions = Object.assign({}, this.state.notificationOptions);
        Object.keys(notificationOptions).forEach(function (key, index) {
            notificationOptions[key] = false;
        });
        this.setRandomNumber() 
        this.setNotificationOptions(notificationOptions);
    }

    setNotificationOptions(value) {
        this.setState({ "notificationOptions": value });
    }

    setNumber(value) {
        this.setState({ "number": value });
    }

    checkGuess() {
        console.log(this.state.number)
        let notificationOptions = Object.assign({}, this.state.notificationOptions);
        Object.keys(notificationOptions).forEach(function (key, index) {
            notificationOptions[key] = false;
        });

        if (this.state.number > this.state.randomNumber) {
            if ((this.state.number - this.state.randomNumber) < this.state.closeIndicator) {
                notificationOptions.showTooHighButClose = true;
            }
            else {
                notificationOptions.showTooHigh = true;
            }
        }
        else if (this.state.number < this.state.randomNumber) {
            if ((this.state.randomNumber - this.state.number) < this.state.closeIndicator) {
                notificationOptions.showTooLowButClose = true;
            }
            else {
                notificationOptions.showTooLow = true;
            }
        }
        else {
            notificationOptions.showSuccess = true;
        }

        this.setState({ "notificationOptions": notificationOptions });
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (this.state.rangeOptions.max - this.state.rangeOptions.min)) + this.state.rangeOptions.min;
    }

    render() {
        return (
            <div className={globalStyles["container"]}>
                <Instructions />
                <div className={cx(globalStyles["field"], globalStyles["is-grouped"])}>
                    <p className={globalStyles["control"]}>
                        <a className={cx(globalStyles["button"], globalStyles["is-primary"])}
                        onClick = {this.newGame}
                        >
                            <span>NEW GAME</span>
                        </a>
                    </p>
                </div>
                <Notification
                    notificationOptions={this.state.notificationOptions} />
                <div className={cx(globalStyles["section"])}>
                    <div className={cx(globalStyles["columns"], globalStyles["is-mobile"])}>
                        <div className={cx(globalStyles["column"], globalStyles["is-4"], globalStyles["is-offset-4"])}>
                            <NumberInput
                                number={this.state.number}
                                setNumber={this.setNumber}
                                checkGuess={this.checkGuess} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}