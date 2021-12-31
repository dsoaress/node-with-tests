import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterUserToCamelCase1640913009156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'created_at', 'createdAt')
    await queryRunner.renameColumn('users', 'driver_license', 'driverLicense')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'createdAt', 'created_at')
    await queryRunner.renameColumn('users', 'driverLicense', 'driver_license')
  }
}
