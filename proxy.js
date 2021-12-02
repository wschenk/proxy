const http = require('http');
const httpProxy = require('http-proxy');

const remote = "http://helloworld-go.default.svc.cluster.local";

console.log( "Proxy starting up on port 3000" );
console.log( `Proxing to ${remote}` );

httpProxy.createProxyServer({target:remote}).listen(3000);
