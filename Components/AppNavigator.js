import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './login';
import register from './register';
import main from './main';

const stack = createStackNavigator({
    login: {screen: login},
    register: { screen: register },
    main: { screen: main},
});
 
const AppNavigator = createAppContainer(stack);

export default AppNavigator;