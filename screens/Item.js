import { View, Text,Image,StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Item = ({
    imageSource,textContent,textContent1 }) =>{
        return (
            <View style={styles.ItemStyle}>
                <Image 
                source={{
                
                    uri:imageSource,
                }}
                style={{
                    width:114,
                     height:85,
                    paddingHorizontal:22,
                     paddingTop:100,
                   
                }}
                /> 
                 <Text style={styles.vn}>{textContent1}  VNĐ  </Text>
                <Text>{textContent}</Text>
                <AntDesign style={{left:40,top:7}}  name="shoppingcart" size={24} color="#001833"/>
            </View>
        );
    };

    const styles = StyleSheet.create({
        ItemStyle:{
            height:164,
            width:154,
            backgroundColor:"#FFF",
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center",
            marginBottom:20,
           
        },
        vn: {           
        top: 140,
       textAlign: "center",
       position: "absolute",
        },
    });
export default Item;