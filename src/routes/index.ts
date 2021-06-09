import { Router, Express } from 'express';

class Routes {
  private static routes: Router[] = [];

  public static initRoutes(_apiPrefix: string, _app: Express): Express {
    this.routes.forEach(route => _app.use(_apiPrefix, route));

    return _app;
  }

  public static registerRoute(_router: Router): void {
    this.routes.push(_router);
  }
}

export default Routes;
