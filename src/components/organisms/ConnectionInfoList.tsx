import useConnectionInfo from "@/hooks/useConnectionInfo";
import { Image, StyleSheet, View } from "react-native";
import RowContainer from "../molecules/RowContainer";
import { Octicons } from "@expo/vector-icons";
import ContextMenu from "react-native-context-menu-view";
import { router } from "expo-router";
import ThemedText from "../atoms/ThemedText";

const ConnectionInfoList = () => {
  const { connectionInfos } = useConnectionInfo();

  return (
    <View style={{ flex: 1 }}>
      {connectionInfos?.map((connectionInfo, index) => {
        const name =
          connectionInfo.name === ""
            ? connectionInfo.host
            : connectionInfo.name;

        return (
          <View key={index}>
            <RowContainer onPress={() => console.log("test")}>
              <View style={styles.innerContainer}>
                <Image
                  source={require("@assets/images/icon.png")}
                  style={styles.image}
                />
                <View style={styles.subContainer}>
                  <ThemedText style={styles.title}>{name}</ThemedText>
                  <ThemedText style={styles.subTitle}>
                    {connectionInfo.host}
                  </ThemedText>
                </View>
              </View>
            </RowContainer>
            <View style={styles.config}>
              <ContextMenu
                dropdownMenuMode
                title={name}
                actions={[
                  { title: "Connect", systemIcon: "play" },
                  { title: "Edit", systemIcon: "pencil" },
                  { title: "Duplicate", systemIcon: "document.on.document" },
                  {
                    title: "Delete",
                    systemIcon: "trash",
                    destructive: true,
                  },
                ]}
                onPress={(e) => {
                  switch (e.nativeEvent.name) {
                    case "Connect":
                      console.log("Connect");
                      break;
                    case "Edit":
                      router.push(`/connectionInfo/${connectionInfo.id}`);
                      break;
                    case "Duplicate":
                      console.log("Duplicate");
                      break;
                    case "Delete":
                      console.log("Delete");
                      break;
                  }
                }}
              >
                <View>
                  <Octicons name="gear" size={24} color="gray" />
                </View>
              </ContextMenu>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle: {
    color: "gray",
  },
  innerContainer: {
    flexDirection: "row",
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 8,
  },
  config: { position: "absolute", right: 16, top: 20 },
});

export default ConnectionInfoList;
