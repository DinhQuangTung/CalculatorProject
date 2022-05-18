import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {
	const operators = ['AC', 'DEL', '+', '-', '*', '/']
	const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
	const [resultText, setResultText] = useState("")
	const [calculationText, setCalculationText] = useState("")
	
	const calculateExpression = () => {
		const expression = calculationText
		
		setResultText(eval(expression))
	}
	
	const onPressBtn = (text) => {
		if (text == '=') {
			const lastChar = calculationText.split('').pop()
			
			if (operators.indexOf(lastChar) > 0) return
			
			return calculateExpression()
		}
		setCalculationText(calculationText + text)
	}
	
	const operate = (operation) => {
		const expression = calculationText
		
		if (calculationText == "") return
		
		switch (operation) {
			case 'AC':
				setCalculationText("")
				break
			case 'DEL':
				let expressionArr = expression.split('')
				expressionArr.pop()
				setCalculationText(expressionArr.join(''))
				
				break
			case '+':
			case '-':
			case '*':
			case '/':
				const lastChar = expression.split('').pop()
				
				if (operators.indexOf(lastChar) > 0) return
				
				setCalculationText(calculationText + operation)
				
				break
		}
	}
	
	let rows = []
	let ops = []
	
	for (let i = 0; i < 4; i++) {
		let row = []
		
		for (let j = 0; j < 3; j++) {
			row.push(
				<TouchableOpacity
					onPress={() => onPressBtn(numbers[i][j])}
					style={styles.btn}>
					<Text style={styles.btnText}>{numbers[i][j]}</Text>
				</TouchableOpacity>
			)
		}
		
		rows.push(
			<View style={styles.row}>
				{row}
			</View>
		)
	}
	
	for (let i = 0; i < 6; i++) {
		ops.push(
			<TouchableOpacity
				onPress={() => operate(operators[i])}
				style={styles.btn}
			>
				<Text style={styles.btnText}>{operators[i]}</Text>
			</TouchableOpacity>
		)
	}
	
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.calculation}>
				<Text style={styles.calculationText}>
					{calculationText}
				</Text>
			</View>
			
			<View style={styles.result}>
				<Text style={styles.resultText}>
					{resultText}
				</Text>
			</View>
			
			<View style={styles.buttons}>
				<View style={styles.numbers}>
					{rows}
				</View>
				
				<View style={styles.operations}>
					{ops}
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calculationText: {
		fontSize: 30,
		color: 'white',
	},
	resultText: {
		fontSize: 30,
		color: 'white',
	},
	btn: {
		flex: 1,
		alignItems: "center",
		alignSelf: "stretch",
		justifyContent: "center",
	},
	btnText: {
		fontSize: 25,
	},
	row: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
	},
	result: {
		flex: 2,
		backgroundColor: 'red',
		justifyContent: "center",
		alignItems: "flex-end"
	},
	calculation: {
		flex: 1,
		backgroundColor: 'green',
		justifyContent: "center",
		alignItems: "flex-end"
	},
	buttons: {
		flex: 7,
		flexDirection: "row",
	},
	numbers: {
		flex: 3,
		backgroundColor: 'yellow',
	},
	operations: {
		flex: 1,
		backgroundColor: 'blue',
		justifyContent: "space-around",
		alignItems: 'center',
	}
});
