import { Image, SafeAreaView, Text, View } from "react-native";
import Button from "./Button/Button";

function Home() {
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
              top: 20,
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
          <Button title="Nous Rejoindre" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
