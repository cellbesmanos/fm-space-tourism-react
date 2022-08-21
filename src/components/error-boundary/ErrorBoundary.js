import React, { Component } from "react";

import "./ErrorBoundary.css";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.warn(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="ErrorBoundary grid-container">
          <div className="ErrorBoundary__content flow">
            <h1 className="ff-serif uppercase">
              <span
                className="fs-900 text-white  ff-sans-condensed letter-spacing-2"
                style={{ display: "block" }}
                aria-hidden="true"
              >
                404
              </span>
              Something went wrong.
            </h1>
            <button
              onClick={() => window.location.reload()}
              className="ErrorBoundary__cta"
            >
              Reload Page?
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
