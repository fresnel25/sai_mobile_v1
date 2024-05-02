import { StyleSheet } from "react-native";
import Colors from "../../Constants/Color";

export const styles = StyleSheet.create({
  userInfo: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 36,
    color: Colors.white,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: 140,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  actions: {
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderRadius: 16,
    gap: 0,
    margin: 20,
  },
  btn: {
    padding: 14,
    flexDirection: 'row',
    gap: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
  },
  editRow: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
  },
  badge: {
    backgroundColor: Colors.secondary,
    padding: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
  },
  divider: {
    width: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjust opacity or color as needed
    marginHorizontal: 10,
  },
});
