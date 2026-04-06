import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { Env } from "./env";

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	const configService: ConfigService<Env, true> = app.get(ConfigService);
	const port = configService.get("PORT", { infer: true });

	await app.listen(port, "0.0.0.0");
}

bootstrap();
