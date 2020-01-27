import {MigrationInterface, QueryRunner} from "typeorm";

export class default1580077970489 implements MigrationInterface {
    name = 'default1580077970489'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "description" text, "views" integer, "isPublished" boolean, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "description" text, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "description" text, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "book_authors_author" ("bookId" integer NOT NULL, "authorId" integer NOT NULL, CONSTRAINT "PK_963de00068693ab6e5767de614b" PRIMARY KEY ("bookId", "authorId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9bf58ffb2a12a8609a738ee8ca" ON "book_authors_author" ("bookId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a4cafdf2ec9974524a5321c751" ON "book_authors_author" ("authorId") `, undefined);
        await queryRunner.query(`CREATE TABLE "user_books_book" ("userId" integer NOT NULL, "bookId" integer NOT NULL, CONSTRAINT "PK_baef78b64f8672af581fb995802" PRIMARY KEY ("userId", "bookId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ad4911225f9d075e7af4dc2ced" ON "user_books_book" ("userId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_17480627c54e46bc745098954e" ON "user_books_book" ("bookId") `, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_books_book" ADD CONSTRAINT "FK_ad4911225f9d075e7af4dc2cede" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_books_book" ADD CONSTRAINT "FK_17480627c54e46bc745098954e3" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_books_book" DROP CONSTRAINT "FK_17480627c54e46bc745098954e3"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_books_book" DROP CONSTRAINT "FK_ad4911225f9d075e7af4dc2cede"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_17480627c54e46bc745098954e"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ad4911225f9d075e7af4dc2ced"`, undefined);
        await queryRunner.query(`DROP TABLE "user_books_book"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a4cafdf2ec9974524a5321c751"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9bf58ffb2a12a8609a738ee8ca"`, undefined);
        await queryRunner.query(`DROP TABLE "book_authors_author"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "author"`, undefined);
        await queryRunner.query(`DROP TABLE "book"`, undefined);
    }

}
