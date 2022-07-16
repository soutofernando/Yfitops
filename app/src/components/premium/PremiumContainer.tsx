import React from 'react'
import Layout from '~/Layout'
import HeroPremium from '../sections/premium/Hero/HeroPremium'
import Incentives from '../sections/premium/Incentives/Incentives'
import PlansPremium from '../sections/premium/Plans/PlansPremium'


const PremiumContainer = () => {
    return (
        <div>
            <Layout>
                <HeroPremium
                    title="Enjoy Premium free for 2 months"
                    subtitle="Then pay only R$ 19.90/month. Cancel whenever you want."
                />

                <Incentives />
                <PlansPremium />
            </Layout>
        </div>
    )
}

export default PremiumContainer