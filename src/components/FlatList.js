import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import UseEffect from '../Hooks/UseEffect';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Flatlist = () => {
  const Storage = UseEffect();
  const limitedStorage = Storage.slice(0, 4);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = imageUri => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        scrollEnabled={false}
        data={limitedStorage}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              marginBottom: hp('2%'),
              marginHorizontal: '2%',
              width: wp('45%'),
            }}>
            <TouchableOpacity
              onLongPress={() => openModal(item?.image)}
              style={{width: wp('45%')}}>
              <Image
                resizeMode="contain"
                style={{
                  height: hp('29.7%'),
                  width: wp('45%'),
                }}
                source={{uri: item?.image}}
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: hp('1%'),
              }}>
              <Text style={{fontSize: hp('3%'), color: '#000000'}}>Hello</Text>
              <View style={{height: hp('0.5%')}} />
              <Text style={{fontSize: hp('2%'), color: '#000000'}}>
                SHOP NOW
              </Text>
              <View style={{height: hp('0.4%')}} />
              <View
                style={{
                  height: hp('0.3%'),
                  borderWidth: 1,
                  width: wp('35%'),
                  backgroundColor: '#000000',
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={{marginTop: hp('5%')}}>
            <Text
              style={{
                paddingTop: '2.5%',
                paddingBottom: '2.5%',
                borderWidth: 1,
                paddingLeft: '2.5%',
                paddingRight: '2.5%',
                fontSize: hp('2%'),
                textAlign: 'center',
              }}>
              CHECK ALL PRODUCTS
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal for displaying the image */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onLongPress={closeModal}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}>
            <Image
              style={{
                width: wp('90%'),
                height: hp('70%'),
                resizeMode: 'contain',
              }}
              source={{uri: selectedImage}}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Flatlist;
