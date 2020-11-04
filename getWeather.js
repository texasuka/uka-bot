
apiRouter.post('/sayWeather', function(req, res) {
  const cheerio = require('cheerio');
  const axios = require('axios');
    axios.get('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%98%A4%EC%8A%A4%ED%8B%B4+%EB%82%A0%EC%94%A8')
    .then((response) => {
      const $ = cheerio.load(response.data)
      const urlElems = $('div.main_info')
      const temp = $(urlElems[0]).find('span.todaytemp')[0]
      var tempText = $(temp).text();
      const description = $(urlElems[0]).find('p.cast_txt')[0]
      var descriptionText = $(description).text();
      var obj = {
        'temp' : tempText,
        'description' : descriptionText,
        }
      var responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              simpleText: {
               text:descriptionText+'  실제온도: '+tempText
              }
            }
            ]
        }   
  };

  res.status(200).send(responseBody);
});
});
 
  

 