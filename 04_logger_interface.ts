interface Logger {
    log(message: string): void;
    warn(message: string): void;
    error(message: string): void;

}

class Consolelogger implements Logger{
    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
    warn(message: string): void {
        console.log(`[WARN]: ${message}`);
    }
    error(message: string): void {
        console.log(`[ERROR]: ${message}`);
    }
}

class RemoteLogger implements Logger{
    private endpoint: string;
    constructor(endpoint: string) {this.endpoint =endpoint;}
    log(message :string): void{/*send*/}
    warn(message :string): void{/*send*/}
    error(message :string, error?: Error): void{/*send*/}
}
const appLogger: Logger = new Consolelogger ();
appLogger.log("Application started.")