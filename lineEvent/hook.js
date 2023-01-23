const line = require('@line/bot-sdk');

require('dotenv').config();
//user 가 보낸 이미지, 동영상, 음성 파일을 검색하는 api
const client = new line.Client({
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
});

exports.sendTextMessage = function (message, replyToken) {
    var messageTemplate = {
        type: 'text',
        text: message
    }

    client.replyMessage(replyToken,messageTemplate)
        .then(res=>{
            return {"result":"success"}
        }).catch(err=>{
            console.log(err)
    })

}

exports.sendButtonsMessage = function (replyToken) {
    var messageTemplate = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
            "type": "buttons",
            "thumbnailImageUrl": "https://storage.googleapis.com/zenn-user-upload/avatar/7d1314d3c9.jpeg",
            "imageAspectRatio": "rectangle",
            "imageSize": "cover",
            "imageBackgroundColor": "#FFFFFF",
            "title": "Menu",
            "text": "안녕하세요 happytuk 입니다.",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "https://www.mangot5.com/index"
            },
            "actions": [
                {
                    "type": "uri",
                    "label": "라테일로 가기",
                    "uri": "https://la.mangot5.com/la/index"
                },
                {
                    "type": "uri",
                    "label": "AVA로 가기",
                    "uri" : "https://ava.mangot5.com/ava/index"
                },
                {
                    "type": "uri",
                    "label": "sf2로 가기",
                    "uri" : "https://sf2.mangot5.com/sf2/index"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://www.mangot5.com/index"
                }
            ]
        }
    }

    client.replyMessage(replyToken, messageTemplate)
        .then(res=>{
            return {"result":"success"}
        }).catch(err=>{
        console.log(err)
    })
    return {"result":"asdf"}
}

exports.sendStampMessage = function (replyToken) {
    var messageTemplate = {
        "type" : "sticker",
        "packageId": "446",
        "stickerId": "1988"
    }

    client.replyMessage(replyToken,messageTemplate)
        .then(res=> {
            return {"result":"success"}
        }).catch(err=>{
            console.log(err)
    })
    return {"result":"asda"}
}

exports.sendImageMessage = function(replyToken) {
    var messageTemplate = {
        "type":"image",
        "originalContentUrl": "https://mblogthumb-phinf.pstatic.net/MjAyMTEwMDVfMjkz/MDAxNjMzNDE5NDM5MzY1.C69FSduuaiTt9LkMykKzsMu2YpWQk50LHninjXFSbNcg.yvzNU4LUEaHd-5VKTgzzfkm8kuXikMnE1VFtm4gj7-Ag.JPEG.parkamsterdam/IMG_3467.JPG?type=w800",
        "previewImageUrl": "https://mblogthumb-phinf.pstatic.net/MjAyMTEwMDVfMjkz/MDAxNjMzNDE5NDM5MzY1.C69FSduuaiTt9LkMykKzsMu2YpWQk50LHninjXFSbNcg.yvzNU4LUEaHd-5VKTgzzfkm8kuXikMnE1VFtm4gj7-Ag.JPEG.parkamsterdam/IMG_3467.JPG?type=w800"
    }

    client.replyMessage(replyToken, messageTemplate)
        .then(res=> {
            return {"result":"success"}
        }).catch(err=>{
        console.log(err)
    })
    return {"result":"asdf"}
}

exports.sendCarouselMessage = function (replyToken) {
    var messageTemplate = {
        "type": "template",
        "altText": "carousel",
        "template": {
            "type": "carousel",
            "columns": [
                {
                    "thumbnailImageUrl": "https://landing.mangot5.com/template/loginBg/au.png",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": "Audition",
                    "text": "Audition",
                    "defaultAction": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "https://au.mangot5.com/au/index"
                    },
                    "actions": [
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://au.mangot5.com/au/index"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://landing.mangot5.com/template/loginBg/ava.png",
                    "imageBackgroundColor": "#000000",
                    "title": "this is menu",
                    "text": "description",
                    "defaultAction": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "https://ava.mangot5.com/ava/index"
                    },
                    "actions": [

                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://ava.mangot5.com/ava/index"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://landing.mangot5.com/template/loginBg/cls.png",
                    "imageBackgroundColor": "#000000",
                    "title": "Cls",
                    "text": "Cls",
                    "defaultAction": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "https://cls.mangot5.com/cls/index"
                    },
                    "actions": [

                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://cls.mangot5.com/cls/index"
                        }
                    ]
                }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
        }
    }

    client.replyMessage(replyToken, messageTemplate)
        .then(res=> {
            return {"result":"success"}
        }).catch(err=>{
        console.log(err)
    })
    return {"result":"asdf"}
}
