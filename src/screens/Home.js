import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {HomeImage} from '../constants/images/HomeImg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Flatlist from '../components/FlatList';
const Home = () => {
  return (
    <View>
      {/* Header 2 */}
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: '#12ACAC',
              height: hp('27%'),
              marginTop: hp('2%'),
            }}>
            <ImageBackground
              style={{
                paddingLeft: '3%',
                paddingRight: '3%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                flex: 1,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}>
              <View>
                <View
                  style={{
                    paddingHorizontal: hp('1%'),
                    paddingVertical: hp('0.5%'),
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: hp('3%'),
                      backgroundColor: '#FFFFFF',
                      alignSelf: 'flex-start',
                    }}>
                    Shop
                  </Text>

                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: hp('3%'),
                      backgroundColor: '#FFFFFF',
                      alignSelf: 'flex-start',
                    }}>
                    the Latest
                  </Text>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: hp('3%'),
                      backgroundColor: '#FFFFFF',
                      alignSelf: 'flex-start',
                    }}>
                    Trends
                  </Text>
                </View>

                <View style={{flexDirection: 'row', top: '30%'}}>
                  <TouchableOpacity>
                    <Image source={HomeImage.left} />
                  </TouchableOpacity>
                  <View style={{width: wp('1%')}} />
                  <TouchableOpacity>
                    <Image source={HomeImage.right} />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
          {/* Header 2 End*/}
          {/* Main */}
          <View
            style={{
              marginTop: hp('7%'),
              alignItems: 'center',
            }}>
            <View>
              <Flatlist />
            </View>
            <View>
              <TouchableOpacity style={{borderWidth: 1}}>
                <Text
                  style={{
                    paddingVertical: '2%',
                    paddingHorizontal: '2%',
                    width: wp('50%'),
                    textAlign: 'center',
                    color: '#000000',
                    fontWeight: '500',
                  }}>
                  CHECK ALL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Main End */}
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
