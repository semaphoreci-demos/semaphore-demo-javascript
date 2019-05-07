import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { UsersService } from '../src/api/users/users.service';
import { ConfigService } from '../src/config/config.service';

describe('AppController (e2e)', () => {
  let prefix = '';
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
    const configService: ConfigService = app.get(ConfigService);
    prefix = configService.get('URL_PREFIX');
    app.setGlobalPrefix(prefix);
    await app.init();
  });

  it(`/${prefix}/users (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/${prefix}/users`)
      .expect(200)
      .expect(JSON.stringify(result.findAll));
  });

  it(`/${prefix}/users/${user.id} (DELETE)`, () => {
    return request(app.getHttpServer())
      .delete(`/${prefix}/users/${user.id}`)
      .expect(200)
      .expect(result.remove);
  });

  it(`/${prefix}/users/${user.id} (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/${prefix}/users/${user.id}`)
      .expect(200)
      .expect(JSON.stringify(result.findOne));
  });

  it(`/${prefix}/users/${user.id} (PUT)`, () => {
    return request(app.getHttpServer())
      .put(`/${prefix}/users/${user.id}`)
      .send(user)
      .expect(200)
      .expect(JSON.stringify(result.update));
  });

  it(`/${prefix}/users (POST)`, () => {
    return request(app.getHttpServer())
      .post(`/${prefix}/users`)
      .send(user)
      .expect(201)
      .expect(JSON.stringify(result.create));
  });

  afterAll(async () => {
    await app.close();
  });
});
