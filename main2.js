var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.get('/scrape', function(req, res){

url = 'https://www.leboncoin.fr/ventes_immobilieres/1090765721.htm?ca=12_s';

request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);

    var title,prix,ville,type,surface,ges,classe,urlMeilleursAgents,prixMoyenMaison,prixMoyenAppart;
    var json = { title : "", prix: "", ville: "", type: "",pieces:"", surface: "", ges: "", classe: "",urlMeilleursAgents:"",prixMoyenMaison:"",prixMoyenAppart:""};

        $('.no-border').filter(function(){
        var data = $(this);
        title = data.text().replace(/\t/gi,"").replace(/\n/gi,"").trim();
        

        json.title = title;
        });
        
        
        $('span.value:nth-child(3)').filter(function(){
        var data = $(this);
        prix = data.text().replace(/\t/gi,"").replace(/\n/gi,"").replace(/€/gi,"").trim();            

        json.prix = prix;
        });
        
        
        $('div.line:nth-child(6) > h2:nth-child(1) > span:nth-child(2)').filter(function(){
        var data = $(this);
        ville = data.text().replace(/\t/gi,"").replace(/\n/gi,"").trim().replace(/\ /gi,"-");
        urlMeilleursAgents='http://www.meilleursagents.com/prix-immobilier/'+ville+'/';
        

        json.ville = ville;
        json.urlMeilleursAgents=urlMeilleursAgents;
     


        
        
        
        
        
    });
        
        
         $('div.line:nth-child(7) > h2:nth-child(1) > span:nth-child(2)').filter(function(){
        var data = $(this);
        type = data.text().replace(/\t/gi,"").replace(/\n/gi,"").trim();            

        json.type = type;
        });
        
        $('div.line:nth-child(8) > h2:nth-child(1) > span:nth-child(2)').filter(function(){
        var data = $(this);
        pieces = data.text().replace(/\t/gi,"").replace(/\n/gi,"").trim();            

        json.pieces = pieces;
        });
        
        
        $('div.line:nth-child(9) > h2:nth-child(1) > span:nth-child(2)').filter(function(){
        var data = $(this);
        surface = data.text().replace(/\t/gi,"").replace(/\n/gi,"").replace(/m2/gi,"").trim();            

        json.surface = surface;
        });
        
        
        
        $('div.line:nth-child(10) > h2:nth-child(1) > span:nth-child(2) > a:nth-child(1)').filter(function(){
        var data = $(this);
        ges = data.text().replace(/\t/gi,"").replace(/\n/gi,"").trim();            

        json.ges = ges;
        });
        
        
        $('div.line:nth-child(11) > h2:nth-child(1) > span:nth-child(2) > a:nth-child(1)').filter(function(){
        var data = $(this);
        classe = data.text().replace(/\t/gi,"").replace(/\n/gi,"").trim();            

        json.classe = classe;
        });
        
     //On a recupéré les données de leBonCoin et on les a mis dans un fichier json   
        
       
    }
     
    
    //fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
    res.send(JSON.stringify(json));
   console.log('Le fichier pour leBonCoin a ete ecrit! - Regarde le fichier output.json dans le dossier de ton projet pour avoir le lien qui te permet de comparer au données de celui-ci');

//});


// Il faut controler la console
//res.send('Regarde ton terminal!');

    }) ;
});
          

     

          
app.listen('8086');
console.log('Ca se passe sur le port 8086 a http://localhost:8086/scrape! ');
exports = module.exports = app;       
        
        
        

