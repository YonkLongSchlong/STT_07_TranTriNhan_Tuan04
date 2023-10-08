import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  genContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#5d4d99",
  },
  headerSection: {},
  header: {
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    color: "white",
  },
  textInputSection: {
    marginTop: 20,
    width: "80%",
  },
  textInput: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#272140",
  },
  optionSection: {
    marginTop: 50,
    width: "80%",
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  checkbox: {
    padding: 12,
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  buttonSection: {
    marginTop: 20,
    width: "70%",
  },

  button: {
    backgroundColor: "#4b4275",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default styles;
