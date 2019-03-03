const http = {
    request(type, url, data, done) {
        const request = new XMLHttpRequest();

        request.onload = function() {
            if (request.status === 200) {
                done(request.responseText);
            }
        }

        request.open(type.toUpperCase(), url);
        request.send(data);
    }
};

class HttpAdapter {
    constructor(http) {
        this.http = http;
    }

    get(url) {
        return new Promise((resolve, reject) => {
            this.http.request('GET', url, null, resolve);
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this.http.request('POST', url, data, resolve);
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            this.http.request('PUT', url, data, resolve);
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            this.http.request('DELETE', url, null, resolve);
        });
    }
}

class Repository {
    constructor(baseUrl, resource, http) {
        this.baseUrl = baseUrl;
        this.resource = resource;
        this.http = http;
    }

    get url() {
        return `${this.baseUrl}/${this.resource}`;
    }

    getAll() {
        return this.http.get(this.url);
    }

    getOne(id) {
        return this.http.get(`${this.url}/${id}`);
    }

    create(data) {
        return this.http.post(this.url, data);
    }

    update(id, data) {
        return this.http.put(`${this.url}/${id}`, data);
    }

    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}

const httpAdapter = new HttpAdapter(http);
const repo = new Repository('https://jsonplaceholder.typicode.com/todos/', Math.ceil(Math.random() * 100), httpAdapter);
repo.getAll().then(courses => console.log(courses));
