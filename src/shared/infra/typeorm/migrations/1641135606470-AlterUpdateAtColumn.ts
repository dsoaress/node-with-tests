import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUpdateAtColumn1641135606470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'cars',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      })
    )

    await queryRunner.changeColumn(
      'categories',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      })
    )

    await queryRunner.changeColumn(
      'specifications',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      })
    )

    await queryRunner.changeColumn(
      'users',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'cars',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: null
      })
    )

    await queryRunner.changeColumn(
      'categories',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: null
      })
    )

    await queryRunner.changeColumn(
      'specifications',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: null
      })
    )

    await queryRunner.changeColumn(
      'users',
      'updatedAt',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: null
      })
    )
  }
}
