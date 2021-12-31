import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterSpecificationsAddUpdatedAt1640913477373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'specifications',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('specifications', 'updatedAt')
  }
}
