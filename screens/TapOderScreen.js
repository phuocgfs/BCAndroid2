import React,{useRef} from "react";
import { Text,StyleSheet,View,Button } from "react-native";
import LottieView from "lottie-react-native";

function ScreenOrder({navigation}) {
    const animation = useRef(null);
    return (
        <View style={styles.container}>
            <LottieView autoPlay
            loop={false}
            ref={animation}
            source={require('../Animation.json')}
            style={{flex:1}}
/>
        <Text 
        style={{
            marginTop:290,
            color:"#3386FF",
            fontWeight:"bold",
            fontSize:18,
        }}>
            Mua hàng thành công
        </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
    },
});

export default ScreenOrder;


