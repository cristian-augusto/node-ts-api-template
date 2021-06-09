import 'dotenv/config';
import EnvKeys from '../config/EnvKeys';
import { EnvironmentVariables } from '../interfaces/EnvironmentVariables';

class Preferences {
  private static env: EnvironmentVariables = {} as EnvironmentVariables;

  private static init(): void {
    Object.values(EnvKeys).forEach(key => {
      const value = process.env[key];
      if (!value)
        throw new Error(`Not value was assigned to key ${key} in .env`);

      this.env[key] = value;
    });
  }

  public static config(): EnvironmentVariables {
    if (!Object.keys(this.env).length) this.init();
    return this.env;
  }
}

export default Preferences;
