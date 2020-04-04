import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs" 
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";

const TabNavigation = createBottomTabNavigator({
    Movie: MoviesScreen,
    TV: TVScreen,
    Search: SearchScreen
});

export default createAppContainer(TabNavigation); 