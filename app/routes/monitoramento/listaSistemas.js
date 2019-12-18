var request = require('request');
const apps = [];
apps.push({nome : 'SAP - CAPITAL', url : 'http://capital.defensoria.ms.def.br/sap', status : true});
apps.push({nome : 'SAP - INTERIOR', url : 'http://interior.defensoria.ms.def.br/sap', status : true});
apps.push({nome : 'GESTÃO DE PESSOAL', url : 'http://s816:8080/folha/', status : true});
apps.push({nome : 'PORTAL DO SERVIDOR', url : 'http://intranet.defensoria.ms.gov.br/portal/', status : true});
apps.push({nome : 'DIÁRIAS', url : 'http://intranet.defensoria.ms.gov.br/diaria', status : true});
apps.push({nome : 'SITE - DPGE', url : 'http://www.defensoria.ms.gov.br/', status : true});
apps.push({nome : 'SITE - 2ª INSTÂNCIA', url : 'http://segundainstancia.ms.def.br/', status : true});

module.exports = function(app){
    
    /**
     * @description listar aplicações
     **/
    app.get('/listarSistemas', function(req,res){
       apps.forEach(function (app) { 
            request(app.url, function (error, response, body) {
                if(response && response.statusCode){
                    if(response.statusCode === 200)
                        app.status = true;
                    else   
                        app.status = false;
                }            
            });
        });
        res.send({apps:apps});
    });
    
}

