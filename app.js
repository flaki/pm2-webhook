var pmx = require('/root/.pm2/node_modules/pmx'),
    webhook = require('./lib/webhook');

pmx.initModule({}, webhook);
