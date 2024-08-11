import io from "socket.io-client";
import conf from "../conf/conf";

// connecting socket
const socket = io(conf.backendConfig.baseUrl);

export default socket;
