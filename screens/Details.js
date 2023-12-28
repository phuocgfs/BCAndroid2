import { StyleSheet,Text,Image,View} from "react-native";
import React,{useState} from "react";
import { AntDesign } from "@expo/vector-icons";
import InputSpinner from "react-native-input-spinner";
import { GET_IMG } from "../api/apiService";
import { TouchableHighlight } from "react-native";


const Details =({route,navigation}) =>{
    const {coffee} = route.params;
    const [total,totalPrice] = useState(coffee.price);
    const [quantity,setQuantity]=useState(1);
    return(
        <View style={styles.container}>
            <View style={styles.contentTop}>
                
                <AntDesign  onPress={()=>navigation.navigate("Home")}
                name="arrowleft" size={24} color="black"/>
                <Text style={styles.title}>Order</Text>
                <AntDesign name="shoppingcart" size={24} color="#001833"/>
            </View>
            <View style={styles.image}>
                <Image
                source={{
                    uri:GET_IMG("products",coffee.photo),
                }}
                style={{
                    width:152,
                    height:121,
                    paddingHorizontal:22,
                    paddingTop:20,
                }}
                resizeMode="contain"
                />
            </View>
            <View style={styles.content1}>
                <Text style={styles.content}>{coffee.title}</Text>
                <InputSpinner 
                max={10}
                min={1}
                step={1}
                skin={"round"}
                color={"#FFF"}
                value={0}
                height={40}
                width={100}
                shadow={false}
                background={"#FFF"}
                showBorder={false}
                onChange={(num)=>{
                    coffee.total=num*coffee.price;
                    totalPrice(coffee.total);
                    setQuantity(num);
                }}
                />
            </View>
            <Text
          style={[styles.color, styles.sizeTypo,styles.makananKhasBandung, styles.ingredientsTypo]}
        >{`Makanan khas Bandung yang cukup sering
dipesan oleh anak muda dengan pola makan
yang cukup tinggi dengan mengutamakan
diet yang sehat dan teratur.`}</Text>

            <View style={styles.content2}></View>
            <View style={styles.content3}></View>
            <View style={styles.content4}></View>
            <View style={styles.content5}></View>
            <View style={styles.content6}></View>
            <View style={styles.contentBottom}>
                <View style={styles.totalAmount}>
                    <Text style={styles.totalAmount2}>Total Amount</Text>
                    <Text style={styles.byn300}>BYN</Text>
                </View>
                <TouchableHighlight
                    style={{marginBottom:20,borderRadius:15}}
                    activeOpacity={0.0}
                    underlayColor="#FFF"
                    onPress={()=>{
                        const updatedCoffee={...coffee,quantity:quantity};
                        navigation.navigate("Favourite",{
                            coffee:updatedCoffee,
                        });
                    }}
                >
                    <View style={styles.rectangleView}>
                        <Text style={styles.next}>Next</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    contentTop:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:30,
    },
    image:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    content1:{
        flex:1,
        marginHorizontal:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    content2:{
        flex:1,
    },
    content3:{
        flex:1,
    },
    content4:{
        flex:1,
    },
    content5:{
        flex:1,
    },
    content6:{
        flex:1,
    },
    contentBottom:{
        flex:1.5,
    },
    title:{
        fontSize:16,
        letterSpacing:0,
        lineHeight:24,
        // fontFamily:"Poppins-Medium",
        fontWeight:"500",
        color:"#001833",
        textAlign:"center",
    },
    content:{
        fontSize:14,
        letterSpacing:0,
        lineHeight:20,
        fontWeight:"500",
        // fontFamily:"DMSans-Medium",
        color:"#001833",
        textAlign:"left",
    },
    rectangleView:{
        borderRadius:30,
        backgroundColor:"#324a59",
        height:46,
        marginHorizontal:30,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
    },
    totalAmount:{
        flex:2,
        flexDirection:"row",
        // justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:30,
    },
    totalAmount2:{
        fontSize:16,
        fontWeight:"500",
        // fontFamily:"Popins-Medium",
        color:"#001833",
        textAlign:"left",
        width:136,
        transform:[
            {
                rotate:"0.14deg",
            },
        ],
    },
    byn300:{
        fontSize:16,
        fontWeight:"600",
        // fontFamily:"Poppins-SemiBoil",
        color:"#001833",
        textAlign:"right",
        width:85,
        height:23,
        transform:[
            {
                rotate:"0.14deg",
            },
        ],

    },
    next:{
        fontSize:14,
        lineHeight:23,
        fontWeight:"600",
        // fontFamily:"Poppins-SemiBold",
        color:"#FFF",
        textAlign:"center",
    },
    sizeTypo: {
        top:300,
        left:30,
        fontWeight: "500",
        textAlign: "left",
        position: "absolute",
      },
});
export default Details;






















