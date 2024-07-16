// ProblemGenerator.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';

// 四則演算の関数定義
const operations = {
    '+': (x, y) => x + y,
};

const ProblemGenerator = (input) => {
    const [problem, setProblem] = useState('');
    const [answer, setAnswer] = useState('');
    const [ans, setAns] = useState('');


    // ランダムな整数を生成する関数
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // ランダムな演算子を取得する関数
    const getRandomOperator = () => {
        const operators = ['+'];
        return operators[Math.floor(Math.random() * operators.length)];
    };

    // 問題を生成してセットする関数
    const generateProblem = () => {
        const num1 = getRandomInt(1, 100);
        const num2 = getRandomInt(1, 100);
        const operator = getRandomOperator();

        const problemText = `${num1} ${operator} ${num2}`;
        const result = operations[operator](num1, num2);

        setProblem(problemText);
        setAnswer(result.toString());
    };

    const checkAnswer = () => {
        if(answer == input.input){
            setAns("○");
            setTimeout(() => setAns(""), 1500);
        } else {
            setAns("×");
            setTimeout(() => setAns(""), 1500);

        }

        setTimeout(()=>{
            generateProblem()
        },2000)
    }

    useEffect(()=>{
        generateProblem();
    },[])

    return (
        <View>
        <View style={{justifyContent: 'center', alignItems: 'center', position: 'relative' , width: '330px' , height: '300px' , top: '70px' , border:'solid' , borderradius: '10px' , borderColor: '#459554', borderRadius: '20px'}}>
            <Text style={{ fontSize: 60, position: 'absolute'}}>{problem}</Text>
            <Text style={{ fontSize: 140, color: "#DE2E2E", height: "150px" , position: 'absolute'}}>{ans}</Text>
        </View>
        <View style={{position:'absolute', color:'#459554'}}>
            <Button onPress={checkAnswer} style={styles.checkAnswerbutton} color='#459554'/>
        </View>
        </View>
        );
    }
const styles= StyleSheet.create({
    checkAnswerbutton:{
    }
})


export default ProblemGenerator;
