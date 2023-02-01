import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import HeaderComponent from "./components/Header";
import FlatListComponent from "./components/FlatList";
import { StatusBar } from "expo-status-bar";


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalShowing, setIsModalShowing] = useState(false);

  OnShowModal = () => {
    setIsModalShowing(true);
  }

  OnCloseModal = () => {
    setIsModalShowing(false);
  }

  OnButtonPress = (text) => {
    // This function get the text variable from a child component and updates
    // It in the parent component
    setCourseGoals((currentCourseGoals) =>
      // A better way of updating the useState 
      // Array (instead of using setCourseGoals([...courseGoals, {...}]))
      [...currentCourseGoals,
      {
        text: text,
        id: Math.random().toString()
      }
      ]);
      OnCloseModal();
  }

  deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals=> {
      return currentCourseGoals.filter((goal)=>{
        return goal.id!==id;
      })
    })
  }

  return (
    <>
    <StatusBar backgroundColor="black" style="light"/>
    <View style={styles.container}>
      <View style={{marginTop:20, marginHorizontal: 50, borderRadius: 50, borderWidth: 2}}>
        <Button 
          title="Add New Goal" 
          color="#5e0acc" 
          onPress={OnShowModal} 
        />  
      </View>    
      {
        isModalShowing &&
        <GoalInput 
          OnButtonPress={OnButtonPress} 
          showModal={isModalShowing} 
          cancle={OnCloseModal}
        />
      }  
      <View style={styles.hr} />
      <HeaderComponent />
      <FlatListComponent 
        courseGoals={courseGoals} 
        onDeleteItem={deleteGoalHandler} 
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  hr: {
    width: "100%",
    marginTop: 30,
    marginBottom: 15,
    height: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,   
  },


});
