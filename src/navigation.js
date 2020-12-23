import * as React from 'react';
import {createStackNavigator} from  '@react-navigation/stack';



import LandingScreen from './screens/LandingScreen';
import AddProductScreen from './screens/AddProductScreen';
import ProductListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();




export const UnAuthStack = props => {
    return (
        
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />

                <Stack.Screen name="AddProduct" component={AddProductScreen} options={{headerShown: true,headerTitle:'Add Product'}} />
                <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: true,headerTitle:'Cart'}} />
                <Stack.Screen name="ProductList" component={ProductListScreen} options={{headerShown: true,headerTitle:'Product List'}} />

            </Stack.Navigator>
        
    );
};

export const AuthStack = props => {
    return (
        
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />

                <Stack.Screen name="AddProduct" component={AddProductScreen} options={{headerShown: true,headerTitle:'Add Product'}} />
                <Stack.Screen name="ProductList" component={ProductListScreen} options={{headerShown: true,headerTitle:'Product List'}} />
                <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: true,headerTitle:'Cart'}} />

            </Stack.Navigator>
        
    );
};

  