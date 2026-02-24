<script setup>
import Header from '@/components/Orgnisms/Header.vue';
import Hero from '@/components/Orgnisms/Hero.vue';
import Services from '@/components/Orgnisms/Services.vue';
import Steps2 from '@/components/Orgnisms/steps2.vue';
import Faq from '@/components/Orgnisms/Faq.vue';
import Testimonials from '@/components/Orgnisms/Testimonials.vue';
import Portfolio from '@/components/Orgnisms/Portfolio.vue';
import { onMounted } from 'vue';
import Footer from '@/components/Orgnisms/Footer.vue';
import About from '../components/Orgnisms/About.vue';
import { SlowMo, SplitText } from 'gsap/all';
import Skills from '@/components/Orgnisms/Skills.vue';


onMounted(() => {
  const header = document.querySelector('.header');
  document.documentElement.style.setProperty(
    '--header-height',
    `${header.offsetHeight}px`
  );
});


</script>

<template>
  <div class="page">
    <header class="header">
      <Header />
    </header>
    <section class="hero">
      <Hero />
    </section>
    <section class="services">
      <About />
    </section>
  </div>
  <Services />
  <Skills />
  <Steps2 />
  <Portfolio />
  <Testimonials />
  <Faq />
  <Footer />
</template>


<style scoped>
.page {
  position: relative;
}


.header {


  position: sticky;
  top: 0;
  z-index: 0;
}

.hero {
  position: sticky;
  top: var(--header-height);
  z-index: 0;
}

.services {
  position: relative;
  z-index: 10;
}
</style>