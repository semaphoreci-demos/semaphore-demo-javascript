import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { UsersService } from '../src/api/users/users.service';
import config from '../src/config';

describe('AppController (e2e)', () => {
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
  const result = {
    findAll:  [
      {...user},
    ],
    findOne: {...user},
    remove: '',
    create: {...user},
    update: {...user},
  };
  let app: INestApplication;
  const usersService = {
    findAll: () => result.findAll,
    findOne: (id) => result.findOne,
    remove: (id) => result.remove,
    create: (item) => result.create,
    update: (id, item) => result.update,
  };

  beforeAll(async () => {
    const moduleFixture = await Test
      .createTestingModule({
        imports: [
          AppModule,
        ],
      })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix(config.URL_PREFIX);
    await app.init();
  });

  it(`/${config.URL_PREFIX}/users (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/${config.URL_PREFIX}/users`)
      .expect(200)
      .expect(JSON.stringify(result.findAll));
  });

  it(`/${config.URL_PREFIX}/users/${user.id} (DELETE)`, () => {
    return request(app.getHttpServer())
      .delete(`/${config.URL_PREFIX}/users/${user.id}`)
      .expect(200)
      .expect(result.remove);
  });

  it(`/${config.URL_PREFIX}/users/${user.id} (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/${config.URL_PREFIX}/users/${user.id}`)
      .expect(200)
      .expect(JSON.stringify(result.findOne));
  });

  it(`/${config.URL_PREFIX}/users/${user.id} (PUT)`, () => {
    return request(app.getHttpServer())
      .put(`/${config.URL_PREFIX}/users/${user.id}`)
      .send(user)
      .expect(200)
      .expect(JSON.stringify(result.update));
  });

  it(`/${config.URL_PREFIX}/users (POST)`, () => {
    return request(app.getHttpServer())
      .post(`/${config.URL_PREFIX}/users`)
      .send(user)
      .expect(201)
      .expect(JSON.stringify(result.create));
  });

  afterAll(async () => {
    await app.close();
  });
});
