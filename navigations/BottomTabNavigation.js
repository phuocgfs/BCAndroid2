import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {MaterialCommunityIcons,Ionicons} from "@expo/vector-icons";
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import {COLORS} from "../constants";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Favourite from "../screens/Favourite";
import Profile from "../screens/Profile";


const Tab=createBottomTabNavigator()

const screenOptions={
    tabBarShowLabel:false,
    headerShown:false,
    tabBarHideOnKeyboard:true,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        background:COLORS.white,
    }
}
const BottomTabNavigation = ()=>{
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({ focused}) =>{
                        return(
                            <MaterialCommunityIcons
                                name={focused ? "home":"home"}
                                size={24}
                                color={COLORS.black}
                                />
                        )
                    }
                }}
            />
             <Tab.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon:({ focused}) =>{
                        return(
                            <Ionicons
                                name="search-sharp"
                                size={24}
                                color={COLORS.black}
                                />
                        )
                    }
                }}
            />
            <Tab.Screen 
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon:({ focused}) =>{
                        return(
                            <Ionicons
                                name={focused ? "cart":"cart"}
                                size={24}
                                color={COLORS.black}
                                />
                        )
                    }
                }}
            />
             <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:({ focused}) =>{
                        return(
                            <Ionicons
                                name={focused ? "person":"person"}
                                size={24}
                                color={COLORS.black}
                                />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation;