import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Button from "./Button/Button";
import Colors from "../Constants/Color";

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/sai-i-lama-logo.png")}
            style={{
              height: 100,
              width: 100,
              position: "absolute",
              top: 60,
            }}
          ></Image>
        </View>

        {/* Content */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 350,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            Bienvenue chez
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            saï i lama
          </Text>
          <Button
            title="Nous Rejoindre"
            onPress={() => navigation.navigate("Register")}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 80,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: Colors.primary,
              }}
            >
              Avez-vous déja un compte ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.primary,
                  fontWeight: "bold",
                  marginLeft:4
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
