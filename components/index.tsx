import React, { useState } from 'react';
import { View, Button, StyleSheet,Text, Pressable, Image, } from 'react-native';
import ProblemGenerator from './ProblemGenerator';
import { useFonts, RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';


function App() {
  const [input, setInput] = useState("0"); // 現在の入力値
  const [result, setResult] = useState(0); // 計算結果

  let [fontsLoaded] = useFonts({
    RobotoCondensed_700Bold
  })

  if(!fontsLoaded){
    return null;
  }

  // 数字のボタンがクリックされた時の処理
  const handleNumberClick = (value:any) => {
    setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
  };

  const handleOperatorClick = (parameter:any) => {
    if (input !== "0") {
      setInput((prevInput) => prevInput + parameter);
    }
  };

  // バックスペースのボタンがクリックされた時の処理
  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, prevInput.length - 1));
  };


  return (
    <View style={styles.mainContainer}>
      <View style={styles.problemcontainer}>
      </View>
        <ProblemGenerator input={input} />
          <View style={styles.formcontainer}>
          <Text style={styles.textcontainer}>{input}</Text>
          </View>
      <View style={styles.squarecontainer}>
        <View style={styles.container}>
          <Button title='1' onPress={() => handleNumberClick('1')} color='#459554'/>
          <Button title='2' onPress={() => handleNumberClick('2')} color='#459554'/>
          <Button title='3' onPress={() => handleNumberClick('3')} color='#459554'/>
        </View>
        <View style={styles.container}>
          <Button title='4' onPress={() => handleNumberClick('4')} color='#459554'/>
          <Button title='5' onPress={() => handleNumberClick('5')} color='#459554'/>
          <Button title='6' onPress={() => handleNumberClick('6')} color='#459554'/>
        </View>
        <View style={styles.container}>
          <Button title='7' onPress={() => handleNumberClick('7')} color='#459554'/>
          <Button title='8' onPress={() => handleNumberClick('8')} color='#459554'/>
          <Button title='9' onPress={() => handleNumberClick('9')} color='#459554'/>
        </View>
        <View style={styles.container}>
          <Button title='      ' onPress={() => handleNumberClick('')} color='#459554'/>
          <Button title='0' onPress={() => handleNumberClick('0')} color='#459554'/>
          <Pressable  onPress={handleBackspace}>
              <Image source={require("@/assets/images/backspeace.png")} alt="" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "#FFF",
  },
  problemcontainer:{
    width: '50%',
    height:'9%',
    backgroundColor:'#459554',
    top:75,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  formcontainer: {
    height: 50,
    top: 410,
    width: '70%',
    left:20,
    borderColor: "#459554",
    borderWidth: 2,
    borderRadius: 15,
    position:'absolute',
  },
  textcontainer:{
    fontSize:20,
    left:10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
    top: 10,
    alignItems: 'center',
    fontFamily:"RobotoCondensed_700Bold",
  },
  numbers: {
    fontFamily:"RobotoCondensed_700Bold",
  },
  squarecontainer:{
    width:'100%',
    height:'80%',
    top:180,
    backgroundColor:'#459554',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});

export default App;
