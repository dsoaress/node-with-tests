import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterSpecificationsToCamelCase1640913154123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('specifications', 'created_at', 'createdAt')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('specifications', 'createdAt', 'created_at')
  }
}
