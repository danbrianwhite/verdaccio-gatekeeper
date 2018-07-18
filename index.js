var Error = require('http-errors');

function middlewares(config, stuff, app, auth, storage) {
    var enabled = config['enabled'];

    if (enabled === undefined) {
        enabled = true;
    }

    app.use('*', function (req, res, next) {
        console.log('%s %s %s', req.method, req.url, req.path);
        next();
    });

}

module.exports = function (config, stuff) {
    return {
        register_middlewares: middlewares.bind(undefined, config, stuff)
    }
};

