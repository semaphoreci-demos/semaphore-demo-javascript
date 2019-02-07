import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UsersTable1549545103672 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: "username",
          type: "varchar",
          length: "100",
        },
        {
          name: "description",
          type: "text",
        },
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("user");
  }
}
