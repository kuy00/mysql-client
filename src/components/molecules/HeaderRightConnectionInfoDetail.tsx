import useConnectionInfoDetail from "@/hooks/useConnectionInfoDetail";
import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";

export const HeaderRightConnectionInfoDetail = () => {
  const { save } = useConnectionInfoDetail();

  return <Button onPress={save} label={<ThemedText>Save</ThemedText>} />;
};

export default HeaderRightConnectionInfoDetail;
