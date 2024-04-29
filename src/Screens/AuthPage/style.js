import { StyleSheet } from "react-native";
import Colors from "../../Constants/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  formContainer: {
    width: "100%",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: Colors.grey,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  toggleButton: {
    padding: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  termsContainer: {
    padding: 20,
  },
  termsText: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 5,
  },
});
