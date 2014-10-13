var http = require('http');
var os = require('os');
var dns = require('dns');
var port = process.env.VCAP_APP_PORT;
var addr;
dns.lookup(os.hostname(),4,function (err, addr, fam) {
var platform = os.hostname()+' '+os.type()+' '+os.arch()+' '+addr;
  http.createServer(function (req, res) {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Im running in '+platform+'\n');
  }).listen(port, addr);
  console.log('http://'+addr+':'+port);
});