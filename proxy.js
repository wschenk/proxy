const http = require('http');
const httpProxy = require('http-proxy');

console.log( "Proxy starting up on port 3000" );

const proxy = httpProxy.createProxyServer({});
http.createServer(function(req, res) {
    console.log('Request', req.method, req.url);
    proxy.web(req, res, { target: 'http://kourier-internal.knative-serving.svc.cluster.local' } );
}).listen(3000);
