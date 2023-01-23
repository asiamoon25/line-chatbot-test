const crypto = require('crypto');

exports.makeSignatureKey = function (requestBodyString) {
    var body = requestBodyString
    var signature = crypto
        .createHmac('SHA256',channelSercet)
        .update(body)
        .digest('base64');

    return signature
}