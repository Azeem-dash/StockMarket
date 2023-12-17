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
  // Dummy Data

  React.useEffect(() => {}, []);
  React.useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        'https://eodhistoricaldata.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=3',
      );
      const data = await response.json();
      // console.log(data);
      setNews(data);
    };
    fetchNews();
  }, []);
  // Render

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
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
              <Text style={{color: COLORS.white, ...FONTS.h2}}>
                Latest News
              </Text>
            </View>

            <ScrollView style={{marginTop: SIZES.base, marginBottom: 30}}>
              {News?.length > 0 &&
                News?.map((item, index) => {
                  return (
                    <View style={{margin: 5}}>
                      <>
                        <Text style={{color: COLORS.black, ...FONTS.h5}}>
                          {item?.title}
                        </Text>
                      </>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>
      </View>
      <>
        {/* Today's Share */}
        <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
          <View
            style={{
              flex: 1,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                  Invest in startups with ease.
                </Text>
              </View>

              <View
                style={{
                  // flexDirection: 'row',
                  height: '88%',
                  marginTop: SIZES.base,
                }}>
                <View style={{flex: 1.3}}>
                  <TouchableOpacity activeOpacity={1}>
                    <Image
                      source={images.graph}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Added Friend */}
        <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.lightGray,
              padding: 10,
            }}>
            <View
              style={{
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.padding,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={images.good}
                  resizeMode="cover"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <Text style={{color: COLORS.black, ...FONTS.h3}}>
                  Smart Solutions for the automated world
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  source={images.good}
                  resizeMode="cover"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <Text style={{color: COLORS.black, ...FONTS.h3}}>
                  Do great things every day
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={images.good}
                  resizeMode="cover"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <Text style={{color: COLORS.black, ...FONTS.h3}}>
                  Build a better future together
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
