import RowContainer from "../molecules/RowContainer";
import ThemedText from "../atoms/ThemedText";
import useDatabase from "@/hooks/useDatabase";

const DatabaseList = () => {
  const { databases } = useDatabase();

  return (
    <>
      {databases.map((database, index) => (
        <RowContainer key={index} onPress={() => console.log("test")}>
          <ThemedText>{database.database}</ThemedText>
        </RowContainer>
      ))}
    </>
  );
};

export default DatabaseList;
