import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HomeImage} from '../constants/images/HomeImg';
export default function Header2() {
  return (
    <View
      style={{
        backgroundColor: '#12ACAC',
        height: hp('27%'),
        marginTop: hp('2%'),
      }}>
      <ImageBackground
        style={{
          paddingRight: '2%',
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
  );
}
