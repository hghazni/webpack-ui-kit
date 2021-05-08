import React from 'react';
import { ButtonTypes } from './Button.types';

const Button: React.FC<ButtonTypes> = (props: ButtonTypes) => {
const {className } = props;

    return (
        <button className={className}>test</button>
    )
}

export default Button;