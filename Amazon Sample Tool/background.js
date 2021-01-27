//Amazon検索ボックスに入れる値
let send_val = undefined

//chrome.browserAction.onClicked.addListener(function(tab) {
    //タブを作成
//    chrome.tabs.create({
//        url: "https://www.amazon.co.jp"
//    });
//});

//メッセージリスナー
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    // ページ読み込み時
    if (request.name === "send_load" && typeof send_val !== "undefined") {
        //alert("send_load:" + send_val);
        let response = {send_val: send_val,name:"send_background"};
        sendResponse(response);
        //残るのでクリア
        send_val = undefined
    }

    // clickイベント時
    if (request.name === "send_click") {
          //alert("send_click:" + request.send_val);
          send_val = request.send_val;
        //タブを作成
        chrome.tabs.create({
            url: "https://www.amazon.co.jp"
        });
    }
});