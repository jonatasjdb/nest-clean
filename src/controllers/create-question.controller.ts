import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { CurrentUser } from "@/auth/current-user-decorator";
import { TokenPayload } from "@/auth/jwt.strategy";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";
import { PrismaService } from "@/prisma/prisma.service";

@Controller("/questions")
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
	constructor(private prisma: PrismaService) {}

	@Post()
	async handle(@CurrentUser() user: TokenPayload) {}
}
