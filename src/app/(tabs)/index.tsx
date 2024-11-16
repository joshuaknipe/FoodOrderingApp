import products from '@assets/data/products';
import { View, FlatList } from 'react-native';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[0]} />
      <ProductListItem product={products[3]} /> */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{gap: 10}}
        />
    </View>
  );
}
