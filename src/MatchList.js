import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CardDetails from './component/CardDetails';
import {Item} from './data/Data';
import {matchListData} from './data/MatchData';

const MatchList = props => {
  const [data, setData] = useState(props.route.params);
  const [userMatchList, setUserMatchList] = useState([]);

  useEffect(() => {
    const firstArray = matchListData,
      result = firstArray.filter(
        o => o.player1.id === data.id || o.player2.id === data.id,
      );
    console.log(result[0]);

    let arr = [];

    for (let i = 0; i < Item.length; i++) {
      if (result[i]?.player1.id) {
        console.log('result', result[i].player1.id, Item.id);
      }
    }

    setUserMatchList(result);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{marginLeft: 10, flexDirection: 'row'}}
          onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={25} color="blue" />
          <Text style={{color: 'blue', fontSize: 15}}>Back</Text>
        </TouchableOpacity>

        <View style={{width: '70%', alignItems: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: '700', color: '#000'}}>
            {data.name}
          </Text>
        </View>
      </View>

      <View style={{paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            color: '#000',
            marginLeft: 10,
          }}>
          Matches
        </Text>
      </View>

      <View style={{marginBottom: 15}}>
        <ScrollView>
          {userMatchList.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <CardDetails data={item} />
              </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MatchList;

const styles = StyleSheet.create({});
