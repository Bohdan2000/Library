import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from './books.module';
import { DatabaseModule } from '../database/database.module';

describe('Book (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        BooksModule,
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('deleteBook', () => {
    const deleteBookQuery = `
      mutation {
        deleteBook(id: 10)
      }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .set('Authorization', 'Bearer VGggTm92IDE0IDIwMTk=')
      .send({
        operationName: null,
        query: deleteBookQuery,
      })
      .expect(({ body }) => {
        expect(body.data.deleteBook).toBe(true);
      })
      .expect(200);
  });
});
