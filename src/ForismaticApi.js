// const FORISMATIC_SERVER_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru';

const QUOTE_SERVICE = 'https://api.api-ninjas.com/v1/quotes';
const QUOTE_SERVICE_API_KEY = 'ckJazF8nPSAFc+DEVh7fBA==8oVRbpEN4BDXoriz'; // 'X-Api-Key'

class ForismaticApi {
    constructor() {
    }

    getQuote() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: {
                'X-Api-Key': QUOTE_SERVICE_API_KEY
            }
        };
            
        return fetch(QUOTE_SERVICE, requestOptions)
        .then((response) => { 
            //console.log('response:', response);
            if (response.ok)
                return response.json();
            else 
                return Promise.reject(`Ошибка: ${response.status}`);
        });
        
    }
}

const ForismaticApiInstance = new ForismaticApi();

export default ForismaticApiInstance;