import { JsonObject, JsonProperty } from "typescript-json-serializer";

interface ConnectionInfoInterface {
  id?: number;
  name?: string;
  host: string;
  port: number;
  userId: string;
  password: string;
  database?: string;
}

@JsonObject()
class ConnectionInfo implements ConnectionInfoInterface {
  @JsonProperty({ name: "id" })
  public id?: number;

  @JsonProperty({ name: "name" })
  public name?: string;

  @JsonProperty({ name: "host" })
  public host: string;

  @JsonProperty({ name: "port" })
  public port: number;

  @JsonProperty({ name: "user_id" })
  public userId: string;

  @JsonProperty({ name: "password" })
  public password: string;

  @JsonProperty({ name: "database" })
  public database?: string;

  constructor(params?: ConnectionInfoInterface) {
    if (params) {
      this.id = params.id;
      this.name = params.name;
      this.host = params.host;
      this.port = params.port;
      this.userId = params.userId;
      this.password = params.password;
      this.database = params.database;
    }
  }
}

export default ConnectionInfo;
