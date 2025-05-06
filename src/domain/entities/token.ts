import { JsonObject, JsonProperty } from "typescript-json-serializer";

interface TokenInterface {
  token: string;
}

@JsonObject()
class Token implements TokenInterface {
  @JsonProperty({ name: "token" })
  public token: string;

  constructor(params?: Token) {
    if (params) {
      this.token = params.token;
    }
  }
}

export default Token;
