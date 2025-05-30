import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import Button from '@/components/Button';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@/types';
import { useProduct } from '@/api/products';
import Colors from '@/constants/Colors';

const sizes: PizzaSize[] = ['S','M','L','XL'];

const ProductDetailScreen = () => {
    const {id: idString} = useLocalSearchParams(); //useLocalSearchParams() hook will return { id: "123" }
    const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
    const {data: product, isLoading, error} = useProduct(id);

    const {addItem} = useCart();

    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const addToCart = () => {
        if (!product) return;
        addItem(product, selectedSize);
        router.push('/cart');
    }


    if (isLoading) {
        return <ActivityIndicator size="large" color={Colors.light.tint} />;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product?.name}}/>
            <Image source={{uri: product.image || defaultPizzaImage}} 
                style={styles.image}/>

            <Text>Select size</Text>
            <View style={styles.sizes}>
                {sizes.map((size) => (
                <Pressable 
                    onPress={() => setSelectedSize(size)}
                    style={[styles.size, 
                        {
                            backgroundColor: selectedSize === size ? 'gainsboro' : 'white'
                        },                
                        ]} 
                    key={size}>
                    <Text style={[styles.sizeText,
                        {
                            color: selectedSize === size ? 'black' : 'gray'
                        }
                    ]}>{size}</Text>
                </Pressable>
                ))}
            </View>
            <Text style={styles.price}>${product.price}</Text>
            <Button onPress={addToCart} text='Add to cart' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 'auto',
    },
    sizes: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    size: {
        padding: 5,
        backgroundColor: 'gainsboro',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText: {
        fontSize: 20,
        fontWeight: '500',
    }
});

export default ProductDetailScreen;