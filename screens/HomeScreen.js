import { 
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
    BeakerIcon,
    Cog8ToothIcon,
    MagnifyingGlassIcon
    
  } from "react-native-heroicons/outline";
 import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />


        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

         <UserIcon size={35} color="#00CCBB" />
         </View>
  {/* search */}
  <View className="flex-row item-center space-x-2 pb-2 mx-4">
  <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
  <MagnifyingGlassIcon size={20} color="#00CCBB" />
  <TextInput className="rounded-full shadow-lg"
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
          
  </View>
  <Cog8ToothIcon size={35} color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Catagary */}
        <Categories />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

