import { useContext } from "react";
import {
  Button,
  SafeAreaView,
  Text,
} from "react-native";
import AuthContext from "../../Context/AuthContext";
import { logout } from "../../Services/AuthService";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
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

export default Profile;
