import {MigrationInterface, QueryRunner} from "typeorm";

export class biUsersToBook1580100799653 implements MigrationInterface {
    name = 'biUsersToBook1580100799653'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "description"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "description"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "views"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "isPublished"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "description"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "photo" text`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "releaseDate" TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "firstName" character varying(500) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "lastName" character varying(500) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "birthday" TIMESTAMP`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "birthday"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "lastName"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "firstName"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "releaseDate"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "photo"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "description" text`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "name" character varying(500) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "isPublished" boolean`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "views" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "description" text`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "description" text`, undefined);
    }

}
