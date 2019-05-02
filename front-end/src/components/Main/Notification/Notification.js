import React, { Component } from 'react';
import { Link } from "react-router-dom"
import globalStyles from '../../Styles/Styles.js';
import cx from 'classnames';
import styles from './Notification.module.css';

export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.renderNotification = this.renderNotification.bind(this);
    }

    render() {
        return (
            <div>
                {this.renderNotification()}
            </div>
        );
    }

    renderNotification() {
        let text = "";
        let attribute = "";

        if (this.props.notificationOptions.showTooHigh) {
            text = "Too high!";
            attribute = "is-link"
        }
        else if (this.props.notificationOptions.showTooLow) {
            text = "Too low!";
            attribute = "is-danger"
        }
        else if (this.props.notificationOptions.showTooHighButClose) {
            text = "Too high, but close!";
            attribute = "is-info"
        }
        else if (this.props.notificationOptions.showTooLowButClose) {
            text = "Too low, but close!";
            attribute = "is-warning"
        }
        else if (this.props.notificationOptions.showSuccess) {
            text = "You guessed the number! Congratulations!";
            attribute = "is-success"
        }

        if(text.length) {
            return (
                <p className={cx(globalStyles["notification"], globalStyles[attribute])}>
                    { text }
                </p>
            )
        }
        else {
            return null;
        }

    }
}