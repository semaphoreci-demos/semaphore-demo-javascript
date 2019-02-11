import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('AppController', () => {
  let app: TestingModule;
  let usersService: UsersService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = app.get<UsersService>(UsersService);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const result = [
        {
          id: 1,
          username: 'test',
          description: 'test',
          age: null,
          firstName: null,
          lastName: null,
          createdAt: null,
          updatedAt: null,
        },
      ];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => Promise.resolve(result));

      const usersController = app.get<UsersController>(UsersController);
      expect(usersController.findAll()).toBe(Array);
    });
  });
});
