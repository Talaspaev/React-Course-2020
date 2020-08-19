import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(props) {
        return { hasError: true };
    }
    render () {
        if(this.setState.hasError){
            return <h1>something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;