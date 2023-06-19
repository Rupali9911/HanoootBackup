import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppModal from '../../constant/AppModal'
import EmptyCart from './EmptyCart'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import CartItemCard from './CartItemCard'
import Coupon from './Coupon'
import CartTotal from './CartTotal'
import AppButton from '../Components/AppButton'
import Colors from '../../constant/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../constant/Loader'
import fonts from '../../constant/fonts'
import { useNavigation } from '@react-navigation/native';



const CartScreen = (props) => {
  // const { route } = props;
  const isFocused = useIsFocused();
  const navigation = useNavigation();


  // const { CartItem } = route.params;

  const [noOfItemAdded, setNoOFItemAdded] = useState([]);
  const [loading, setLoading] = useState(true);




















  useEffect(() => {
    // AsyncStorage.clear();

    async function fetchData() {
      try {
        const retrievedArray = await AsyncStorage.getItem('CARTITEMS');
        if (retrievedArray !== null) {
          // We have data!!
          const Data = JSON.parse(retrievedArray);
          console.log('Get Data from async storage : ', JSON.parse(retrievedArray));
          //  var newData = Data.filter(function(item){
          //   // console.log('New Data : ', noOfItemAdded)
          //   if(noOfItemAdded.length > 0){
          //     console.log('if')
          //     return item;
          //   }
          //   else{
          //     console.log('else')
          //     return noOfItemAdded.indexOf(item.id) === -1 ;
          //   }

          //   });
          console.log('New Data : ', Data);

          // if(noOfItemAdded.length > 0){

          // }

          // var a = Data.filter((item) => {
          //   if(noOfItemAdded.length > 0){
          //     setNoOFItemAdded(item)
          //   }
          //   else{
          //     if (!noOfItemAdded.includes(item.id)) {
          //       setNoOFItemAdded([...noOfItemAdded, item]);
          //     }
          //   }
          // });
          //   if(noOfItemAdded.length > 0){
          //     console.log('already exist some data');
          //      if (!noOfItemAdded.includes(item.id)) {
          //   setNoOFItemAdded([...noOfItemAdded, item]);
          // }
          //   }
          //   else{
          //     console.log('need ot add data')
          //     setNoOFItemAdded([Data])
          //   }


          // if(noOfItemAdded.length > 0){

          // }

          setNoOFItemAdded((prevData) => [...prevData, Data]);
          setLoading(false);



          console.log('noOfItemAdded : ', noOfItemAdded);



          // var newData = Data.filter((item) => {
          //   if (!noOfItemAdded.includes(item.id)) {
          //     setAnswered([...noOfItemAdded, item]);
          //   }
          // })

          // console.log('Check Data : ', newData)


          // console.log('Array : ', newData);

          // setNoOFItemAdded((prevData) => [...prevData, newData[0]])

          // const newData =  JSON.parse(retrievedArray);
          // var arr = retrievedArray.filter(function(item){
          //   return noOfItemAdded.indexOf(item.id) === -1;
          // });
          // console.log('Get Data from async storage : ', arr);
          // setNoOFItemAdded((prevData) => [...prevData, JSON.parse(retrievedArray)])
          // // setNoOFItemAdded(JSON.parse(retrievedArray))
          // setLoading(false)
        }
      } catch (error) {
        // Error retrieving data
        setLoading(false)
        Alert.alert(error)
      }
    }
    fetchData();

  }, [isFocused]);


  // console.log(typeof(noOfItemAdded))

  // console.log('flatlist data : ', noOfItemAdded)

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        heading={`Cart (${noOfItemAdded.length} item)`}
        isLike={noOfItemAdded.length ? true : false}
      />
      <Text style={styles.deliveryLine}>Deliver to Japan-Iraq</Text>
      <ScrollView style={{ flex: 1 }}>
        {/* {
          loading === true ?
            <Loader />
            : noOfItemAdded.length > 0 && loading === false ?
              <>
                <CartItemCard Item={noOfItemAdded} />
                <Coupon />
                <CartTotal />
              </>
              : <EmptyCart />
        } */}
        {
          noOfItemAdded.length > 0
            ?
            <>
              <CartItemCard Item={noOfItemAdded} />
              <Coupon />
              <CartTotal />
            </>
            :
            <EmptyCart />

        }




      </ScrollView>

      {
        noOfItemAdded.length > 0 &&
        <View style={styles.container}>
          <AppButton
            label={'Proceed Checkout'}
            onPress={async () => {
              try {
                let name = "ADDRESS";
                await AsyncStorage.setItem("BUTTON", name);
              } catch (error) {
                console.log(error);
              } navigation.navigate('CheckoutScreen');
            }}
          />
        </View>
      }

    </AppBackground>



    // <AppBackground>

    //   <AppHeader placeholderText={'What are you looking for?'} showBackButton />
    //   <ScrollView style={{flex: 1}}>
    //     <Text style={{ fontSize: 20 }}>{`Cart Items : ${noOfItemAdded.length}`}</Text>
    //     {/* <EmptyCart /> */}
    //     {/* {
    //       noOfItemAdded.length > 0 ?
    //         (
    //           <>
    //             <CartItemCard Item={noOfItemAdded} />
    //             <Coupon />
    //             <CartTotal />

    //           </>

    //         ) : <EmptyCart />
    //     } */}
    //     <View style={styles.container}>
    //       <AppButton label={'Proceed Checkout'} />
    //     </View>


    //   </ScrollView>


    // </AppBackground>

  )
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingVertical: '2%'
  },
  deliveryLine: {
    fontWeight: 600,
    fontFamily: fonts.VisbyCF_Demibold,
    letterSpacing: 0.5,
    backgroundColor: Colors.YELLOWLIGHT,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
})

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native';

// class AddedToCart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalVisible: false
//     };
//   }

//   openModal(visible) {
//     this.setState({ modalVisible: visible });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible} onRequestClose={() => { console.log('Modal has been closed.'); }}>
//           <View style={styles.modalContainer}>
//             <View style={styles.innerContainer}>
//               <Text>This item has been added to your cart!</Text>
//               <TouchableHighlight onPress={() => { this.openModal(!this.state.modalVisible); }}>
//                 <Text>Close</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   innerContainer: {
//     alignItems: 'center',
//   },
// });

// export default AddedToCart;