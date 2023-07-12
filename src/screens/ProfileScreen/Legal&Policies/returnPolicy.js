import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'

const ReturnPolicy = () => {
    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Retun Policy'}
            />
        </AppBackground>
    )
}

export default ReturnPolicy;

const styles = StyleSheet.create({})