import React from 'react'
import Brokerage from './Brokerage';
import Hero from './Hero';
import Charges from './Charges';
import  AccountOpen from './AccountOpen';
function PricingPage() {
    return ( 
        <>
        <Hero />
        <Brokerage />
        <Charges />
        <AccountOpen />
        </>
    );
    
}

export default PricingPage;