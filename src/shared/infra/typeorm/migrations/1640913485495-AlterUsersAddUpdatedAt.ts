import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUsersAddUpdatedAt1640913485495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'updatedAt')
  }
}
