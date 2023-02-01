import { FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";
import PropTypes from 'prop-types';

FlatListComponent.propTypes = {
    courseGoals:  PropTypes.array,
    onDeleteItem: PropTypes.func
}

function FlatListComponent({ courseGoals, onDeleteItem }) {

    return (
        <FlatList
            style={styles.goalsContainer}
            data={courseGoals}
            renderItem={(itemData) => {
                return <GoalItem 
                            text = {itemData.item.text} 
                            id = {itemData.item.id}
                            onDeleteItem = { onDeleteItem }
                        />
            }}
            keyExtractor={(item, index) => {
                return item.id + '_' + index;
            }}
            alwaysBounceVertical={false}
        />
    )
}

export default FlatListComponent;

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5
    },

})