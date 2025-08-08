import React from 'react'
import PracticeTestHero from '@/app/Components/PracticeTestHero/PracticeTestHero'
import HowItWorks from '@/app/Components/HowItWorks/HowItWorks'
import PracticeTestList from '@/app/Components/PracticeTestList/PracticeTestList'
const PracticeTest = () => {
  return (
    <div >
        <PracticeTestHero/>
        <HowItWorks/>
        <PracticeTestList/>
    </div>
  )
}

export default PracticeTest