const { get } = require(`https`);
const { URL } = require(`url`);
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
    sfw = {};

    constructor() {
        const baseURL = `https://api.catboys.com/`;
        Object.keys(endpoints).forEach(async (endpoint) => {
            if (endpoint !== `img`) {
                this[endpoint] = async () => {
                    let url = new URL(`${baseURL}${endpoints[endpoint]}`);
                    return await getContent(url.toString());
                };
            }

            if (endpoint !== `image`) {
                this.sfw[endpoint] = async () => {
                    let url = new URL(`${baseURL}${endpoints[endpoint]}`);
                    return await getContent(url.toString());
                };
            }
        });
    }
};
