import {View, TouchableOpacity, Image} from 'react-native';

import {HomeImage} from '../constants/images/HomeImg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Footer() {
  return (
    <View
      style={{
        height: hp('10%'),
        backgroundColor: '#F1F1F1',
        borderRadius: 50,

        marginBottom: hp('0%'),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          homefunction();
        }}>
        <Image
          resizeMode="contain"
          style={{height: hp('5%'), width: wp('7%')}}
          source={HomeImage.home}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          searchfunction();
        }}>
        <Image
          resizeMode="contain"
          style={{height: hp('5%'), width: wp('7%')}}
          source={HomeImage.search}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          wishListFunction();
        }}>
        <Image
          resizeMode="contain"
          style={{height: hp('5%'), width: wp('7%')}}
          source={HomeImage.heart}
        />
      </TouchableOpacity>
    </View>
  );
}
