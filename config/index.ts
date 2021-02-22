import * as dotenv from 'dotenv';

dotenv.config();

const config: {
    dev: boolean,
    port: string|number,
    cors: string|undefined,
    dbUser: string|undefined,
    dbPassword: string|undefined,
    dbHost: string|undefined,
    dbName: string|undefined
 } = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
}

export default config;