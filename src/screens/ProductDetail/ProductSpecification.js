import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import ProductHeader from '../Components/Cards/ProductHeader'
import { wp } from '../../constant/responsiveFunc'

const ProductSpecification = (props) => {
  const [specifications, setSpecifications] = useState([])
  // const {data} = props;
  // console.log('data : ', data)


  useEffect(() => {
    const data = " 6.7inch Super Retina XDR display with AlwaysOn and ProMotion Dynamic Island technology|48MP Main camera for stunning resolution and 4x zoom|Cinematic mode for 4K Dolby Vision up to 30fps|Action mode for smooth, steady, handheld videos ";
    const spec = data?.split('|')
    setSpecifications(spec)
    // console.log('this are specifications : ', specifications.split('|'));
  }, [])

  // const stringData = data;
  // const separatedData = stringData.split('<li>');
  // const data = [
  //   { spec: '15.54 cm (6.1-inch) Super Retina XDR display' },
  //   { spec: 'featuring Always-On and ProMotion' },
  //   { spec: 'Dynamic Island, a magical new way to interact with iPad ' },
  //   { spec: '48MP Main camera for up to 4x greater resolution ' },
  //   { spec: 'Calling supported (Yes); 6 GB RAM| 128 GB ROM expandable upto 256 GB; Processor' },
  //   { spec: 'Battery power - 7700 mAH battery' },
  //   { spec: 'Finger print sensor - No' }

  // ]

  const keyExtractor = (item, index) => {
    return `_${index}`;
  };

  return (
    <>



      {/* {
          props.Heading != 'Description' ?
            (<FlatList
              data={data}
              renderItem={({ item, i }) => {
                return (
                  <View style={{ marginBottom: 5 }} key={i}>
                    <Text style={styles.items}>{`\u25CF ${item.spec}`}</Text>
                  </View>
                );
              }}
              keyExtractor={keyExtractor}
            />)
            :
            (
              <View>
                {
                  (props.data).map((para, index) => {
                    return (
                      <View style={{ marginVertical: 5 }} key={index}>
                        <Text style={[
                          styles.items,
                          { textAlign: 'justify' }
                        ]}>{para}</Text>
                      </View>
                     
                    );
                  })
                }
              </View>)
        } */}
      {/* <View>
            {separatedData.map(data => (
                <Text key={data}>• {data}</Text>
            ))}
        </View> */}


      {
        specifications.length ?
          <>
            <ProductHeader TitleStyle={{ fontSize: 18 }} title={'Specification & Highlight'} />

            <View style={{ marginHorizontal: '5%' }}>
              <FlatList
                data={specifications}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ flexDirection: 'row', gap: 2 }}>
                      <Text style={styles.items}>{`\u25CF`}</Text>
                      <Text style={styles.items}>{`${item.trim()}`}</Text>
                    </View>
                  );
                }}
                keyExtractor={keyExtractor}
              />
            </View>
          </>
          : null
      }


    </>
  )
}

export default ProductSpecification

const styles = StyleSheet.create({
  items: {
    fontFamily: fonts.VisbyCF_Medium, lineHeight: 19, letterSpacing: 0.5, fontWeight: 500, color: Colors.PRICEGRAY,
  }
})