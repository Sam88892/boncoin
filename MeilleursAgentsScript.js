var Nightmare = require('nightmare'), // I include the NightmareJs Library
  nightmare = Nightmare();
  var jquery= require('jquery') // I include JQuery
  //nightmare.goto('https://www.meilleursagents.com/prix-immobilier/'+estimation[1]+'/') where I would like to put my city estimation[1] of Leboncoinscript.js
  var city=process.argv[2] //I give the city with the postal code in argument sarcelles-95200 for example
nightmare.goto('https://www.meilleursagents.com/prix-immobilier/'+process.argv[2]+'/') // I go to the link with Nightmarejs that works
    .wait(2000) //I wait for the program to have time to retrieve the data
    .evaluate(function(){ // I scrape the datas
    jQuery.noConflict()
     prixMoyenAppart=jQuery('div.medium-uncollapse:nth-child(2) > div:nth-child(3)').text().replace(/€/g, "")
     prixMoyenMaison=jQuery('div.medium-uncollapse:nth-child(3) > div:nth-child(3)').text().replace(/€/g, "")
                                 

     test=[prixMoyenAppart,prixMoyenMaison];  //I put the data in an array
     return test
     })
     .end()
     .then(function(estimation){
      console.log(test[0]) //I display the data in the console
       console.log(test[1])
          })
