
import { StyleSheet,Text,View,TouchableHighlight,Image, TouchableOpacity } from "react-native";
import React,{useEffect,useState} from "react";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Item from "./Item";
import { GET_IMG } from "../api/apiService";
import { SwipeListView } from "react-native-swipe-list-view";
// Add this line to your `index.js`
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";

function Favourite({route,navigation}){
  const {coffee} = route.params;

    const [coffeeData,setCoffeeData] = useState([]);

    useEffect(()=>{
        if (route.params && route.params.coffee){
            handleAddCoffee(route.params.coffee);
        }
    },[route.params]);
    const handleAddCoffee=(coffee)=>{
        if(coffee){
            coffee.key=uuidv4();
            setCoffeeData((prevData) => [...prevData,coffee]);
        }
    };
    const handleDeleteCoffee=(index)=>{
        setCoffeeData((prevData)=>prevData.filter((item,i) => i !==index));
};
const handleNext=()=>{
    navigation.navigate("ScreenOrder",{
        //coffee:updatedCoffee
    });
};
const totalSum=coffeeData.reduce(
    (sum,coffeeData)=>sum + coffeeData.total,
    0
);
return(
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.title}>My order</Text>

        </View>
        <View style={styles.content}>
            <SwipeListView 
            data={coffeeData}
            renderItem={(data,rowMap) =>(
                <View key={data.key}>
                  
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
            )} 
            renderHiddenItem={(data,rowMap)=>(
                <TouchableOpacity
                    style={styles.rightAction}
                    onPress={()=>{
                        handleDeleteCoffee(data.index);
                    }}
                    >
                        <View style={styles.BTNrightAction}>
                            <AntDesign name="delete" size={26} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
            )} 
            rightOpenValue={-75}
            keyExtractor={(item)=> item.key}
            />
        </View>
        <View style={styles.bottom}>
            <View style={styles.price}>
                <Text style={styles.totalPrice}>Total Price</Text>
                    <Text style={styles.byn900}>BYN</Text>
            </View>
                    <TouchableOpacity style={{flex:1, }}
                        onPress={()=>{ navigation.navigate("ScreenOrder")
                            handleNext();
                            
                        }}
                        >
                            <View style={styles.button}>
                                <Ionicons name="cart-outline" size={25} color="#FFF"/>
                                <Text style={styles.next}>Next</Text>
                            </View>
                    </TouchableOpacity>
        </View>
    </View>
)
                    }
                    const styles = StyleSheet.create({
                        container: {
                          flex: 1,
                          backgroundColor: "#FFF",
                        },
                        top: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: 20,
                        },
                        title: {
                          fontSize: 24,
                          fontWeight: "bold",
                        },
                        content: {
                          flex: 1,
                          paddingHorizontal: 20,
                        },
                        rightAction: {
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "red",
                            width: 75,
                            height: "100%",
                         
                            top: 0,
                            right: 0,
                          },
                        BTNrightAction: {
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          
                        },
                        bottom: {
                            top:290,
                            flex:1.5,
                          padding: 60,
                          width:380,
                        
                        },
                        price: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 10,
                        },
                        totalPrice: {
                          fontSize: 18,
                          fontWeight: "bold",
                        },
                        byn900: {
                          fontSize: 14,
                          color: "#999",
                        },
                        button: {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "blue",
                          padding: 10,
                          borderRadius: 15,
                        },
                        next: {
                          color: "#FFF",
                          fontSize: 16,
                          marginLeft: 5,
                        },
                      });
                      
export default Favourite;
