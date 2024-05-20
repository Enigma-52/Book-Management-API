import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.$use(this.errorMiddleware);
  }

  private errorMiddleware: Prisma.Middleware = async (params, next) => {
    try {
      return await next(params);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('A book with the same title already exists');
        }
      }
      throw new InternalServerErrorException('Database error');
    }
  };
}
