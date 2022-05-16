const { get } = require(`https`);
const { URL, URLSearchParams } = require(`url`);
const endpoints = require(`../endpoints.json`);

const getContent = (URL) => {
    return new Promise((resolve, reject) => {
        get(URL, (response) => {
            const { statusCode } = response;
            if (statusCode !== 200) {
                response.resume();
                reject(`Request failed. Status code: ${statusCode}`);
            }

            response.setEncoding(`utf8`);
            let rawData = ``;
            response.on(`data`, (chunk) => {
                rawData += chunk;
            });

            response.on(`end`, () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    reject(`Error: ${e.message}`);
                }
            });
        }).on(`error`, (error) => {
            reject(`Error: ${error.message}`);
        });
    });
};

module.exports = class CatboyClient {
    constructor() {
        const baseURL = `https://api.catboys.com/`;
        Object.keys(endpoints).forEach(async (endpoint) => {
            this[endpoint] = async (queryParams = ``) => {
                let url = new URL(`${baseURL}${endpoints[endpoint]}`);
                if (queryParams !== ``) url.search = new URLSearchParams(queryParams);
                return await getContent(url.toString());
            };
        });
    }
};
