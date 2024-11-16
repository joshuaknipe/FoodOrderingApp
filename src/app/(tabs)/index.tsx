import { StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';
import products from '../../../assets/data/products';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={ {uri: product.image}} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
});
