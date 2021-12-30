import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSessions1640868602911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sessions',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'user_id',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'expires_at',
            type: 'timestamp',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sessions')
  }
}
