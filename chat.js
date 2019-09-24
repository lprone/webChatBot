function send() {
    function addMessageFromUser(chat, message) {
        return chat + "\n You: " + message;
    }

    function addMessageFromBot(chat, message) {
        return chat + "\n Bot: " + message;
    }

    var message = document.getElementById("message");
    var chat = document.getElementById("chat");

    chat.value = addMessageFromUser(chat.value, message.value);
    const url = 'https://lpronechatbotapi.herokuapp.com/answer?key=' + message.value;

    message.value = "";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    chat.value = addMessageFromBot(chat.value, xmlHttp.response);
}


