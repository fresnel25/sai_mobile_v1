import * as SecureStore from 'expo-secure-store';

let token ;
// Define a function to set or delete the token asynchronously
export const setToken = async (newToken) => {
    try {
        if (newToken !== null) {
            await SecureStore.setItemAsync("token", newToken);
        } else {
            // Delete the token if it's null
            await SecureStore.deleteItemAsync("token");
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error setting/deleting token:", error);
    }
};

export const getToken = async () => {
    try {
        if(token !== undefined) return token;
        // Retrieve the token from SecureStore
        token = await SecureStore.getItemAsync("token");
        return token;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error retrieving token:", error);
        return null;
    }
};
