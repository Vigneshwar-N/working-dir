import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {HomeImage} from '../constants/images/HomeImg';
import UseEffect from '../Hooks/UseEffect';
export default function Search() {
  const data = UseEffect();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (search) {
      const newData = data.filter(
        item =>
          item?.title &&
          item?.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data.slice(0, 7));
    }
  }, [search, data]);
  return (
    <KeyboardAvoidingView
      style={{marginTop: hp('3%'), paddingLeft: '2%', paddingRight: '2%'}}>
      <View>
        <View style={{}}>
          <Image
            resizeMode="contain"
            style={{height: hp('5%'), width: wp('10%'), alignSelf: 'flex-end'}}
            source={HomeImage.cross}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              onChangeText={text => setSearch(text)}
              value={search}
              style={{
                height: hp('10%'),
                width: wp('80%'),
                fontSize: hp('2.5%'),
              }}
              placeholder="Enter here"
            />
            <TouchableOpacity onPress={() => setSearch('')}>
              <Image
                resizeMode="contain"
                style={{
                  height: hp('5%'),
                  width: wp('20%'),

                  alignSelf: 'flex-end',
                }}
                source={HomeImage.cross}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              backgroundColor: '#000000',

              width: wp(95),
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{marginTop: hp('2%')}}>
          <FlatList
            data={filteredData}
            maxToRenderPerBatch={4}
            keyExtractor={item => item?.title}
            renderItem={({item}) => (
              <View>
                <Text
                  style={{
                    fontSize: hp('3.5%'),
                    marginTop: '2%',
                    marginBottom: '2%',
                    width: wp('80%'),
                  }}
                  numberOfLines={1}>
                  {item?.title || 'No Name Available'}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
