import { Link } from "expo-router";
import Button from "../atoms/Button";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const HeaderRightConnectionInfo = () => {
  const theme = useTheme();

  return (
    <>
      <Link href="/connectionInfo/[id]" asChild>
        <Button
          icon={<AntDesign name="plus" size={24} color={theme.colors.text} />}
          iconDirection="left"
        />
      </Link>
    </>
  );
};

export default HeaderRightConnectionInfo;
