const request = require("request");
const cheerio = require('cheerio');

request("https://www.google.com.ua/search?client=opera-gx&hs=VyO&sxsrf=ALeKk024_UTmlrCXoaho9hVNxUSkQr_wMg%3A1585758776861&ei=OMKEXr6eNJH16QSwmpCADg&q=car+vinnitsa&oq=car+vinnitsa&gs_lcp=CgZwc3ktYWIQAzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQChAeMgYIABAWEB4yCAgAEA0QBRAeMggIABANEAUQHjIICAAQDRAFEB4yCAgAEA0QBRAeMggIABANEAUQHjIICAAQDRAFEB46BAgAEEc6BAgAEEM6AggAOgcIABAUEIcCOgUIABDLAToECAAQDToECAAQEzoKCAAQCBANEB4QEzoMCAAQCBANEAoQHhATUOZEWM-IAWCqjAFoAnACeACAAaYKiAGtJZIBDTItMi4zLjMuMS4wLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwi-muDk08foAhWRepoKHTANBOAQ4dUDCAo&uact=5", (error,respons,html)=>{
    if(!error && respons.statusCode ==200){
        const $ = cheerio.load(html);
        const href = $ ('.href');
        console.log(href.html());
        //const output = siteHeading.find('h3').text();
        //console.log(output); 
        //console.log($.html());

    }
});

