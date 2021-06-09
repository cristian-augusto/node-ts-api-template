import { createConnection, getConnectionOptions } from 'typeorm';
import AppError from '../exception/AppError';

class Database {
  public static async init(
    connect: boolean,
    _connectionName: string,
  ): Promise<void> {
    try {
      const connectionOptions = await getConnectionOptions(_connectionName);

      if (connect)
        await createConnection({ ...connectionOptions, name: 'default' });
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default Database;
