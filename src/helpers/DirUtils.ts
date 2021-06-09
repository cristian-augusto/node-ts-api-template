import path from 'path';
import fs from 'fs';

import MappedDirs from '../config/MappedDirs';

class DirUtils {
  resolvePathFromRootDir(...paths: string[]): string {
    return path.resolve(process.cwd(), ...paths);
  }

  getMappedDir(_key: keyof typeof MappedDirs): string {
    return this.resolvePathFromRootDir(MappedDirs[_key]);
  }

  joinPaths(...paths: string[]): string {
    return path.join(...paths);
  }

  writeInFile(filePath: string, content: string): void {
    const stream = fs.createWriteStream(filePath, {
      encoding: 'utf-8',
      flags: 'a',
    });
    stream.once('open', () => {
      stream.write(content);
      stream.close();
    });
  }
}

export default new DirUtils();
