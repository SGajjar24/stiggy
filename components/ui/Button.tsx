import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'white';
    to?: string;
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    to,
    fullWidth = false,
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 py-4 px-8 text-sm md:text-base";

    const variants = {
        primary: "bg-brand-black text-white hover:bg-gray-800",
        secondary: "bg-brand-accent text-white hover:bg-white hover:text-brand-black",
        outline: "border border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
        white: "bg-white text-black hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
    };

    const widthClass = fullWidth ? 'w-full' : 'w-auto';
    const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
