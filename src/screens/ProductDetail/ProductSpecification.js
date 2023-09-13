import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import ProductHeader from '../Components/Cards/ProductHeader'
import { wp } from '../../constant/responsiveFunc'
import { translate } from '../../utility'

const ProductSpecification = (props) => {
  const [specifications, setSpecifications] = useState([])

  useEffect(() => {
    const data = props?.data;
    const spec = data?.split('|')
    setSpecifications(spec)
  }, [])

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
            <ProductHeader TitleStyle={{ fontSize: 18 }} title={translate('common.specificationNhighlight')} />

            <View style={{ paddingHorizontal: '5%' }}>
              <FlatList
                data={specifications}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ flexDirection: 'row', gap: 5 }}>
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