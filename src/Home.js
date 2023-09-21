import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './component/Card';
import {Item} from './data/Data';

const Home = ({navigation}) => {
  const [data, setData] = useState(Item);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
        }}>
        <Text style={{fontSize: 15, fontWeight: '700', color: '#000'}}>
          Star Wars Blaster Tournament
        </Text>
      </View>

      <View style={{paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            color: '#000',
            marginLeft: 10,
          }}>
          Points Table
        </Text>
      </View>

      <View style={{marginBottom: 15}}>
        <ScrollView>
          {data.map((item, i) => {
            {
              /* console.log(item); */
            }
            return (
              <React.Fragment key={i}>
                <Card
                  image={item.icon}
                  name={item.name}
                  id={item.id}
                  navigation={navigation}
                />
              </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
