export class LoggingService {
    logInfo(infoMsg: string):void{
        console.log("Info: "+infoMsg);
    }
    logError(errorMsg: string):void{
        console.log("Error: "+errorMsg);
    }
    logDebug(debugMsg: string):void{
        console.log("Debug: "+debugMsg);
    }
}