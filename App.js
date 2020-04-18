/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';
import Header from 'components/Header';
import Styles from 'styles/GeneralStyles';
import RestaurantRow from './src/components/RestaurantRow';

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
  {name: "Tony's Diner", address: '4101 College St'},
  {name: 'Pasta Central', address: '706 Harper St'},
  {name: 'Burger Builder', address: '4869 Hamilton Dr'},
  {name: 'Pizza Express', address: '1049 Bird St'},
  {name: 'Teriyaki To Go', address: '1885 Tea Berry Lane'},
  {name: 'Maroon Deli', address: '1082 Stuart St'},
  {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr'},
  {name: 'Dumpling House', address: '747 Kelly Dr'},
  {name: 'Hot Chicken', address: '1816 Olive St'},
  {name: "Luna's Tap Room", address: '3256 Spirit Dr'},
  {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr'},
  {name: "Bobby's Burgers", address: '4152 Berkley St'},
  {name: 'Turnpike Diner', address: '4571 Central Ave'},
  {name: 'Bombay Express', address: '65 Queens Lane'},
  {name: 'Coffee Central', address: '3228 Oakwood Circle'},
  {name: "King's Garden", address: '2935 Victoria Ct'},
  {name: 'Salads and More', address: '2454 Preston St'},
];

const App: () => React$Node = () => {
  const [search, setSearch] = React.useState('');

  return (
    <View style={Styles.container}>
      <Header />
      <TextInput
        style={Styles.input}
        placeholder="Live Search"
        onChangeText={(text) => {
          setSearch(text);
        }}
        value={search}
      />

      <FlatList
        data={restaurants.filter(
          (place) =>
            place.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
        )}
        renderItem={({item, index}) => (
          <RestaurantRow place={item} index={index} />
        )}
        keyExtractor={(place) => place.name}
        initialNumToRender={16}
      />
    </View>
  );
};

export default App;
