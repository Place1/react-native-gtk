// tslint:disable no-console

export default class Logger {

  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  log(...args: any[]) {
    console.log(this.prefix, ...args);
  }

  info(...args: any[]) {
    console.info(this.prefix, ...args);
  }

  warn(...args: any[]) {
    console.warn(this.prefix, ...args);
  }

  error(...args: any[]) {
    console.error(this.prefix, ...args);
  }
}

// tslint:enable no-console
