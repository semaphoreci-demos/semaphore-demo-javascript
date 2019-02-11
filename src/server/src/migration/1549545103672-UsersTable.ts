import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class UsersTable1549545103672 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'username',
          type: 'varchar',
          length: '100',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'age',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'firstName',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'lastName',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }
}
