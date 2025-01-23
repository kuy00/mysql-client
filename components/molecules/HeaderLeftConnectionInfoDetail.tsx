import { useNavigation } from "expo-router";
import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";

const HeaderLeftConnectionInfoDetail = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.goBack()}
      label={<ThemedText>Close</ThemedText>}
    />
  );
};

export default HeaderLeftConnectionInfoDetail;
