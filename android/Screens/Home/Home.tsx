import React from 'react';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import globalStyle from '../../../assets/styles/globalStyle';
import { RootState } from '../../components/Search/redux/reducers/store';
import style from './style';
import { horizontalScale, verticalScale } from '../../../assets/styles/scaling';
import Searh from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { updateSelectategoryId } from '../../components/Search/redux/reducers/Categories';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { updateSelectedDonationId } from '../../components/Search/redux/reducers/Donation';
import { Routes } from '../../../Navigation/Routes';
import { resetToInitialState } from '../../components/Search/redux/reducers/Users';
import { logOut } from '../../api/user';

const Home = ({ navigation }: { navigation: any }) => {
  const categories = useSelector((state: RootState) => state.categories);
  const donation = useSelector((state: RootState) => state.donations);
  const user = useSelector((state: RootState) => state.user);
  console.log('this is our currentle Donation', donation);
  const dispatch = useDispatch();
  console.log(categories);
  console.log(user, 'home');

  type Category = {
    categoryId: number;
    name: string;
  };
  type DonationItem = {
    name: string;
    description: string;
    image: string;
    donationItemId: number;
    categoryIds: number[];

    price: string;
  };
  const [donationItems, setDonationItems] = useState<DonationItem[]>([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const categoryPageSize = 4;

  console.log('USE STATE DONATION', donationItems);

  useEffect(() => {
    console.log('run this function');
    const items = donation.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
    console.log(items);
  }, [categories.selectedCategoryId, donation.items]);

  useEffect(() => {
    const firstPage = pagination(categories.categories, 1, categoryPageSize);
    setCategoryList(firstPage);
    setCategoryPage(1); // Reseta para a primeira página apenas uma vez
  }, [categories.categories]);

  const pagination = (
    item: { categoryId: number; name: string }[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= item.length) {
      return [];
    }
    return item.slice(startIndex, endIndex);
  };

  const loadMoreCategories = () => {
    if (loading) return;
    setLoading(true);

    const nextPage = categoryPage + 1;
    const newItems = pagination(
      categories.categories,
      nextPage,
      categoryPageSize,
    );

    if (newItems.length > 0) {
      console.log(`🔁 Carregando página ${nextPage}:`, newItems);
      setCategoryList(prev => [...prev, ...newItems]);
      setCategoryPage(nextPage);
    } else {
      console.log('✅ Nenhum dado adicional para carregar.');
    }
    setLoading(false);
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 100 }}
      >
        <View style={style.header}>
          <View style={style.userInfo}>
            <Text style={style.headerIntrotext}>Hello,</Text>
          </View>
          <View style={style.userName}>
            <Header title={`${user.displayName} . 👋`} />

            <Image
              style={{
                width: horizontalScale(45),
                height: horizontalScale(45),
                borderRadius: horizontalScale(22.5),
              }}
              source={{ uri: user.profileImage }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={style.logoutContainer}>
          <Pressable
            style={style.logout}
            onPress={async () => {
              dispatch(resetToInitialState());
              await logOut();
            }}
          >
            <Header type={3} title={'Logout'} color={'#156CF7'} />
          </Pressable>
        </View>

        <View style={style.search}>
          <Searh placeholder={'Search'} />
        </View>
        <Pressable style={style.highLightedImageContainer}>
          <Image
            style={{ width: '100%', height: verticalScale(160) }}
            source={require('./../../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>

        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            horizontal
            data={categoryList}
            keyExtractor={item => item.categoryId.toString()}
            renderItem={({ item }) => (
              <View style={style.categoryItem}>
                <Tab
                  tabId={item.categoryId}
                  onPress={(value: any) =>
                    dispatch(updateSelectategoryId(value))
                  }
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreCategories}
          />
        </View>
        <View />
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}
                >
                  <SingleDonationItem
                    onPress={(selectedDonationId: any) => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        categoryInformation,
                      });
                    }}
                    uri={value.image}
                    donationTitle={value.name}
                    {...value}
                    badgeTitle={categoryInformation?.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
