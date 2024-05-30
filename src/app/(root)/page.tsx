import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '../../components/TotalBalancebox'

const Home = () => {
const loggedIn = {firstName: "Andriantsiory"}

    return (
    <section className='home'>
    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type ="greeting"
            title ="Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
            />

            <TotalBalancebox
            accounts ={[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
            />
        </header>
    </div>
    </section>
  )
}

export default Home