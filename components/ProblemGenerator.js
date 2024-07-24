// ProblemGenerator.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';


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
            setAns("◯");
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
            <View style={{justifyContent: 'center', alignItems: 'center', position: 'relative' , width:'100%',height: '250' , top: '50%' , border:'solid' , borderColor: '#459554', borderRadius: '40px' , margintop: '20%',}}>
                <Text style={{ fontSize: 70, position: 'absolute',fontFamily: "RobotoCondensed_700Bold",top:'20%'}}>{problem}</Text>
                <Text style={{ fontSize: 170, color: "#DE2E2E", position: 'absolute',fontFamily: "RobotoCondensed_700Bold"}}>{ans}</Text>
            </View>
            <Pressable onPress={checkAnswer} style={styles.checkAnswerbutton}>
              <Image source={require("@/assets/images/send.png")} alt="" style={{width:"80%" ,height:"80%"}} />
          </Pressable>
        </View>
        );
    }
const styles= StyleSheet.create({
    checkAnswerbutton:{
    position: 'absolute',
    top: 350, 
    width: 70,
    height: 70,
    right :15,
    }  
})


export default ProblemGenerator;
