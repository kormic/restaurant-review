import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableFeedback,
} from 'react-native';

import Styles from 'styles/GeneralStyles';

export default ({place, index}) => {
  const [showInfo, setShowInfo] = React.useState(false);
  const infoPressed = () => setShowInfo(!showInfo);
  return (
    <View
      key={place.name}
      style={{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}}>
      <View style={Styles.row}>
        <View style={Styles.edges}>
          <Text>{index + 1}</Text>
        </View>
        <View style={Styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={Styles.address}>{place.address}</Text>
        </View>
        <View style={Styles.edges}>
          <TouchableHighlight
            style={Styles.button}
            onPress={infoPressed}
            underlayColor="#5398DC">
            <Text style={Styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
      {showInfo && (
        <View style={Styles.info}>
          <Text>Restaurant Info</Text>
        </View>
      )}
    </View>
  );
};
