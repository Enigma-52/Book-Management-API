import { Test, TestingModule } from '@nestjs/testing';
import { BookModuleController } from './book-module.controller';

describe('BookModuleController', () => {
  let controller: BookModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookModuleController],
    }).compile();

    controller = module.get<BookModuleController>(BookModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
