import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';

function SupportPage() {
    return ( 
        <>
        <Hero/>
        <CreateTicket
        heading="Account Opening"
        link1="Resident individual"
        link2="Minor"
        link3="Glossary"
        collapseId="ticket1"
        />
        <CreateTicket
        heading="Your Zerodha account"
        link1="Your Profile"
        link2="Nomination"
        link3=""
        collapseId="ticket2"
        />
        <CreateTicket
        heading="Kite"
        link1="IPO"
        link2="Trading FAQs"
        link3="General"
        collapseId="ticket3"
        />
        </>
     );
}

export default SupportPage;