import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth7424Navigator from '../features/EmailAuth7424/navigator';
import CalendarView7423Navigator from '../features/CalendarView7423/navigator';
import BlankScreen47422Navigator from '../features/BlankScreen47422/navigator';
import BlankScreen57421Navigator from '../features/BlankScreen57421/navigator';
import BlankScreen47420Navigator from '../features/BlankScreen47420/navigator';
import CalendarView7419Navigator from '../features/CalendarView7419/navigator';
import EmailAuth7418Navigator from '../features/EmailAuth7418/navigator';
import Messaging7417Navigator from '../features/Messaging7417/navigator';
import Messaging7416Navigator from '../features/Messaging7416/navigator';
import EmailAuth7415Navigator from '../features/EmailAuth7415/navigator';
import CalendarView7414Navigator from '../features/CalendarView7414/navigator';
import BlankScreen47413Navigator from '../features/BlankScreen47413/navigator';
import BlankScreen57412Navigator from '../features/BlankScreen57412/navigator';
import BlankScreen47411Navigator from '../features/BlankScreen47411/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth7424: { screen: EmailAuth7424Navigator },
CalendarView7423: { screen: CalendarView7423Navigator },
BlankScreen47422: { screen: BlankScreen47422Navigator },
BlankScreen57421: { screen: BlankScreen57421Navigator },
BlankScreen47420: { screen: BlankScreen47420Navigator },
CalendarView7419: { screen: CalendarView7419Navigator },
EmailAuth7418: { screen: EmailAuth7418Navigator },
Messaging7417: { screen: Messaging7417Navigator },
Messaging7416: { screen: Messaging7416Navigator },
EmailAuth7415: { screen: EmailAuth7415Navigator },
CalendarView7414: { screen: CalendarView7414Navigator },
BlankScreen47413: { screen: BlankScreen47413Navigator },
BlankScreen57412: { screen: BlankScreen57412Navigator },
BlankScreen47411: { screen: BlankScreen47411Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
