interface ApplicationConfig {
  PORT: number;
  API_PREFIX: string;
  CONNECT_DATABASE: boolean;
  DATABASE_CONN_NAME: string;
  LOG_FILE_ENABLE: boolean;
}

export default ApplicationConfig;
