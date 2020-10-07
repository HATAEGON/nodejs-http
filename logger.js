var url="http://abc.com"

const EventEmitter = require('events')

class Logger extends EventEmitter {

    log(message) {
    // send log request
        console.log("Sended log " + message);
    // Raise an event
        this.emit("messageLogged", {id :1, url : 'http://abc.com'}) 
    }

}
 
module.exports=Logger

