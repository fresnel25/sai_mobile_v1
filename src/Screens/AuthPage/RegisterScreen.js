
import { SafeAreaView,StyleSheet, Text } from 'react-native';


const RegisterScreen =() => {
    return (
       <SafeAreaView>
            <Text style={styles.test}>
                register screen
            </Text>
       </SafeAreaView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    test: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})