import socket from './socket';


export const getAllTweets = () => {
    return new Promise((resolve,reject) => {
        socket.emit('load', function(data) {
            console.log(data);
            resolve(data);
        });
    });
};
