import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../screens/Components/AppHeader'
import AppBackground from '../../screens/Components/AppBackground'

const Location = () => {
  return (
    <AppBackground>
        <AppHeader
            showBackButton
            title={'Pin Your Location'}
        />
    </AppBackground>
  )
}

export default Location

const styles = StyleSheet.create({})