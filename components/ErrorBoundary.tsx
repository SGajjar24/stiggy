import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white p-4 text-center">
                    <h1 className="font-display font-bold text-6xl mb-4">OOPS!</h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-md">
                        Something went wrong. The streets are unpredictable, and so is this code.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-brand-accent text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-colors mb-4"
                    >
                        Refresh Page
                    </button>
                    <Link to="/" className="text-gray-500 hover:text-white underline">
                        Return to Home
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
