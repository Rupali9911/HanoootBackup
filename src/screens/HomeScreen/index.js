import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import AppHeader from '../Components/AppHeader';
import AppBackground from '../Components/AppBackground';
import Carousels from './carousel';
import Card from '../Components/Card';
import Colors from '../../constant/Colors';
import CustomList from '../Components/CustomList';
import Card1 from '../Components/Card1';



export default function HomeScreen() {

   return (
      <AppBackground >
         <AppHeader placeholderText={'Search'} />

         <ScrollView style={{backgroundColor: Colors.LightGray}}>
            <Carousels />
            <Card title={'Smart Phones'} priceOff={'Up to 30% off'} />
             
            <CustomList />
            <Card title={'Pick up where you left off'} />

            <Card1 />
           
         </ScrollView>
      </AppBackground>
   )
}

const styles = StyleSheet.create({})