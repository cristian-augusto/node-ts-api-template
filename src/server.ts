import 'reflect-metadata';
import 'express-async-errors';

import Application from './App';
import Preferences from './providers/Preferences';
import Log from './providers/Log';

const app = new Application();

const {
  PORT,
  API_PREFIX,
  CONNECT_DATABASE,
  DATABASE_CONN_NAME,
  LOG_FILE_ENABLE,
} = Preferences.config();

(async () => {
  try {
    await app.initApplication({
      PORT: +PORT,
      API_PREFIX,
      LOG_FILE_ENABLE: !!+LOG_FILE_ENABLE,
      DATABASE_CONN_NAME,
      CONNECT_DATABASE: !!+CONNECT_DATABASE,
    });
  } catch (err) {
    Log.error(err.message);
  }
})();
