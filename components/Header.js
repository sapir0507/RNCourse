import { StyleSheet, Text, View } from "react-native";
function HeaderComponent() {
    return (
    <View style={{ width: "100%", color: "white" }}>
        <Text style={styles.HeaderTextStyle}>
        Goals
        </Text>
    </View>
  )
}

export default HeaderComponent;

const styles = StyleSheet.create({
    HeaderTextStyle: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "700",
        color: 'white'
    }
})