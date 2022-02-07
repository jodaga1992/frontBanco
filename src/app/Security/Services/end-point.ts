import { environment } from 'src/environments/environment';

const port = environment.production ? environment.port : '8080';
const microservice = '/customer';

export const EndPoint = {
    // URL: environment.protocol + '://' + environment.server + ':' + port + microservice
    URL: microservice
};