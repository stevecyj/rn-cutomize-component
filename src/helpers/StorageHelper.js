import { AsyncStorage } from "react-native";

/**
 *
 *{string}name
 *{bool}isLogin
 *{number}accountInfoStatus 0 is none, 1 is verifying, 2 is error, 3 is verified
 */

export const getMySetting = (key) => AsyncStorage.getItem(key);
export const setMySetting = (key, value) => AsyncStorage.setItem(key, value);
