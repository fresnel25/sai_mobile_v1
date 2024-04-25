import { useContext } from "react";
import { Button, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import AuthContext from "../../Context/AuthContext";
import { logout } from "../../Services/AuthService";

const Home = ({ navigation }) => {
const {user} = useContext(AuthContext);
const handleLogout = async() => {
 await logout();
}
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome {user.name}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Home;
