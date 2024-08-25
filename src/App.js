import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Home from './screens/Home';
import {HomeImage} from './constants/images/HomeImg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProductDescription from './screens/ProductDescription';
import Search from './screens/Search';
import WishList from './screens/WishList';

export default function App() {
  const [home, setHome] = useState(true);
  const [wishList, setWishList] = useState(false);
  const [search, setSearch] = useState(false);
  const [productDescription, setProductDescription] = useState(false);
  const productDescriptionFunction = () => {
    setHome(false);
    setSearch(false);
    setWishList(false);
    setProductDescription(true);
  };
  const searchfunction = () => {
    setHome(false);
    setSearch(true);
    setWishList(false);
    setProductDescription(false);
  };
  const homefunction = () => {
    setHome(true);
    setSearch(false);
    setWishList(false);
    setProductDescription(false);
  };
  const wishListFunction = () => {
    setHome(false);
    setSearch(false);
    setWishList(true);
    setProductDescription(false);
  };
  const crossFunction = () => {};
  return (
    <View
      style={{
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#FFFFFF',
      }}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      {/* Header */}
      <View
        style={{
          height: hp('9%'),
          width: wp('100%'),
          justifyContent: 'flex-end',
          //backgroundColor: '#000000',
          // paddingLeft: '3%',
          // paddingRight: '3%',
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
      {/* Header End */}

      {/* Home */}
      <View style={{height: hp('81%')}}>
        {home && <Home />}
        {search && <Search />}
        {wishList && <WishList />}
      </View>
      {/* HomeEnd */}

      {/* Footer */}
      {home && (
        <View
          style={{
            height: hp('10%'),
            width: wp('100%'),
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
      )}
      {/* Footer End */}
    </View>
  );
}
