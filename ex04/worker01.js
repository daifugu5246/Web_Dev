self.onmessage = function(messege) {
    setInterval(function() {
        let date = new Date();
        postMessage(date);
    },100);
}
