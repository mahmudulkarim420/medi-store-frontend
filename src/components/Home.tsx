import React from 'react'
import { Banner } from './banner'
import CategorySection from './CategorySection'
import PromoSection from './PromoSection'
import LatestProducts from './LatestProducts'
import ValueProps from './ValueProps'
import StoreCollection from './StoreCollection'
import Newsletter from './Newsletter'
import Testimonials from './Testimonials'
import InstagramSection from './InstagramSection'
import Image from 'next/image'
import pillsLineArt from '@/assets/medical shape 5 1.png'

const Home = () => {
    return (
        <div className="bg-white min-h-screen relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[20%] right-[-100px] opacity-[0.03] pointer-events-none rotate-12">
                <Image src={pillsLineArt} alt="Decor" width={600} height={600} />
            </div>
            <div className="absolute bottom-[10%] left-[-150px] opacity-[0.05] pointer-events-none -rotate-12">
                <Image src={pillsLineArt} alt="Decor" width={800} height={800} />
            </div>

            <div className="relative z-10">
                <Banner />
                <CategorySection />
                <PromoSection />
                <LatestProducts />
                <ValueProps />
                <StoreCollection />
                <Newsletter />
                <Testimonials />
                <InstagramSection />
            </div>
        </div>
    )
}

export default Home
