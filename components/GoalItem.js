import {
    Pressable, 
    StyleSheet, 
    Text, 
    View,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';

GoalItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    onDeleteItem: PropTypes.func
}

function GoalItem (props) { 
    const sendItemId = () => { 
        props.onDeleteItem(props.id)
     }
    return (
        <View style={styles.goalItems}>
            <Pressable 
                //for android only
                android_ripple={styles.rippleEffect}
                onPress={props.onDeleteItem.bind(this, props.id)}
                // for iOS
                style={({pressed})=>{
                    // or use pressData.pressed
                    if(pressed){
                        return styles.iosPressedEffect;
                    }
                }}
            >
                <Text style={styles.goalText}>
                {`\u2023`} {props.text}
                </Text>
            </Pressable>
        </View>
        
    )
 }

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        display: "flex",
        marginTop: 10,
        backgroundColor: "#5e0acc",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ffd"
      },
      goalText: {
        color: "white",
        padding: 10,

      },
      rippleEffect: {
        color: '#003e75',
      },
      iosPressedEffect: {
        color: '#003e75',
        opacity: 0.5

      }
})