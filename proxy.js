const http = require('http');
const httpProxy = require('http-proxy');

const remote = process.env.REMOTE_TARGET || "http://homepage.default.svc.cluster.local";
const port = process.env.LISTENING_PORT || 3000;

console.log( `Proxy starting up on port ${port}` );
console.log( `Proxing to ${remote}` );

httpProxy.createProxyServer({
    target: remote,
    changeOrigin: true
}).listen(port);
