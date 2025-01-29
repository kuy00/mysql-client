import { JsonObject, JsonProperty } from "typescript-json-serializer";

interface ConnectionInfoInterface {
  id: number;
  name: string;
}

@JsonObject()
class ConnectionInfo implements ConnectionInfoInterface {
  @JsonProperty({ name: "id" })
  public id: number;
  @JsonProperty({ name: "name" })
  public name: string;
}

export default ConnectionInfo;
