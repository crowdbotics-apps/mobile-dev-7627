import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging8962Navigator from '../features/Messaging8962/navigator';
import EmailAuth8961Navigator from '../features/EmailAuth8961/navigator';
import CalendarView8960Navigator from '../features/CalendarView8960/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging8962: { screen: Messaging8962Navigator },
EmailAuth8961: { screen: EmailAuth8961Navigator },
CalendarView8960: { screen: CalendarView8960Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
