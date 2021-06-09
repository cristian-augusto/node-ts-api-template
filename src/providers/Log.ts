/* eslint-disable no-console */
import LogTypes from '../config/LogTypes';
import DirUtils from '../helpers/DirUtils';

class Log {
  private longOn = false;

  private baseDir: string;

  private linePrefix: string;

  constructor() {
    const now = new Date();

    this.baseDir = DirUtils.getMappedDir('LOG');
    this.linePrefix = `[${now.toLocaleString()}]`;
  }

  public init(_logOn: boolean): void {
    this.longOn = _logOn;
  }

  public terminal(_content: any) {
    console.log(_content);
  }

  public info(_content: string) {
    console.log(`[INFO] ${_content}`);
    this.addLog('INFO', _content);
  }

  public warn(_content: string) {
    console.log(`[WARN] ${_content}`);
    this.addLog('WARN', _content);
  }

  public error(_content: string) {
    console.log('\x1b[31m%s\x1b[0m', `[ERROR] ${_content}`);
    this.addLog('ERROR', _content);
  }

  private addLog(logType: keyof typeof LogTypes, content: string): void {
    if (!this.longOn) return;

    const fileName = this.getFilename(logType);

    const filePath = DirUtils.joinPaths(this.baseDir, fileName);

    const logContent = `\n${this.linePrefix} ${content}`;

    DirUtils.writeInFile(filePath, logContent);
  }

  private getFilename(logType: string): string {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    return `${year}_${month.toString().padStart(2, '0')}_${day
      .toString()
      .padStart(2, '0')}_${logType}.txt`;
  }
}

export default new Log();
