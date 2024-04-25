import * as SecureStore from 'expo-secure-store';

let token = null;

export const setToken = async (newToken) => {
    try {
        if (newToken !== null) {
            await SecureStore.setItemAsync("token", newToken);
            token = newToken;
        } else {
            await SecureStore.deleteItemAsync("token");
        }
    } catch (error) {
        console.error("Error setting/deleting token:", error);
    }
};

export const getToken = async () => {
    try {
        if(token !== null) return token;
        token = await SecureStore.getItemAsync("token");
        return token;
    } catch (error) {
        console.error("Error retrieving token:", error);
        return null;
    }
};
