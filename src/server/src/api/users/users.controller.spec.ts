import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const user = {
  id: 1,
  username: 'test',
  description: 'test',
  age: null,
  firstName: null,
  lastName: null,
  createdAt: null,
  updatedAt: null,
};
const serviceResult = {
  findAll:  [
    {...user},
  ],
  findOne: {...user},
  remove: null,
  create: {...user},
  update: {...user},
};
const MockUsersService = {
  async findAll() {
    return serviceResult.findAll;
  },
  async findOne(id) {
    return serviceResult.findOne;
  },
  async remove(id) {
    return serviceResult.remove;
  },
  async create(item) {
    return serviceResult.create;
  },
  async update(item) {
    return serviceResult.create;
  },
};

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const app = await Test
      .createTestingModule({
        controllers: [UsersController],
        providers: [{ provide: UsersService, useValue: MockUsersService }],
      })
      .compile();

    usersService = app.get<UsersService>(UsersService);
    usersController = app.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return users list', async () => {
      const expectedResult = serviceResult.findAll;
      jest.spyOn(usersService, 'findAll').mockImplementation(async () => expectedResult);

      const result = await usersController.findAll();
      expect(result).toBe(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return users list', async () => {
      const expectedResult = serviceResult.findOne;
      jest.spyOn(usersService, 'findOne').mockImplementation(async () => expectedResult);

      const result = await usersController.findOne(user.id);
      expect(result).toBe(expectedResult);
    });
  });

  describe('remove', () => {
    it('should delete user and return emoty response', async () => {
      const expectedResult = serviceResult.remove;
      jest.spyOn(usersService, 'remove').mockImplementation(async () => expectedResult);

      const result = await usersController.remove(user.id);
      expect(result).toBe(expectedResult);
    });
  });

  describe('create', () => {
    it('should create user and return', async () => {
      const expectedResult = serviceResult.create;
      jest.spyOn(usersService, 'create').mockImplementation(async () => expectedResult);

      const result = await usersController.create(user);
      expect(result).toBe(expectedResult);
    });
  });

  describe('update', () => {
    it('should return updated user', async () => {
      const expectedResult = serviceResult.update;
      jest.spyOn(usersService, 'update').mockImplementation(async () => expectedResult);

      const result = await usersController.update(user.id, user);
      expect(result).toBe(expectedResult);
    });
  });
});
