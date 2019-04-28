import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: 'wow, this failed'
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });

    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}
//this.props.childeren is whatever we wrapped inside of ErrorBoundary
//it should be the default
//if we get an error, it'll do the <h1>
export default ErrorBoundary;