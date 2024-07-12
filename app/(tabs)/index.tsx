import React, { useState } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import ProblemGenerator from '../../components/ProblemGenerator';


function App() {
  const [input, setInput] = useState("0"); // 現在の入力値
  const [result, setResult] = useState(0); // 計算結果

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
      <View>
      <ProblemGenerator input={input} />
        <View style={styles.formcontainer}>
        <Text>{input}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Button title='1' onPress={() => handleNumberClick('1')} />
        <Button title='2' onPress={() => handleNumberClick('2')} />
        <Button title='3' onPress={() => handleNumberClick('3')} />
      </View>
      <View style={styles.container}>
        <Button title='4' onPress={() => handleNumberClick('4')} />
        <Button title='5' onPress={() => handleNumberClick('5')} />
        <Button title='6' onPress={() => handleNumberClick('6')} />
      </View>
      <View style={styles.container}>
        <Button title='7' onPress={() => handleNumberClick('7')} />
        <Button title='8' onPress={() => handleNumberClick('8')} />
        <Button title='9' onPress={() => handleNumberClick('9')} />
      </View>
      <View style={styles.container}>
        <Button title='0' onPress={() => handleNumberClick('0')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    alignItems: 'center',
  },
  formcontainer: {
    height: 40,
    top: 430,
    width: 250,
    borderColor: "#459554",
    borderWidth: 2,
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
    top: 430,
    right: 0,
    left: 0,
    width: '60%',
    alignItems: 'center',
  },
});

export default App;
