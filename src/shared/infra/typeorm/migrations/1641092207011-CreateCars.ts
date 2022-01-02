import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateCars1641092207011 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'dailyPrice',
            type: 'numeric',
            isNullable: false
          },
          {
            name: 'available',
            type: 'boolean',
            isNullable: false,
            default: true
          },
          {
            name: 'licensePlate',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'fineAmount',
            type: 'numeric',
            isNullable: false
          },
          {
            name: 'brand',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'categoryId',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: true
          }
        ],
        foreignKeys: [
          {
            name: 'CarCategory',
            columnNames: ['categoryId'],
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars')
  }
}
