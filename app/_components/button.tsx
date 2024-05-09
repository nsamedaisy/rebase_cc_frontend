import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', className = '', children }) => {
    return (
        <button onClick={onClick} type={type} className={`py-2 px-6 bg-transparent border-4 border-purple ${className}`}>
            {children}
        </button>
    );
};

export default Button;