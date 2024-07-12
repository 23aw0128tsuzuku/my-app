// ProblemGenerator.js
import React, { useState } from 'react';
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
            setAns("○")
        } else {
            setAns("×")
        }
        setTimeout(()=>{

            generateProblem()
        },2000)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text style={{ fontSize: 24, marginBottom: 20 }}>ランダムな計算問題</Text> */}
            <Text style={{ fontSize: 60, top: 70 }}>{problem}</Text>
            {/* <Text style={{ fontSize: 24 }}>答え: {answer}</Text> */}
            <Text style={{ fontSize: 140, color: "#DE2E2E" }}>{ans}</Text>
            {/* <Button title="新しい問題を作成" onPress={generateProblem} /> */}
            <Button onPress={checkAnswer} style={styles.checkAnswerbutton}/>
        </View>
    );
};
const styles= StyleSheet.create({
    checkAnswerbutton:{
        backgroundColor:'#fff',
        width:60,
    }
})


export default ProblemGenerator;
