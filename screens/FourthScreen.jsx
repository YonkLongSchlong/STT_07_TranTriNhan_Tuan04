import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./fourthscreen.style";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import style from "./firstscreen.style";

export default function FourthScreen() {
  const [dummyPrice, setDummyPrice] = useState(100000);
  const [price, setPrice] = useState(100000);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setPrice(dummyPrice * quantity);
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.productSection}>
          <View style={styles.productContainer}>
            <View style={{ borderWidth: 1, padding: 5, borderRadius: 5 }}>
              <Entypo name="book" size={130} color="green" />
            </View>
            <View style={styles.productDescription}>
              <Text style={styles.Text}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.Text}>Cung cấp bởi Tiki Trading</Text>
              <Text
                style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
              >
                {dummyPrice} đ
              </Text>
              <View style={styles.quantityContainer}>
                <Pressable
                  style={styles.quantityButton}
                  onPress={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {" "}
                    -{" "}
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: "bold", fontSize: "15px" }}>
                  {quantity}
                </Text>
                <Pressable
                  style={styles.quantityButton}
                  onPress={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {" "}
                    +{" "}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.saveDiscountContainer}>
            <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
              Mã giảm giá đã lưu
            </Text>
            <Text
              style={{ fontSize: "15px", fontWeight: "bold", color: "blue" }}
            >
              Xem tại đây
            </Text>
          </View>

          <View style={styles.discountContainer}>
            <Pressable
              style={{
                borderWidth: 1,
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 30,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="money-check" size={24} color="yellow" />
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                Mã giảm giá
              </Text>
            </Pressable>
            <Pressable
              style={{
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: "#609bbf",
              }}
            >
              <Text
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                Áp dụng
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.enterDiscountSection}>
          <View style={styles.enterDiscountContainer}>
            <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
              Bạn có phiều quà tặng Tki/Got it/Urbox?
            </Text>
            <Text
              style={{ fontSize: "15px", fontWeight: "bold", color: "blue" }}
            >
              Nhập tại đây
            </Text>
          </View>
        </View>

        <View style={styles.previewPriceSection}>
          <View style={styles.previewPriceContainer}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              Tạm tính
            </Text>
            <Text
              style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              {price} đ
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.paySection}>
        <View style={{ width: "100%" }}>
          <View style={styles.previewPriceContainer}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              Thành tiền
            </Text>
            <Text
              style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              {price} đ
            </Text>
          </View>
        </View>
        <Pressable style={styles.orderButton}>
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
