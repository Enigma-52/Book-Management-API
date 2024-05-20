import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModuleModule } from './book-module/book-module.module';

@Module({
  imports: [BookModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
