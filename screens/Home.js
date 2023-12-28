import { View,Text, ScrollView, StatusBar, Image, TouchableOpacity, TextInput,StyleSheet,TouchableHighlight, SafeAreaView, Dimensions } from "react-native";
import React,{useState,useEffect} from "react";
import {COLORS} from "../database/items";
import Material from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GET_ALL,GET_IMG } from "../api/apiService";
import Item from "./Item";


// slider
const images=[
  'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg',
  'https://media.istockphoto.com/id/1150368715/vi/anh/v%E1%BB%8Bt-ch%C3%A2n-confit.jpg?s=2048x2048&w=is&k=20&c=rao9t_Que1iDM7cwCQcXg_mdK-NU0gQakeRE0V69vt0='

]
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;

const Home =({navigation})=>{
//silder
const[imgActive,setimgActive]=useState(0);
onchange=(nativeEvent)=>{
  if(nativeEvent){
    const slider=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
    if(slider !=imgActive){
      setimgActive(slider);
    }
  }
}



  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setCoffeeData(responseData.content);
        } else {
          console.error("Data received from the API is not in a supported format");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
    return (
      <ScrollView>
        <View 
        Style={{
            width:'100%',
            height:'100%',
            backgroundColor:COLORS.white,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:COLORS.white,
                    position:'relative',
                }}>
                    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                    <Image source={require('../database/images/background.png')}
                    style={{position:'absolute',top: 0, left:-100}}
                     />
                     <View
                      style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        padding:20,
                      }}>
                        <TouchableOpacity
                        style={{
                            width:40,
                            height:40,
                        }}>
                            <Image source={require('../database/images/long.jpg')}
                            style={{
                                width:'100%',
                                height:'100%',
                                resizeMode:'contain',
                                borderRadius:500,
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={()=>navigation.navigate("Details")}>
                            <Material name="segment"
                            style={{
                                fontSize:28,
                                color:COLORS.black,
                            }}/>
                        </TouchableOpacity>
                     </View>
                     <View style={{padding:20}}>
                            <Text style={{
                                fontSize:16,
                                color:COLORS.black,
                                opacity:0.5,
                                fontWeight:'400',
                            }}>
                                Xin Chào!!
                            </Text>
                            <Text style={{
                                fontSize:20,
                                color:COLORS.black,
                                fontWeight:'550',
                                letterSpacing:2,
                            }}>
                                Hân hạnh được tiếp đón 
                            </Text>
                     </View>
                     <View style={{
                        paddingHorizontal:20,
                        paddingVertical:10,
                        flexDirection:'row',
                        alignItems:'center',
                     }}>
                        <Ionicons name="search"
                        style={{
                            fontSize:20,
                            color:COLORS.black,
                            opacity:0.8
                        }}/>
                        <TextInput 
                        placeholder="Search..."
                        style={{
                            color:COLORS.black,
                            fontSize:16,
                            paddingVertical:5,
                            borderBottomWidth:1,
                            borderBottomColor:COLORS.black + 20,
                            width:'90%',
                            marginLeft:10,
                            letterSpacing:1,
                        }}/>
                     </View>
           {/* Silder */}
          <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
              <ScrollView onScroll={({nativeEvent}) =>onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
                >
                  {
                    images.map((e,index)=>
                    <Image
                    key={e}
                    resizeMode='stretch'
                    style={styles.wrap}
                    source={{uri:e}}
                    autoPlay={true}
                    loop={false}
                    />
                    )
                  }
              </ScrollView>
                  <View style={styles.wrapDot}>
                    {
                      images.map((e,index)=>
                      <Text
                      key={e}
                      style={imgActive == index ? styles.dotActive:styles.dot}
                      >●</Text>
                      )
                    }
                  </View>
            </View>
          </SafeAreaView>


                </View>

            </ScrollView>

            <View>
  <ScrollView style={{ marginBottom: 10 }}>
    <Text style={{
      left:160,
      fontSize:20
    }}>Món ăn</Text>
    <View style={styles.contentContainer}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.columnContainer}>
          {coffeeData.map((coffee, index) => (
            <TouchableHighlight
              key={coffee.id}
              style={{marginBottom:5,borderRadius:15}}
              activeOpacity={0.0}
              underlayColor="#FFF"
              onPress={()=>{
                const updatedCoffee={...coffee,total:coffee.price};
                navigation.navigate("Details",{
                  coffee:updatedCoffee,
                });
              }}
            >
            <View style={styles.column} key={index}>
              <Item
                imageSource={GET_IMG("products", coffee.photo)}
                textContent={coffee.title}
                textContent1={coffee.price}
              />
            </View>
            </TouchableHighlight>
          ))}
        </View>
      )}
    </View>
  </ScrollView>
</View>

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
    },
    columnContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      width: '60%', // Chia thành hai cột
      padding: 17,
    },
    container:{
      flex:1, //silder
    },
    wrap:{
      width:WIDTH,
      height:HEIGHT*0.25
    },
    wrapDot:{
      position:'absolute',
      bottom:0,
      flexDirection:'row',
      alignSelf:'center'
    },
    dotActive:{
      margin:3,
      color:'black',
    },
    dot:{
      margin:3,
      color:'white'
    }
  });
export default Home;