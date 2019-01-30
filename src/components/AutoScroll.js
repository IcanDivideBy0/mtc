import React from "react";
import { withRouter } from "react-router";

class AutoScroll extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history)
      window.history.scrollRestoration = "manual";

    this.unlistenHistory = history.listen(this.handleHistoryChange);
    this.handleHistoryChange(location);
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  handleHistoryChange = location => {
    const newPathname = location.pathname;
    const newSearch = location.search;
    const newHash = location.hash;

    if (
      newPathname !== this.currentPathname ||
      newSearch !== this.currentSearch ||
      newHash !== this.currentHash
    ) {
      if (newHash !== "#no-autoscroll") this.scrollToHash(newHash);

      this.currentPathname = newPathname;
      this.currentSearch = newSearch;
      this.currentHash = newHash;
    }
  };

  scrollToHash = hash => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    try {
      const el = hash && document.querySelector(hash);
      window.scrollTo(0, el ? Math.max(el.offsetTop - 16, 0) : 0);
    } catch (err) {}
  };

  render() {
    return null;
  }
}

export default withRouter(AutoScroll);
