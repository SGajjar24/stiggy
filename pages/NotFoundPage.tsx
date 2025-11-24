import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-brand-black p-4 text-center pt-32">
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <h1 className="font-display font-bold text-9xl mb-4 text-brand-accent">404</h1>
            <h2 className="font-display font-bold text-4xl mb-6 uppercase">Page Not Found</h2>
            <p className="text-gray-500 mb-10 max-w-md">
                The page you are looking for has been moved, removed, or possibly never existed.
            </p>
            <Link
                to="/"
                className="bg-brand-black text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
