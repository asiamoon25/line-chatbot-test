const express = require('express');
const router = express.Router();

require('dotenv').config();



router.get('/game', function (req,res,next){
  var gname = req.query.entity;
  console.log(gname)

  res.json({
    "url":"https://www.mangot5.com/index"
  })
})


/*
요구 사항
{
"version": "v2",
"userId": "U47b00b58c90f8e47428af8b7bddcda3d",
"userIp": "8.8.8.8",
"timestamp": 12345678,
"bubbles": [ {
"type": "text",
"data" : { "description" : "text content which is user input" } } ],
"event": "send"
}
 */

router.post('/chatbot-api/v2/send',function (req, res,next){

  // res.setHeader('','');

  res.json(
      {
        "version": "v2",
        "userId": "Usss47b00b58c90f8e47428af8b7bddcda3d",
        "timestamp": 1664169457884,
        "bubbles": [
          {
            "type": "text",
            "data": {
              "description": "Chatbot Answer",
              "url": "https://ncloud.com", // optional : URL
              "urlAlias": "https://ncloud.com" // optional : URL
            },
            "information": [
              {
                "key": "chatType",
                "value": "TEXT"
              },
              {
                "key": "chatType",
                "value": "TEXT"
              },
              {
                "key": "score",
                "value": "1.0"
              },
              {
                "key": "scenarioName",
                "value": "Conversation Name"
              },
              {
                "key": "endOfBubble",
                "value": "endOfBubble"
              },
              {
                "key": "matchingType",
                "value": "exactMatch"
              },
              {
                "key": "domainCode",
                "value": "Domain Code"
              }
            ],
            "context": []
          }
        ],
        "scenario": {
          "name": "Conversation Name",
          "chatUtteranceSetId": 4929383, //Conversation ID
          "intent": []
        },
        "entities": [],
        "keywords": [],
        "conversation": {
          "scenarioName": "Conversation Name",
          "chatUtteranceSetId": 4929383, //Conversation ID
          "types": []
        },
        "normalizer": "null",
        "event": "send"
      }
  )

})
module.exports = router;
