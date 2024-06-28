import React from 'react'
import Stats from '../components/Stats'

const StatsSection = () => {
    return (
        <section className="p-6 sm:px-44 bg-gradient-to-l from-blue-400 to-blue-500 text-white mt-20 py-20 md:py-30">
            <div className="container gap-7 sm:gap-0 mx-auto grid justify-center grid-cols-1 text-center lg:grid-cols-3">
                <Stats animation = {"fade-right"} heading = {'527'} subheading = {'Active Users'} />
                <Stats animation = {"fade-up"} heading = {'347'} subheading = {'Booked NFC'} />
                <Stats animation = {"fade-left"} heading = {'58'} subheading = {'Parking Areas'} />
            </div>
            <h2 className=' mt-9 text-4xl font-bold tracking-wider lg:text-[40px] text-center'>Current Stats</h2>
        </section>
    )
}

export default StatsSection