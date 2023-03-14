import { appConfig } from "./app";
import { ConfigModuleOptions } from "@nestjs/config";
import { DatabaseConfig } from "./database";

export const config: ConfigModuleOptions = {
    load: [appConfig, DatabaseConfig],
    isGlobal: true,
    cache: true
}