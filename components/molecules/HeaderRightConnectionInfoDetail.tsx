import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";

export const HeaderRightConnectionInfoDetail = () => {
  return (
    <Button
      onPress={() => console.log("save")}
      label={<ThemedText>Save</ThemedText>}
    />
  );
};

export default HeaderRightConnectionInfoDetail;
