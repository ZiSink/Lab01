const request = require('request');
const fs = require('fs');

request.get('http://www.google.com', function (err, response, body) {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFileSync('pagina.html', body);
    console.log('Ficheiro pagina.html criado!');
});
