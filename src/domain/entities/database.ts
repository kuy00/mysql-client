import { JsonObject, JsonProperty } from "typescript-json-serializer";

interface DatabaseInterface {
  database: string;
}

@JsonObject()
class Database implements DatabaseInterface {
  @JsonProperty({ name: "Database" })
  public database: string;

  constructor(params?: DatabaseInterface) {
    if (params) {
      this.database = params.database;
    }
  }
}

export default Database;
