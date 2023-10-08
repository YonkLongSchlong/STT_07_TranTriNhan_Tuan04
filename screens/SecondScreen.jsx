import { View, Text, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import style from "./secondscreen.style";
import { FontAwesome } from "@expo/vector-icons";

export default function SecondScreen() {
  const [string, setString] = useState("Độ hài lòng");
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    if (star == 1) {
      setString("Rất tệ");
    }
    if (star == 2) {
      setString("Tệ");
    }
    if (star == 3) {
      setString("Ổn");
    }
    if (star == 4) {
      setString("Hài lòng");
    }
    if (star == 5) {
      setString("Cực kì hài lòng");
    }
  }, [star]);

  const handleClick = () => {
    console.log(star, review);
  };

  return (
    <View style={style.container}>
      <View style={style.productSection}>
        <View>
          <MaterialCommunityIcons
            name="usb-flash-drive"
            size={80}
            color="black"
          />
        </View>
        <View style={style.productDescription}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            USB Bluetooth Musix Receiver HJX-001-Bien loa thuong thanh loa
            bluetooth
          </Text>
        </View>
      </View>

      <View style={style.ratingSection}>
        <View>
          <Text style={style.ratingText}>{string}</Text>
        </View>
        <View style={style.starSection}>
          <Pressable
            onPress={() => {
              setStar(1);
            }}
          >
            <FontAwesome
              name={star >= 1 ? "star" : "star-o"}
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setStar(2);
            }}
          >
            <FontAwesome
              name={star >= 2 ? "star" : "star-o"}
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setStar(3);
            }}
          >
            <FontAwesome
              name={star >= 3 ? "star" : "star-o"}
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setStar(4);
            }}
          >
            <FontAwesome
              name={star >= 4 ? "star" : "star-o"}
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setStar(5);
            }}
          >
            <FontAwesome
              name={star >= 5 ? "star" : "star-o"}
              size={34}
              color="black"
            />
          </Pressable>
        </View>
      </View>

      <View style={style.addPictureSection}>
        <Pressable style={style.addPictureContainer}>
          <View>
            <FontAwesome name="camera" size={24} color="black" />
          </View>
          <Text>Thêm hình ảnh</Text>
        </Pressable>
      </View>

      <View style={style.textInputContainer}>
        <TextInput
          style={style.textInput}
          multiline={true}
          rows={8}
          placeholder="Hãy chỉ về những điều mà bạn thích về sản phẩm"
          value={review}
          onChangeText={setReview}
        />
      </View>

      <View style={style.buttonSection}>
        <Pressable style={style.button} onPress={handleClick}>
          <Text style={{ fontWeight: "bold", color: "white" }}>GỬI</Text>
        </Pressable>
      </View>
    </View>
  );
}
