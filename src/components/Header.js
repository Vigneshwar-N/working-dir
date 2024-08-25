import {View, Text, TouchableOpacity, Image} from 'react-native';
import {HomeImage} from '../constants/images/HomeImg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Header() {
  return (
    <View
      style={{
       
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>
          <TouchableOpacity>
            <Image source={HomeImage.menu} />
          </TouchableOpacity>
          <View style={{width: wp('3%')}} />
          <Text style={{color: '#000000', fontSize: hp('3%')}}>ShopGrid</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <Image source={HomeImage.profile} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
