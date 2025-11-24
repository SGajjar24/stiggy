import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="space-y-2">
            {label && <label className="text-sm font-bold uppercase tracking-wide">{label}</label>}
            <input
                className={`w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-brand-black transition-colors ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
