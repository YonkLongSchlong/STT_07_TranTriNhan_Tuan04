import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "lightgrey",
  },
  Text: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  productSection: {
    padding: 20,
    backgroundColor: "white",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  productDescription: {
    flexWrap: "wrap",
    flexShrink: "1",
    flexDirection: "column",
    gap: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#716f78",
    padding: 5,
  },
  saveDiscountContainer: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    marginTop: 30,
  },
  discountContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 30,
    alignItems: "center",
    marginTop: 30,
  },
  enterDiscountSection: {
    backgroundColor: "white",
    marginTop: 30,
    width: "100%",
  },
  enterDiscountContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  previewPriceSection: {
    backgroundColor: "white",
    marginTop: 30,
    width: "100%",
  },
  previewPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  paySection: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 30,
  },
  orderButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    gap: 10,
    alignItems: "center",
    backgroundColor: "red",
    marginHorizontal: 20,
  },
});

export default styles;
