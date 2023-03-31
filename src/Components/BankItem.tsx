import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IBank } from '../Interfaces/IBank'
import BtnLink from './BtnLink'

interface IBankItemProps {
  bank: IBank
}

const BankItem = ({ bank }: IBankItemProps) => {
  const { bankName, description, url, age } = bank

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{bankName} - {age} años</Text>
      <Text style={styles.description}>{description}</Text>
      <BtnLink url={url} > Visitar </BtnLink>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 5, // Shadow android
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignContent: 'center',
    padding: 15,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  description: {
    fontSize: 14,
    margin: 10
  },
  url: {
    marginLeft: 10
  }
})

export default BankItem