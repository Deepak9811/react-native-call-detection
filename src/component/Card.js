import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Card = ({image, name, id, navigation}) => {
  console.log(image);
  const [data, setData] = useState({name: name, id: id});

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('score', data)}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      }}>
      <Image source={{uri: `${image}`}} style={styles.logo} />
      <View style={{marginTop: 15, flexDirection: 'row'}}>
        <Text
          style={{
            marginLeft: 20,
            width: '80%',
            color: '#000',
            fontWeight: '600',
            fontSize: 16,
          }}>
          {name}
        </Text>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '700',
            color: '#000',
            fontSize: 16,
          }}>
          {id}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
