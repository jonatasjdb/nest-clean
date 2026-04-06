import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";

@Controller("/accounts")
export class GetAccountController {
	constructor(private prisma: PrismaService) {}
	@Get()
	async handle() {
		return await this.prisma.user.findMany();
	}
}
