var pushbots = require('pushbots');
var Pushbots = new pushbots.api({
    id: '5862943c4a9efa49b58b4567',
    secret: 'ddf81def8a4ee15bf18054a0a56ab2a6'
});
var sleep = require('sleep');


function sendBlank() {
    console.log("sending blank");
    Pushbots.setMessage("Hi from new nodeJS API!"); //sending to (android and ios) platforms by default add optional paramater "0" for iOS, "1" for Android and "2" for Chrome. 
    Pushbots.customFields({
        "article_id": "1234"
    });
    Pushbots.customNotificationTitle("CUSTOM TITLE");

    //to push to all 
    Pushbots.push(function(response) {
        console.log(response);
    });

}


function sendVideo() {
    console.log("sending video");
    Pushbots.setMessage("Video content"); //sending to (android and ios) platforms by default add optional paramater "0" for iOS, "1" for Android and "2" for Chrome. 
    Pushbots.customFields({
        "video": "https://www.youtube.com/watch?v=u5CVsCnxyXg",
        "promotedTitle": "Radiohead new video! ",
        "promotedContent": "Get it now on Spotify!!"

    });

    //to push to all 
    Pushbots.push(function(response) {
        console.log(response);
    });

}

function sendFinance(){
	 console.log("sending finance");
    Pushbots.setMessage(" finance content"); //sending to (android and ios) platforms by default add optional paramater "0" for iOS, "1" for Android and "2" for Chrome. 
    Pushbots.customFields({
        "financeName": "HSBC",
        "financeImage": "http://www.logostage.com/logos/HSBC.png ",
        "financeFlow": "financeFlowUp", 
        "financePrice": "16.42",
        "financeHeader":"USD/EGP Exchange price",
        "financeCurrency": "EGP",
        "financeDescription": "USD prices are still on the decline "
    });
    //to push to all 
    Pushbots.push(function(response) {
        console.log(response);
    });
}

function sendPromotedContentArabic(){
	 console.log("sending promoted content");
    Pushbots.setMessage(" promoted content"); //sending to (android and ios) platforms by default add optional paramater "0" for iOS, "1" for Android and "2" for Chrome. 
    Pushbots.customFields({
        "promoted" :  '[ {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24897737/24897737-v2_large.jpg?1491407652"}, {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24897115/24897115-v2_large.jpg?1491404204"}, {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24897341/24897341-v2_large.jpg?1491405555"}, {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24898061/24898061-v2_large.jpg?1491409347"}]',
        "image1Title": 'التعليم العالي ترد على أزمة أستاذة جامعة السويس التي رقصت على سطح منزلها',
        "image2Title" : "برلسكوني يمثل أمام القضاء في يوليو في قضية البونغا بونغا",
        "image3Title" : "انقلاب الـ SMS.. هل بدأت معركة الرئاسة مبكرا بين السيسي وشفيق؟",
        "header" : "عاجل| الحبس 6 أشهر لـ أحمد موسى لإذاعة مكالمات سرية",
        "content" : "قضت محكمة جنح أول مدينة نصر، برئاسة المستشار رامى عرايس بحبس الإعلامي أحمد موسى، بتهمة إذاعة ونشر مكالمات هاتفية مسربة حصل عليها بشكل غير قانوني",
    });
    //to push to all 
    Pushbots.push(function(response) {
        console.log(response);
    });
}


function sendPromotedContentEnglish(){
	 console.log("sending promoted content");
    Pushbots.setMessage(" promoted content"); //sending to (android and ios) platforms by default add optional paramater "0" for iOS, "1" for Android and "2" for Chrome. 
    Pushbots.customFields({
        "promoted" :  '[ {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24897737/24897737-v2_large.jpg?1491407652"}, {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24897115/24897115-v2_large.jpg?1491404204"}, {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24897341/24897341-v2_large.jpg?1491405555"}, {"image":"http://assets2.akhbarak.net/photos/articles-photos/2017/4/5/24898061/24898061-v2_large.jpg?1491409347"}]',
        "image1Title": 'US Ambassador to UN suggests Washington open to using military action to end Syrian war',
        "image2Title" : "Bannon bumped from National Security Council",
        "image3Title" : "Electronics ban at airports could expand",
        "header" : "Syria chemical attack victims gassed as they slept",
        "content" : "Russian claims that a regime airstrike on a terrorist ammunition depot caused the deaths of at least 70 people in northern Syria have been rejected, as victims described the aftermath of chemical bombs dropped from planes",
    });
        Pushbots.customNotificationTitle("CUSTOM TITLE");

    //to push to all 
    Pushbots.push(function(response) {
        console.log(response);
    });
}

sendVideo();
//sendFinance();
//sendPromotedContentEnglish();
