import { View, Text} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const ProductDetailScreen = () => {
    const {id} = useLocalSearchParams(); //useLocalSearchParams() hook will return { id: "123" }

    return (
        <View>
            <Stack.Screen options={{title: 'Details ' + id}}/>

            <Text style={{fontSize: 20, fontWeight: 'bold'}}>ProductDetailScreen for id: {id}</Text>
        </View>
    );
};

export default ProductDetailScreen;