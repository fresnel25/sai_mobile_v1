import { useContext } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View
} from "react-native";
import AuthContext from "../../Context/AuthContext";
import Colors from "../../Constants/Color";

const Home = () => {
  const { user} = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
      }}
    >
      <Text>Welcome {user.name}</Text>
    </View>
    </SafeAreaView>
  );
};

export default Home;
