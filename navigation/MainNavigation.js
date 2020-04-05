import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config"

const MainNavigation = createStackNavigator({
    Tabs: {
        screen: TabNavigation,
        navigationOptions: {
            header: null,
            headerBackTitle: null
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            ...headerStyles,
            headerBackTitle: null
        }
    }      
},
{
    // mode: "card",
    headerMode: "screen",
    headerBackTitleVisible: false
}
);

export default createAppContainer(MainNavigation)