const { get } = require("https");
const { URL, URLSearchParams } = require("url");
const endpoints = require("./endpoints.json");

function getContent(url) {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                res.resume();
                reject(`Request failed. Status code: ${statusCode}`);
            }
            res.setEncoding("utf8");
            let rawData = "";
            res.on("data", (chunk) => {
                rawData += chunk;
            });
            res.on("end", () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    reject(`Error: ${e.message}`);
                }
            });
        }).on("error", (err) => {
            reject(`Error: ${err.message}`);
        });
    });
}

class CatboyClient {
    constructor() {
        let self = this;
        self.sfw = {};
        let baseURL = "https://api.catboys.com/";
        Object.keys(endpoints.sfw).forEach(async (endpoint) => {
            self.sfw[endpoint] = async function (queryParams = "") {
                let url = new URL(`${baseURL}${endpoints.sfw[endpoint]}`);
                queryParams !== "" ? (url.search = new URLSearchParams(queryParams)) : "";
                return await getContent(url.toString());
            };
        });
    }
}

module.exports = CatboyClient;
