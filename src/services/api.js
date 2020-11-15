import axios from "axios";

const api = axios.create({
    //baseURL: 'http://10.0.2.2:3333'  - Android c/Emulador
    baseURL: 'http://192.168.1.38:3333' /*Android c/ físico*/
});

export default api;
