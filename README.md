# boncoin
# boncoin
To start with, I tried to do the project with javascript and Cheerio and I put the data that I scraped in a JSON file.However, I don't sucess to take the content of my variables due to the asynchronous operations of node.js
So I tried to change my strategy and I find a library which the name is PhantomJS and then NightmareJs who is conctructed with PhantomJS.
It's a high level mean to do scraping with node.js.
I can scrape the data with sucess using NightmareJS.I give the link as argument in the terminal of Leboncoin ad and my programm give me the data.It is the same for Meilleursagents.However I have the same problem.After a lot of time I don't succeed to recover my scraped datas of Leboncoin to give transfer them in parameter to Meilleurs Agents.
I spent severals says to try it and I though that with perseverance that I will succeed it but it is not the case.

The good JSON is package.json

The other files are there to show what I have tried to do before

1) Launch the terminal
2) Go to the project directory with cd
3) If you want to scrape Leboncoin write "node LeBonCoinScript.js 'your link'" for example "node LeBonCoinScript.js  https://www.leboncoin.fr/ventes_immobilieres/1097050135.htm?ca=12_s "

If you want to scrape Meilleursagents write "node MeilleursAgentsScript.js 'yourCity-postalCode'" for example "node MeilleursAgentsScript.js sarcelles-95200 "

4) The result of the scraping will be display on the terminal

Thank you for reading

Samuel D

