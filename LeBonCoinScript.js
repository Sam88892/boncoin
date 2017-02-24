var Nightmare = require('nightmare'), // I include the NightmareJs Library
  nightmare = Nightmare();
  var jquery= require('jquery') // I include JQuery
var link=process.argv[2] // I create a variable link to give the link in parametre
nightmare.goto(process.argv[2]) // I go to the link with Nightmarejs
.wait(2000) //I wait for the program to have time to retrieve the data
  .evaluate(function(){ // I scrape the datas
      jQuery.noConflict()
      titre=jQuery('.no-border').text().replace(/\t/gi,"").replace(/\n/gi,"").trim();
      prix=jQuery('span.value:nth-child(3)').text().replace(/\t/gi,"").replace(/\n/gi,"").replace(/€/gi,"").trim();
      ville=jQuery('div.line:nth-child(6) > h2:nth-child(1) > span:nth-child(2)').text().replace(/\t/gi,"").replace(/\n/gi,"").trim().replace(/\ /gi,"-").toLowerCase()
      type=jQuery('div.line:nth-child(7) > h2:nth-child(1) > span:nth-child(2)').text().replace(/\t/gi,"").replace(/\n/gi,"").replace(/€/gi,"").trim();
      surface=jQuery('div.line:nth-child(9) > h2:nth-child(1) > span:nth-child(2)').text().replace(/m2/g, "").replace(/\n/gi,"").trim()
      
      
      estimation=[titre,prix,ville,type,surface]; //I put the data in an array
    return estimation
  })
  .end()
  .then(function(estimation){  //I display the data on the console
    console.log(estimation[0])
    console.log(estimation[1]) 
    console.log(estimation[2])
    console.log(estimation[3])
    console.log(estimation[4])
    
     ;
  })
