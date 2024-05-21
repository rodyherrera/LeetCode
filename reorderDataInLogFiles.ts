const reorderLogFiles = (logs: string[]): string[] => {
    const letterLogs: string[] = [];
    const digitLogs: string[] = [];
    // Separate letter-logs and digit-logs
    for(const log of logs){
        if(log.split(' ')[1].charAt(0) >= '0' && log.split(' ')[1].charAt(0) <= '9'){
            digitLogs.push(log);
        }else{
            letterLogs.push(log);
        }
    }
    // Sort letter-logs according to the given criteria
    letterLogs.sort((log1, log2) => {
        const body1 = log1.slice(log1.indexOf(' ') + 1);
        const body2 = log2.slice(log2.indexOf(' ') + 1);
        const identifier1 = log1.slice(0, log1.indexOf(' '));
        const identifier2 = log2.slice(0, log2.indexOf(' '));
        if(body1 === body2){
            return identifier1.localeCompare(identifier2);
        }
        return body1.localeCompare(body2);
    });
    // Concatenate sorted letter-logs with digit-logs
    return [...letterLogs, ...digitLogs];
};