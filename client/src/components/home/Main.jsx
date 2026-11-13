import CTASection from "./CTASection"
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
      <CTASection />
    </div>
  )
}

export default Main