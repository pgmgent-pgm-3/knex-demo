import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// define the NavigationItem model
class pages extends Model {
    static get tableName() {
        return "pages";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "slug", "content"],
            properties: {
                id: { type: "integer" },
                title: { type: "string", minLength: 1, maxLength: 255 },
                slug: { type: "string", maxLength: 255 },
                content: { type: "string", minLength: 1, maxLength: 255 },
                is_homepage: { type: "boolean" },
            },
        };
    }
}

export default pages;
