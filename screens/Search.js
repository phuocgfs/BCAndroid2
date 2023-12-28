import { View,Text,SafeAreaView,StyleSheet, FlatList, TextInput } from "react-native";
import React,{useEffect,useState} from "react";

const Search =()=>{
    const [filterdData,setfilterdData]=useState([]);
    const [masterData,setmasterData]=useState([]);
    const [search,setsearch]=useState('');

    useEffect(()=>{
        fetchPosts();
        return()=>{

        }
    },[])
    const fetchPosts = () =>{
        const apiURL='https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response)=>response.json())
        .then((responseJson)=>{
             setfilterdData(responseJson);
             setmasterData(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    }
    const searchFilter=(Text)=>{
        if(Text){
            const newData=masterData.filter((item)=>{
                const itemData=item.title ?
                                item.title.toUpperCase()
                                :''.toUpperCase();
                const textData = Text.toUpperCase();
                return itemData.indexOf(textData)>-1;
            });
            setfilterdData(newData);
            setsearch(Text);
        }else{
            setfilterdData(masterData);
            setsearch(Text);
        }
    }

    const ItemView=({item})=>{
        return(
            <Text style={styles.itemStyle}>
                {item.id}{'.'}{item.title.toString()}
            </Text>
        )
    }

    const ItemSeparatorView=()=>{
        return(
            <View 
            style={{
                height:0.5,
                width:'100%',
                backgroundColor:'#c8c8c8',
            }}/>
        )
    }
    return (
       <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <TextInput
            style={styles.TextInputStyle}
            value={search}
            placeholder="search Here"
            underlineColorAndroid="transparent"
            onChangeText={(Text) =>searchFilter(Text)}/>
            <FlatList 
            data={filterdData}
            keyExtractor={(item,index) =>index.toString()} 
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}/>
        </View>
       </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    itemStyle:{
        padding:15,
    },
    TextInputStyle:{
        height:50,
        borderWidth:1,
        paddingLeft:20,
        margin:5,
        borderColor:'#009688',
        backgroundColor:'white'
    }
})
export default Search;