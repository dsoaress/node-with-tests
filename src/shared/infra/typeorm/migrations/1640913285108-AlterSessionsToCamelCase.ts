import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterSessionsToCamelCase1640913285108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('sessions', 'expires_at', 'expiresAt')
    await queryRunner.renameColumn('sessions', 'created_at', 'createdAt')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('sessions', 'expiresAt', 'expires_at')
    await queryRunner.renameColumn('sessions', 'createdAt', 'created_at')
  }
}
