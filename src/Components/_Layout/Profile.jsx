import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../Context/AppContext";
import AuthContext from "../../Context/AuthContext";
import { logout } from "../../Services/AuthService";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Constants/Color";
import { styles } from "./styles";

const Profile = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  const { loadPatient } = useAppContext();
  const [userName, setUserName] = useState(user?.name);
  const [userEmail, setUserEmail] = useState(user?.email);
  const [userImage, setUserImage] = useState(user?.image);
  const [createdAt, setCreatedAt] = useState(user?.createdAt);
  const [edit, setEdit] = useState(false);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const patient = await loadPatient(user.id);
        setPatientData(patient);
      } catch (error) {
        console.error("Error loading patient data:", error);
      }
    };

    fetchPatientData();
  }, [loadPatient, user.id]);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const onSaveUser = async () => {
    try {
      // Update user data logic
      setEdit(false);
    } catch (error) {
      console.error(error);
    } finally {
      setEdit(false);
    }
  };

  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
      base64: true,
    });

    if (!result.cancelled) {
      const base64 = `data:image/png;base64,${result.assets[0].base64}`;
      console.log(base64);

      setUserImage(base64);
    }
  };

  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((name) => name.charAt(0)).join("");
    return initials;
  };

  const getUserStatus = () => {
    const today = new Date();
    const createdDate = new Date(createdAt);
    const diffMonths =
      (today.getFullYear() - createdDate.getFullYear()) * 12 +
      today.getMonth() -
      createdDate.getMonth();

    if (diffMonths < 2) {
      return "New User";
    } else if (diffMonths >= 6) {
      return "Active User";
    } else {
      return "Fidel User";
    }
  };

  return (
    <BlurView
      intensity={80}
      tint={"dark"}
      style={{ flex: 1, paddingTop: 100, backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={onCaptureImage} style={styles.captureBtn}>
          {userImage ? (
            <Image source={{ uri: userImage }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>{getInitials(userName)}</Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
          <View style={styles.userInfo}>
            <Text style={{ fontSize: 20, color: Colors.white }}>
              {userName}
            </Text>
            <Text style={{ fontSize: 18, color: Colors.white }}>
              {userEmail}
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{getUserStatus()}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn} onPress={() => handleLogout()}>
          <Ionicons name="log-out" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="person" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="bulb" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="megaphone" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18, flex: 1 }}>Inbox</Text>
          <View
            style={{
              backgroundColor: Colors.primary,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>14</Text>
          </View>
        </TouchableOpacity>
      </View>

      {patientData && (
        <View style={styles.patientInfo}>
          <Text style={{ color: Colors.white }}>
            Patient ID: {patientData.id}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={24} color={Colors.white} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => null} style={styles.editRow}>
        <Ionicons name="ellipsis-horizontal" size={24} color={Colors.white} />
      </TouchableOpacity>
    </BlurView>
  );
};

export default Profile;
