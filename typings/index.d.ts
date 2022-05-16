// List all the functions
declare class CatboyClient {
    /**
     * Image
     * @returns {Promise<CatboyClient.CatboyRequestResults>} A JSON object containing the image URL
     */
    image(): Promise<CatboyClient.CatboyRequestResults>;
    /**
     * Baka
     * @returns {Promise<CatboyClient.CatboyRequestResults>} A JSON object containing the image URL
     */
    baka(): Promise<CatboyClient.CatboyRequestResults>;
    /**
     * Response
     * @returns {Promise<CatboyClient.CatboyChatResults>} A JSON object containing the chat response
     */
    response(): Promise<CatboyClient.CatboyChatResults>;
    /**
     * 8Ball
     * @param {CatboyClient.CatboyQueryParams} options A JSON object containing the options
     * @returns {Promise<CatboyClient.CatboyChatResults>} A JSON object containing the 8Ball response and matching image URL
     */
    "8Ball"(options: CatboyClient.CatboyQueryParams): Promise<CatboyClient.CatboyChatResults>;
    /**
     * Dice
     * @param {CatboyClient.CatboyQueryParams} options A JSON object containing the options
     * @returns {Promise<CatboyClient.CatboyChatResults>} A JSON object containing the dice roll and matching image URL
     */
    dice(options: CatboyClient.CatboyQueryParams): Promise<CatboyClient.CatboyChatResults>;
}

declare namespace CatboyClient {
    // Help create options interface for the few functions that need it
    export interface CatboyQueryParams {
        text: string;
    }

    export interface CatboyRequestResults {
        url: string;
    }

    export interface CatboyChatResults {
        response: string;
        url?: string;
    }

    export interface CatboyCatResult {
        catboy: string;
    }
}

export = CatboyClient;
