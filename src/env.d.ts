declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    MONGO_URI: string;
  }
}