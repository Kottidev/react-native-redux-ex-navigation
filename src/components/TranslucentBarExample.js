import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import { Icon } from 'react-native-elements';

function getColor(isSelected) {
  return isSelected ? '#fff' : '#000';
}

export default class TranslucentBarExample extends Component {
  static route = {
    navigationBar: {
      title: 'Translucent Bars',
      backgroundColor: 'rgba(255,255,255,0.5)',
      tintColor: '#222',
      translucent: true,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <TabNavigation
          translucent
          id="translucent-tabs"
          navigatorUID="translucent-tabs"
          initialTab="first">
          <TabNavigationItem
            id="first"
            title="First"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Icon type='ionicon' name="ios-boat-outline" size={24} color={getColor(isSelected)} />}>
            <Text>Nav 1</Text>
          </TabNavigationItem>
          <TabNavigationItem
            id="second"
            title="Second"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Icon type='ionicon' name="ios-bulb-outline" size={24} color={getColor(isSelected)} />}>
            <Text>Nav 2</Text>
          </TabNavigationItem>
          <TabNavigationItem
            id="third"
            title="Third"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Icon type='ionicon' name="ios-bowtie-outline" size={24} color={getColor(isSelected)} />}>
            <Text>Nav 3</Text>
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }

  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{color: getColor(isSelected)}}>
        {title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },

  selectedTab: {
    backgroundColor: 'rgba(0,0,255, 0.4)',
  },

});
