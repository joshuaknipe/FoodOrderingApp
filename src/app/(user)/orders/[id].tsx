import { Text, View, FlatList } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import orders from "@assets/data/orders";
import OrderListItem from "../../../components/OrderListItem";
import OrderItemListItem from "@/components/OrderItemListItem";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 10, gap: 20 }}>
      <Stack.Screen options={{ title: `Order# ${id}` }} />
      

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        ListHeaderComponent={() => <OrderListItem order={order} />}
      />
    </View>
  );
}
