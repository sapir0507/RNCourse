import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";
import PropTypes from 'prop-types';


GoalInput.propTypes = {
    OnButtonPress: PropTypes.func,
    showModal: PropTypes.bool
}

function GoalInput(props) {
    const [newGoal, setNewGoal] = useState("");

    OnInputTextChange = (enteredText) => {
        setNewGoal(enteredText);
    };

    AddGoalHandler = () => {
        props.OnButtonPress(newGoal);
        setNewGoal('');
    }

    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.goalInputContainer}>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/goal.png')} />
                    <TextInput
                        placeholder="Enter Goals..."
                        style={styles.inputTextContainer}
                        // one way binding
                        onChangeText={OnInputTextChange}
                        // add two way binding
                        value={newGoal}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            color="#5e0acc"
                            onPress={AddGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancle"
                            color= "#ef3d41"
                            touchSoundDisabled={false}
                            onPress={props.cancle} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    goalInputContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#311b6b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: -50,
        paddingHorizontal: 20,        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    },
    inputTextContainer: {
        marginHorizontal: 7,
        padding: 10,
        width: "80%",
        backgroundColor: '#fff',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#120438",
        borderWidth: 1,
        borderRadius: 6
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 150,
        marginHorizontal: 15
    },
    image: {
        width: 60,
        height: 60,
        marginVertical: 20,
        marginHorizontal: 5,
    }
})