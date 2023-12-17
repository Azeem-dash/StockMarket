/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const Home = ({navigation}) => {
  const [News, setNews] = useState();
  const [loading, setLoading] = useState(true);
  // Dummy Data

  React.useEffect(() => {}, []);
  React.useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        'https://eodhistoricaldata.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=10',
      );
      const data = await response.json();
      setLoading(false);
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '15%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>Top News</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Today's Share */}
      {/* <View style={{height: '50%', backgroundColor: COLORS.lightGray}}> */}
      <ScrollView>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding,
            }}>
            <View style={{marginTop: 5}}>
              {News?.length > 0 &&
                News?.map((item, index) => {
                  return (
                    <View style={{margin: 10}}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                          // console.log(item);
                          navigation.navigate('NewsDetial', {item});
                        }}>
                        <Text style={{color: COLORS.black, ...FONTS.h3}}>
                          {item?.title}
                        </Text>
                        <Text style={{color: COLORS.secondary, ...FONTS.h5}}>
                          {item?.content.slice(0, 100)}...
                        </Text>
                        <Text style={{color: COLORS.black, ...FONTS.h5}}>
                          {item?.date.slice(0, 10)}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
