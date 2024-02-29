import React, { Component } from "react";
import PropTypes from "prop-types";

const redirectToLogin = () => {
  console.log('redirect to login')
  /**
   * Session token expired, so clear the local storage
   * and redirect the user to login page
   */
  localStorage.clear();
  // window.location = `${window.origin}/login`;
};

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("error", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={redirectToLogin}>Logout</button>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
