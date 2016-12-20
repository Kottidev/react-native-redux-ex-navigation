import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import TabNavigationExample from './components/TabNavigationExample';
import SlidingTabNavigationExample from './components/SlidingTabNavigationExample';
import AlertBarsExample from './components/AlertBarsExample';
import TranslucentBarExample from './components/TranslucentBarExample';
import EventEmitterExample from './components/EventEmitterExample';
import CustomNavigationBarExample from './components/CustomNavigationBarExample';

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export default createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
  tabNavigationExample: () => TabNavigationExample,
  slidingTabNavigationExample: () => SlidingTabNavigationExample,
  alertBarsExample: () => AlertBarsExample,
  translucentBarExample: () => TranslucentBarExample,
  eventEmitterExample: () => EventEmitterExample,
  customNavigationBarExample: () => CustomNavigationBarExample,
}));