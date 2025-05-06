import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";
import useConnectionInfoDetail from "@/hooks/useConnectionInfoDetail";

const HeaderLeftConnectionInfoDetail = () => {
  const { close } = useConnectionInfoDetail();

  return <Button onPress={close} label={<ThemedText>Close</ThemedText>} />;
};

export default HeaderLeftConnectionInfoDetail;
