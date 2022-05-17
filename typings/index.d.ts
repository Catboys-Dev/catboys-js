declare class CatboyClient {
    /**
     * Return a random catboy image
     * @returns {Promise<CatboyClient.CatboyImageResults>} A JSON object containing the image URL
     */
    image(): Promise<CatboyClient.CatboyImageResults>;
    /**
     * Returns a random baka gif
     * @returns {Promise<CatboyClient.CatboyBakaResults>} A JSON object containing the image URL
     */
    baka(): Promise<CatboyClient.CatboyBakaResults>;
    /**
     * Returns a random saying from a virtual catboy
     * @returns {Promise<CatboyClient.CatboyChatResults>} A JSON object containing the chat response
     */
    response(): Promise<CatboyClient.CatboyChatResults>;
    /**
     * Returns a random saying from a virtual 8ball
     * @returns {Promise<CatboyClient.Catboy8BallResults>} A JSON object containing the 8Ball response and matching image URL
     */
    "8Ball"(): Promise<CatboyClient.Catboy8BallResults>;
    /**
     * Returns a random number and image from a virtual 6-sided dice
     * @returns {Promise<CatboyClient.CatboyDiceResults>} A JSON object containing the dice roll and matching image URL
     */
    dice(): Promise<CatboyClient.CatboyDiceResults>;

    // SFW backwards compatibility
    sfw: {
        /**
         * Return a random catboy image
         * @returns {Promise<CatboyClient.CatboyImageResults>} A JSON object containing the image URL
         */
        img(): Promise<CatboyClient.CatboyImageResults>;
        /**
         * Returns a random baka gif
         * @returns {Promise<CatboyClient.CatboyBakaResults>} A JSON object containing the image URL
         */
        baka(): Promise<CatboyClient.CatboyBakaResults>;
        /**
         * Returns a random saying from a virtual catboy
         * @returns {Promise<CatboyClient.CatboyChatResults>} A JSON object containing the chat response
         */
        response(): Promise<CatboyClient.CatboyChatResults>;
        /**
         * Returns a random saying from a virtual 8ball
         * @returns {Promise<CatboyClient.Catboy8BallResults>} A JSON object containing the 8Ball response and matching image URL
         */
        "8Ball"(): Promise<CatboyClient.Catboy8BallResults>;
        /**
         * Returns a random number and image from a virtual 6-sided dice
         * @returns {Promise<CatboyClient.CatboyDiceResults>} A JSON object containing the dice roll and matching image URL
         */
        dice(): Promise<CatboyClient.CatboyDiceResults>;
    };
}

declare namespace CatboyClient {
    export interface CatboyImageResults {
        url: string;
        artist: string;
        artist_url: string;
        source_url: string;
        error: string;
    }

    export interface CatboyBakaResults {
        url: string;
        error: string;
    }

    export interface CatboyChatResults {
        response: string;
        error: string;
    }

    export interface Catboy8BallResults {
        response: string;
        url: string;
        error: string;
    }

    export interface CatboyDiceResults {
        response: string;
        url: string;
        error: string;
    }
}

export = CatboyClient;
