import RowContainer from "../molecules/RowContainer";
import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";
import useDatabase from "@/hooks/useDatabase";

const DatabaseList = () => {
  const { databases } = useDatabase();

  return (
    <>
      {databases.map((database, index) => (
        <RowContainer key={index}>
          <Button label={<ThemedText>{database.database}</ThemedText>} />
        </RowContainer>
      ))}
    </>
  );
};

export default DatabaseList;
