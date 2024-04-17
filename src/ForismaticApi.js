const FORISMATIC_SERVER_URL = 'http://api.forismatic.com/api/1.0/';

class ForismaticApi {
    constructor() {
    }

    getQuote() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            }
        };
            
        return fetch("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru", requestOptions)
        .then((response) => { 
            console.log('response:', response);
            if (response.ok)
                return response.json();
            else 
                return Promise.reject(`Ошибка: ${response.status}`);
        });
        
    }
}

const ForismaticApiInstance = new ForismaticApi();

export default ForismaticApiInstance;