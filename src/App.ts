import express, { Express } from 'express';
import Handler from './exception/Handler';

import ApplicationConfig from './interfaces/ApplicationConfig';
import Database from './providers/Database';
import Log from './providers/Log';
import Routes from './routes';
import './routes/registrador';

class Application {
  private app: Express;

  constructor() {
    this.app = express();
  }

  public async initApplication(_config: ApplicationConfig): Promise<void> {
    Log.terminal(_config);

    this.initLogSystem(_config.LOG_FILE_ENABLE);

    Log.info('Aplicação inicializada.');

    await this.initDatabase(
      _config.CONNECT_DATABASE,
      _config.DATABASE_CONN_NAME,
    );

    this.initRoutes(_config.API_PREFIX, this.app);

    this.initMiddlewares();

    this.handleErrors(this.app);
    this.app.listen(_config.PORT, () =>
      Log.terminal(`API running at port ${_config.PORT}`),
    );
  }

  private async initDatabase(
    connect: boolean,
    connectionName: string,
  ): Promise<void> {
    await Database.init(connect, connectionName);
    Log.info('Banco de dados inicializado.');
  }

  private initMiddlewares(): void {
    Log.info('Middlewares inicializados.');
  }

  private handleErrors(_app: Express) {
    this.app = Handler.genericError(_app);
    Log.info('Gerenciamento de erros.');
  }

  private initRoutes(_apiPrefix: string, _app: Express): void {
    this.app = Routes.initRoutes(_apiPrefix, _app);
    Log.info('Rotas inicializadas.');
  }

  private initLogSystem(logOn: boolean): void {
    Log.init(logOn);
    Log.info('Sistema de log inicializado.');
  }
}

export default Application;
