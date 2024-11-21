import {createContext, PropsWithChildren, useContext, useState} from 'react';
import { CartItem, Product } from '@/types';
import { randomUUID } from 'expo-crypto';

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
    total: number;
};


const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
    total: 0,
});

const CartProvider = ({children}: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
    
        const existingItem = items.find(
            item => item.product === product && item.size === size);

        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return;
        }

        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };

        setItems([newCartItem, ...items]);
    };

    
    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        // use a map to loop through each item, if it is not the item we want to update,
        // return it as is, otherwise return the item with the updated quantity
        const updatedItems = items.map(item => 
            item.id !== itemId
            ? item
            // use spread operator to return a new object which copies all properties
            // of existing item and then overwrites the quantity property with a new value
            : {...item, quantity: item.quantity + amount}
        // filter out any items with a quantity less than 0    
        ).filter(item => item.quantity > 0); 
        setItems(updatedItems);
    };

    const total = items.reduce((sum, item) => (sum += item.product.price * item.quantity), 0);

    return (
        <CartContext.Provider 
        value={{ items: items, addItem: addItem, updateQuantity: updateQuantity, total: total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);