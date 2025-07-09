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
import { resetToInitialState } from '../../components/Search/redux/reducers/Users';
import style from './style';
import { horizontalScale, verticalScale } from '../../../assets/styles/scaling';
import Searh from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { updateSelectategoryId } from '../../components/Search/redux/reducers/Categories';

const Home = () => {
  const categories = useSelector((state: RootState) => state.categories);
  const donation = useSelector((state: RootState) => state.donations);
  const user = useSelector((state: RootState) => state.user);
  console.log('this is our currentle Donation', donation);
  const dispatch = useDispatch();
  console.log(categories);
  useEffect(() => {
    dispatch(resetToInitialState());
  }, [dispatch]);
  // console.log(user);

  type Category = {
    categoryId: number;
    name: string;
  };
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const categoryPageSize = 4;

  useEffect(() => {
    console.log('run this function');
    const item = donation.items;
    const filteredItem = item.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    console.log(filteredItem);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View style={style.userInfo}>
            <Text style={style.headerIntrotext}>Hello,</Text>
          </View>
          <View style={style.userName}>
            <Header title={`${user.firstName} ${user.lastName[0]}. 👋`} />
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
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
