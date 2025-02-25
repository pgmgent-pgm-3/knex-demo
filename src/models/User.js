import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// define the userInfo model
class User extends Model {
    static get tableName() {
        return "users_list";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["firstName", "lastName", "bio"],
            properties: {
                id: { type: "integer" },
                firstName: { type: "string", minLength: 1, maxLength: 255 },
                lastName: { type: "string", maxLength: 255 },
                bio: { type: "string", minLength: 1 },
            },
        };
    }
}

export default User;
