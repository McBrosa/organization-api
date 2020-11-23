import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class OrganizationTable1606102469681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'organization',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar(500)',
            isNullable: false,
          },
          {
            name: 'startDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'employeeCount',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'management',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
      false,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`DROP TABLE organization`);
  }
}
