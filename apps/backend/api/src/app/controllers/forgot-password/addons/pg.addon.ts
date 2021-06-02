import { Injectable } from "@nestjs/common";
import { Pool, Client } from 'pg';

Injectable()
export class PgAddon {
    DATABASE_URL = process.env.DATABASE_URL || "postgres://postgres:admin@localhost:5432/awread_database";
    pool = new Pool({
        connectionString: `${this.DATABASE_URL}`
    });
    constructor() {
    }

    async pgGetUserByEmail(email) {
        const users = await this.pool.query(`select * from users where email = '${email}'`);
        const [user] = users.rows;
        return user;
    }

    async pgGetUserByUserId(userId) {
        const users = await this.pool.query(`select * from users where "userId" = '${userId}'`);
        const [user] = users.rows;
        return user;
    }

    async createNewPassword(userId, password) {
        const action = await this.pool.query(`select * from reset_password('${userId}', '${password}')`);
        return action.rows[0];
    }
}