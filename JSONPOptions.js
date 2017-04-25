class JSONPOptions {
    constructor(onSuccess) {
        this.callbackName = 'handleStuff';
        this.onTimeout = () => console.log('timeout!');
        this.timeout = 5;
        this.onSuccess = onSuccess ? onSuccess : (json) => console.log('success!', json);
    };
}

module.exports.JSONPOptions = JSONPOptions;
