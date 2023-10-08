import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./thirdscreen.style";
import Checkbox from "expo-checkbox";

export default function ThirdScreen() {
  const [lowerCase, setLowerCase] = useState(true);
  const [uperCase, setUperCase] = useState(true);
  const [includeNumber, setIncludesNumber] = useState(false);
  const [includeSpecial, setIncludesSpecial] = useState(false);
  const [length, setLength] = useState("1");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    let charset = "";
    let result = " ";
    let passLength = parseInt(length, 10);
    if (includeSpecial) charset += "!@#$%^&*()";
    if (includeNumber) charset += "0123456789";
    if (lowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (uperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < passLength; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.genContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.header}>PASSWORD</Text>
          <Text style={styles.header}>GENERATOR</Text>
        </View>

        <View style={styles.textInputSection}>
          <TextInput
            style={styles.textInput}
            editable={false}
            placeholder={password}
            placeholderTextColor={"white"}
          ></TextInput>
        </View>

        <View style={styles.optionSection}>
          <View style={styles.checkBoxContainer}>
            <Text
              style={{
                width: "70%",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Password length
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "30%",
                padding: 8,
                fontWeight: "bold",
              }}
              value={length}
              onChangeText={setLength}
            ></TextInput>
          </View>

          <View style={styles.checkBoxContainer}>
            <Text style={styles.text}>Include lower case letters</Text>
            <Checkbox
              style={styles.checkbox}
              value={lowerCase}
              onValueChange={setLowerCase}
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <Text style={styles.text}>Include upcase letters</Text>
            <Checkbox
              style={styles.checkbox}
              value={uperCase}
              onValueChange={setUperCase}
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <Text style={styles.text}>Include number</Text>
            <Checkbox
              style={styles.checkbox}
              value={includeNumber}
              onValueChange={setIncludesNumber}
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <Text style={styles.text}>Include special symbol</Text>
            <Checkbox
              style={styles.checkbox}
              value={includeSpecial}
              onValueChange={setIncludesSpecial}
            />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <Pressable style={styles.button} onPress={handleClick}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              GENERATE PASSWORD
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
