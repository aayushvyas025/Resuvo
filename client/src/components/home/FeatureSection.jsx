import { features } from "../../constant/content"

function FeatureSection() {
  return (
    <div id="features" class="mt-26 grid border rounded-lg max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0" >
    {
        features.map((feature) => 
            <div class="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
        <div class="flex items-center gap-2 text-gray-500">
           {feature.icon}
            <h2 class="font-medium text-base text-indigo-500">{feature.title}</h2>
        </div>
        <p class="text-gray-600 text-sm/6 max-w-72">
            {feature.description}
        </p>
    </div>
    )
    }
</div>
  )
}

export default FeatureSection