import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
    },
};

export default Footer;