import React from 'react';
import globalStyles from '../../components/Styles/Styles.js';

export default function Layout({ children }) {
    return (
        <section className={globalStyles["section"]}>
            {children}
        </section>
    );
}
