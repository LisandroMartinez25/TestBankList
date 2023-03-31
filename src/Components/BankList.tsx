import React from 'react'
import { ScrollView } from 'react-native'
import BankItem from './BankItem'
import { IBank } from '../Interfaces/IBank'

interface IBankListProps {
  banks: IBank[]
}

const BankList = ({ banks }: IBankListProps) => {
  return (
    <ScrollView>
      {
        banks.map((bank, index) => <BankItem bank={bank} key={index}/>)
      }
    </ScrollView>
  )
}

export default BankList