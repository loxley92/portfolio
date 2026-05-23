---
import BaseLayout from "../layouts/BaseLayout.astro";
import AboutParallax from "../components/AboutParallax.astro"; // Import it!

const hero = {
  heading: "I’m a designer who lives in the 'messy middle' of complex systems",
  subtext: "But outside of work, I’m usually found with a guitar in my hand, hunting for the best food in the city, or drawing weird things that have nothing to do with spreadsheets.",
  image: "/assets/about/profile.svg"
};
// ... timeline array remains exactly the same
---

<BaseLayout title="About Me | Liam Oxley" description="...">
  <div class="bg-[#F3F0FA] min-h-screen w-full pt-40 pb-48 overflow-x-hidden relative z-0">
    
    <AboutParallax>
      
      {/* 1. FAR SCATTER (slot="far") - Small, 40% Opacity */}
      <Fragment slot="far">
        <img src="/assets/about/shape-1.svg" class="absolute top-10 left-[10%] w-6 opacity-40 organic-drift-far" />
        <img src="/assets/about/shape-2.svg" class="absolute bottom-10 left-[40%] w-8 opacity-40 organic-drift-far" />
        <img src="/assets/about/shape-3.svg" class="absolute top-[20%] right-[30%] w-6 opacity-40 organic-drift-far" style="animation-delay: -5s" />
        <img src="/assets/about/shape-4.svg" class="absolute -bottom-4 right-[10%] w-8 opacity-40 organic-drift-far" style="animation-delay: -10s" />
      </Fragment>

      {/* 2. MID SCATTER (slot="mid") - Medium, 60% Opacity */}
      <Fragment slot="mid">
        <img src="/assets/about/shape-5.svg" class="absolute top-[15%] -left-8 w-16 opacity-60 organic-drift-mid" />
        <img src="/assets/about/shape-6.svg" class="absolute -bottom-12 left-[20%] w-14 opacity-60 organic-drift-mid" style="animation-delay: -3s" />
        <img src="/assets/about/shape-7.svg" class="absolute top-[10%] right-[15%] w-20 opacity-60 organic-drift-mid" style="animation-delay: -7s" />
      </Fragment>

      {/* 3. CLOSE SCATTER (slot="front") - Large, 100% Opacity */}
      <Fragment slot="front">
        <img src="/assets/about/shape-8.svg" class="absolute -top-12 left-[45%] w-32 opacity-100 organic-drift-front" />
        <img src="/assets/about/shape-9.svg" class="absolute -bottom-16 -right-12 w-40 opacity-100 organic-drift-front" style="animation-delay: -6s" />
      </Fragment>

      {/* 4. THE DEFAULT SLOT (Your Content) */}
      <div class="max-w-[1200px] mx-auto px-6 mb-56 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div class="flex-1 max-w-[650px] flex flex-col gap-6 text-neutral-800">
          <h1 class="font-serif font-normal text-[clamp(2rem,4vw,3rem)] leading-tight">{hero.heading}</h1>
          <p class="text-lg text-neutral-600 leading-relaxed">{hero.subtext}</p>
        </div>

        <div class="flex-shrink-0 w-full max-w-[320px] flex justify-end">
          <img src={hero.image} alt="Liam Oxley" class="w-full h-auto object-contain" />
        </div>
      </div>
      
    </AboutParallax>

    {/* TIMELINE SECTION (Unchanged) */}
    <div class="w-full mx-auto max-w-[1200px] flex flex-col gap-24 px-6">
       {/* ... your map loop ... */}
    </div>

  </div>
</BaseLayout>