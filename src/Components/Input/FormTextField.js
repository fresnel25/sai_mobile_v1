import { View, Text, TextInput } from "react-native";
import React from "react";
import Colors from "../../Constants/Color";

export default function FormTextField({ label, errors= [], ...rest }) {
  return (
    <View>
      {label && <Text style={{ fontWeight: 500 }}>{label}</Text>}
      <TextInput
        style={{
          width: "100%",
          height: 48,
          borderColor: Colors.black,
          borderWidth: 1,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
        autoCapitalize="none"
        {...rest}
      />
      {errors.map((err)=>{
        return <Text key={err} style={{color:Colors.grey, marginTop:2}}>{err}</Text>
      })}
    </View>
  );
}
