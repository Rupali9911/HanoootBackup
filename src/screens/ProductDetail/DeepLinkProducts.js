import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDeepLinkProducts } from '../Store/actions/userAction'

const DeepLinkProducts = () => {
    useEffect(() => {
        getDeepLinkUrl()
    }, [])
    const getDeepLinkUrl = async () => {
        await dispatch(getDeepLinkProducts()).
            then((res) => {
                console.log('res: ', res)

            }).
            catch((err) => {
                console.log('err getDeepLinkUrl: ', err)
            })
    }


    return (
        <View>
            <Text>DeepLinkProducts</Text>
        </View>
    )
}

export default DeepLinkProducts

const styles = StyleSheet.create({})