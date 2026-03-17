import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Sparkles } from 'lucide-react';

const Dashboard = () => {
  const [creations , setCreations] = useState([])

  const getDashboardData = async()=>{
    setCreations(dummyCreationData)
  }

  useEffect(()=>{
    getDashboardData()
  } , [])

  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>
        {/*Total Creation Card*/}
        <div className='flex justify-between items-center w-72
        p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2]
          to-[#0BB0D7] text-white flex justify-center items-center'>
            <Sparkles className='w-5 text-white'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
