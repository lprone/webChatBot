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
    message.value = "";

    const url = 'https://lpronerestapi.herokuapp.com';

    axios.get(url)
        .then(function (response) {
            // handle success
            chat.value = addMessageFromBot(chat.value, JSON.stringify(response.data, null, 2));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}


