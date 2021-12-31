import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterCategoriesToCamelCase1640913189127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'created_at', 'createdAt')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'createdAt', 'created_at')
  }
}
