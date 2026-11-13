import FeatureSection from "./FeatureSection"
import HeroSection from "./HeroSection"
import PromotionalSection from "./PromotionalSection"
import TestimonialSection from "./TestimonialSection"

function Main() {
  return (
    <div className='min-h-screen pb-20'>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <PromotionalSection />
    </div>
  )
}

export default Main