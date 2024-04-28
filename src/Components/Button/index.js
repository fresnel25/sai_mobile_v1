import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import Colors from "../../Constants/Color";

const Button = ({ title, onPress, loading, variant, style, textColor, }) => {
  const getButtonStyle = () => {
    if (loading) {
      return styles.loadingButton;
    }
    switch (variant) {
      case "danger":
        return styles.dangerButton;
      case "warning":
        return styles.warningButton;
      case "info":
        return styles.infoButton;
      case "link":
        return styles.linkButton;
      case "secondary":
        return styles.secondaryButton;
      default:
        return styles.primaryButton;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const lightenColor = (color, factor) => {
  // Convert hex color to RGB
  const [r, g, b] = [
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
  ];
  // Apply lightening factor to RGB values
  const lightenedR = Math.round(r + (255 - r) * factor);
  const lightenedG = Math.round(g + (255 - g) * factor);
  const lightenedB = Math.round(b + (255 - b) * factor);
  // Convert RGB back to hex color
  return `#${(1 << 24) + (lightenedR << 16) + (lightenedG << 8) + lightenedB}`.slice(1);
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    margin:5,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
  },
  dangerButton: {
    backgroundColor: Colors.red,
  },
  warningButton: {
    backgroundColor: Colors.yellow,
  },
  infoButton: {
    backgroundColor: Colors.blue,
  },
  linkButton: {
    backgroundColor: Colors.white,
  },
  loadingButton: {
    backgroundColor: lightenColor(Colors.primary, 0.8),
    opacity: 0.6,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    padding: 5,
  },
});

export default Button;
