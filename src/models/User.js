import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// define the userData model
class userData extends Model {
    static get tableName() {
        return "users_list";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["firstName", "lastName"],
            properties: {
                id: { type: "integer" },
                firstName: { type: "string", minLength: 1, maxLength: 255 },
                lastName: { type: "string", maxLength: 255 },
                bio: { type: "string", minLength: 1, maxLength: 255 },
            },
        };
    }
}

export default userData;
