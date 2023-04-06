var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    console.log('1234213');
    var options = {
      'method': 'POST',
      'url': 'https://api.openai.com/v1/chat/completions',
      'headers': {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {
            "role": "system",
            "content": "你是一个编程助手，能够帮我编写C#代码，并且给我提示"
          },
          {
            "role": "user",
            "content": "你好，你叫什么名字"
          },
          {
            "role": "assistant",
            "content": "你好，我是一个语言模型AI，没有实体名字，你可以随意称呼我。"
          }
        ]
      })
    
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    res.json({status: 200, message: '成功'})
  }catch(error){
    return next(error)
  }
});

module.exports = router;
