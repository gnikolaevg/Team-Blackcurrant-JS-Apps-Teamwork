class Router{
    constructor() {
    this._routes = [];
  }

  when(targetUrl, callback) {
    this._routes.push({
      targetUrl,
      callback
    });

    return this;
  }

  navigate() {
    const currentUrl = location.hash.slice(1);

    for(const {targetUrl, callback} of this._routes) {
      const areMatching = Router.matchUrls(currentUrl, targetUrl);
      if(areMatching) {
        callback();
        break;
      }
    }
  }

  static matchUrls(currentUrl, targetUrl) {
      if(currentUrl === targetUrl) {
        return true;
      }
      else {
        return false;
      }
  }
}

// export { Router };