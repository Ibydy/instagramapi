class JSONP {
    static send(src, options) {
        const callback_name = options.callbackName || 'callback',
            on_success = options.onSuccess || function () {
                },
            on_timeout = options.onTimeout || function () {
                },
            timeout = options.timeout || 10; // sec

        const timeout_trigger = window.setTimeout(function () {
            window[callback_name] = function () {
            };
            on_timeout();
        }, timeout * 1000);

        window[callback_name] = function (data) {
            window.clearTimeout(timeout_trigger);
            on_success(data);
        };

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;

        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

module.exports.JSONP = JSONP;