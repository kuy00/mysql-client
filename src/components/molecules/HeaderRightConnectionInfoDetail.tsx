import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";
import useFormWithAtom from "@/hooks/useConnectionInfo";

export const HeaderRightConnectionInfoDetail = () => {
  const { save } = useFormWithAtom();

  return <Button onPress={save} label={<ThemedText>Save</ThemedText>} />;
};

export default HeaderRightConnectionInfoDetail;
