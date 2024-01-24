// LogoText.tsx

import React from 'react';
import styles from './LogoEffect.module.scss';

interface LogoTextProps {
    text: string;
}

const LogoText: React.FC<LogoTextProps> = ({ text }) => {
    return (
        // Use camelCase for class names when accessing imported styles
        <div className={styles.logoEffect} data-text={text}>
            {text}
        </div>
    );
};

export default LogoText;
