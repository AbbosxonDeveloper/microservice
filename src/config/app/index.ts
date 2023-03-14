import { Transport } from "@nestjs/microservices";
import {registerAs} from '@nestjs/config'

interface IAppConfig {
    readonly transport: Transport;
    readonly options: {
        readonly host: string;
        readonly port: number;
    }
}

export const appConfig = registerAs('app' ,(): IAppConfig => ({
    transport: Transport.TCP,
    options: {
        host: "localhost",
        port: 3000
    }
}))