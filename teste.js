var ping = require('ping');
 
var hosts = [], i;
for (i = 1; i <= 255; i++) { 
  hosts.push('10.37.1.'+i);
} 
 
hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
            console.log(host +" -- "+res.alive);
        });
});