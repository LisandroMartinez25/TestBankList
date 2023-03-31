import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import BankList from '../../Components/BankList'
import { IBank } from '../../Interfaces/IBank'
import { useBank } from '../../Hooks/useBank'

const HomeScreen = () => {
  const { banks, getBanks } = useBank()

  useEffect(() => {
    getBanks()
  }, [])
  
  return (
    <View style={styles.container}>
      { !banks.length ? <Text>Buscando...</Text> : <BankList banks={banks}/> }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})

export default HomeScreen