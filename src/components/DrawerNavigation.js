import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { Icon } from 'react-native-elements';
import Router from '../router';

export default class DrawerNavigationExample extends Component {

  _renderHeader = () => {
    return <Text>Header</Text>;
  };

  _renderTitle = (text: string, isSelected: bool) => {
    return (
      <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name: string, isSelected: bool) => {
    let extraStyle = {marginTop: 2};
    if (name === 'md-alert') {
      extraStyle = {...extraStyle, marginLeft: -3};
    }
    return (
      <Icon type='ionicon'
        style={[styles.icon, isSelected ? styles.selectedText : null, extraStyle]}
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="right"
        renderHeader={this._renderHeader}
        drawerWidth={300}
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Examples', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-apps', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff',
              },
            }}
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="another"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-alert', isSelected)}>
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 180,
    width: null,
    resizeMode: 'cover',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },
});