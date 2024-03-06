/*
2024/2/1
soul
*/

const path = "/chat/limitInfo";
const game = "/planet/config";
const flag = "/planet/recListV2";
const tab = "/post/recSquare";
//const room = "/chatClassifyRoomList";
const cacl = "/calculateSoulList";
const chatRoomTab = "/getRoomTagInfo";
const roomAd = "/chatroom/chatClassifyRoomList";

let url = $request.url;
console.log("url: " + url);
//let req = JSON.parse($request.body);
let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    //let obj = JSON.parse(body);
    //console.log(obj);
    delete obj.data.subMsg;
    delete obj.data.extMsg;
    delete obj.data.abValue;
    delete obj.data.freeEquityStatus;
    delete obj.data.msg;
    delete obj.data.remainFreeCount;
    delete obj.data.type;
    obj.data.limit = false;
    //body = JSON.stringify(obj);
    //console.log(body)
} else if (url.indexOf(game) != -1){
    obj.data.showRedMind = false;
    //obj.data.gameInfo = false;
    obj.data.showLuckyBag = false;
    obj.data.chatRoomInfo.showChatRoom = false;
    obj.data.gameInfo.showGameCard = false;
    obj.data.coreCards = obj.data.coreCards.filter(card => card.sortId === 1 || card.sortId === 3);
    //obj.data.coreCards = [];
    
    //console.log(JSON.stringify(obj));
} else if (url.indexOf(flag) != -1) {
    obj.data.topicList = [];
    //obj.data.topicList = obj.data.topicList.filter(card => card.topic === "今日hot" );
} else if (url.indexOf(tab) != -1) {
    obj.data = obj.data.filter(card => card.pageId === "PostSquare_Recommend");
} 
//else if (url.indexOf(room) != -1) {
    //obj.data.roomList = [];
//} 
else if (url.indexOf(cacl) != -1) {
    obj.data.model.show = false;
} else if (url.indexOf(chatRoomTab) != -1) {
    obj.data.res = obj.data.res.filter(item => item.id === 0 || item.id === 2 || item.id === 4 || item.id === 5);
} else if (url.indexOf(roomAd) != -1) {
    //console.log("命中了" + url);
    obj.data.positionContentRespList = [];
    //console.log(JSON.stringify(obj.data.positionContentRespList));
}


body = JSON.stringify(obj);
$done({body});
