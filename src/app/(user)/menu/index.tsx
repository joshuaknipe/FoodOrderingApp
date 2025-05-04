import { ActivityIndicator, FlatList, Text } from "react-native";
import ProductListItem from "@components/ProductListItem";
import { useProductList } from "@/api/products";
import Colors from "@/constants/Colors";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.light.tint} />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
