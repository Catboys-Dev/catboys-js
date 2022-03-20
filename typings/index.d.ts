//List all the functions
declare class CatboyClient {
  sfw: {
    img():Promise<CatboyClient.CatboyRequestResults>;
    baka():Promise<CatboyClient.CatboyRequestResults>;
    response():Promise<CatboyClient.CatboyChatResults>;
    "8Ball"(opts: CatboyClient.CatboyQueryParams):Promise<CatboyClient.CatboyChatResults>;
    "dice"(opts: CatboyClient.CatboyQueryParams):Promise<CatboyClient.CatboyChatResults>;
  }
}

export = CatboyClient;


declare namespace CatboyClient {
  //Help create options interface for the few functions that need it
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
