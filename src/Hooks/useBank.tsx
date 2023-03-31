import axios from 'axios'
import React, { useState } from 'react'
import { IBank } from '../Interfaces/IBank'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useBank = () => {
  const [banks, setBanks] = useState<IBank[]>([])
  
  const getBanks = async() => {
    const banksStored = await AsyncStorage.getItem('@banks')
    if (!banksStored) {
      const { data } = await axios.get<IBank[]>('https://dev.obtenmas.com/catom/api/challenge/banks')      
      setBanks(data)
      await AsyncStorage.setItem('@banks', JSON.stringify(data))
      
    } else {
      setBanks(JSON.parse(banksStored))
    }

  }

  return {
    banks,
    getBanks
  }
}
