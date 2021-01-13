const path = require('path');

const baseDir = path.resolve(__dirname, '../../app');
const proxyUrl = process.env.PROXY_URL || 'http://magento.local/';

module.exports = {
    proxy: proxyUrl,
    files: [
        `${baseDir}/**/*.js`,
        `${baseDir}/**/*.css`,
        `${baseDir}/**/*.xml`,
        `${baseDir}/**/*.phtml`,
    ],
};
