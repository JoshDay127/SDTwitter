import ioClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:5000';

const socket = ioClient(ENDPOINT);

export default socket;
