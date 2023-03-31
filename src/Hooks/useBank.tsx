import axios from 'axios'
import React, { useState } from 'react'
import { IBank } from '../Interfaces/IBank'

export const useBank = () => {
  const [banks, setBanks] = useState<IBank[]>([])
  
  const getBanks = () => {
    axios.get('https://dev.obtenmas.com/catom/api/challenge/banks').then(response => {
      setBanks(response.data)
    })
  }

  return {
    banks,
    getBanks
  }
}
