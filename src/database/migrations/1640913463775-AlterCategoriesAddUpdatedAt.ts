import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterCategoriesAddUpdatedAt1640913463775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'updatedAt')
  }
}
