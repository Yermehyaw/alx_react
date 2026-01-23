import React from "react";
import { View, TextInput } from "react-native";

const App = () => {

  return (
    <View style={{ flex: 2, justifyContent: 'center' }}>
      <TextInput
        placeholder={"Where do you want to go?"}
        onChangeText={(newText) => alert(`Ewooo! You enetered ${newText}`)}
        style={{
          borderWidth: 1,
          height: 20,
          width: 50,
        }}
      />
    </View>
  )
}

export default App;