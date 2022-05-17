import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const NumberButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text>{props.number}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: 50,
        // height: 50,
    },
    btn: {
        width: 100,
        height: 60,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#017df9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#017df9',
    }
})

export default NumberButton
