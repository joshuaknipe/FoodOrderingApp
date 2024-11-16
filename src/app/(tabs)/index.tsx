import products from '../../../assets/data/products';
import { View } from '@/components/Themed';
import ProductListItem from '@/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[3]} />
    </View>
  );
}
