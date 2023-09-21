import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Item} from '../data/Data';

const CardDetails = ({data}) => {
  useEffect(() => {}, []);

  return (
    <View>
      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            marginLeft: 20,
            color: '#000',
            fontWeight: '600',
          }}>
          {Item.name}
          {data.player1.id}
        </Text>
        <Text
          style={{
            color: '#000',
          }}>
          {data.player1.score}- {data.player2.score}
        </Text>
        <Text
          style={{
            color: '#000',
          }}>
          {data.player2.id}
        </Text>
      </View>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({});
