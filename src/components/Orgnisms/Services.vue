<script setup>
import ServiceCard from '@/components/Molecules/ServiceCard.vue';
</script>

<template>
<section class="services bg-[black]">
    <div class="services-wrapper max-w-[1200px] mx-auto">
        <div class="services-content">
            <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
              My <span class="section_title">Skills</span>
            </h2>
        </div>
        <div class="services-cards flex flex-wrap gap-[20px] justify-between items-center">
            <ServiceCard 
              icon="/wordpress.png"
              title="Wordpress Development"
              description="We create fully responsive, secure, and high-performing WordPress websites. Custom designs, SEO-ready structure, and optimized performance help businesses establish a strong online presence and grow effectively."
            />
            <ServiceCard 
              icon="/shopify.svg"
              title="Shopify Development"
              description="Build scalable, high-converting Shopify stores with custom features, smooth UX, and integrated payment solutions. Optimized for search engines, ensuring your eCommerce business attracts more customers."
            />
            <ServiceCard 
              icon="/webflow-icon.svg"
              title="Webflow Development"
              description="We create fully responsive, secure, and high-performing Webflow websites. Custom designs, SEO-ready structure, and optimized performance help businesses establish a strong online presence and grow effectively."
            />
            <ServiceCard 
              icon="/javascript.png"
              title="JavaScript Development"
              description="Mastering vanilla JavaScript and ES6+ features. Building interactive, dynamic web applications with modern JavaScript patterns, async programming, and DOM manipulation."
            />
            <ServiceCard 
              icon="/react.png"
              title="React Development"
              description="Building scalable, component-based React applications with hooks, context API, and modern React patterns. Creating fast, interactive user interfaces with optimal performance and state management."
            />
            <ServiceCard 
              icon="/next.png"
              title="Next.js Development"
              description="Developing full-stack Next.js applications with server-side rendering, static site generation, and API routes. Building SEO-optimized, high-performance web applications with the React framework."
            />
            <ServiceCard 
              icon="/node.png"
              title="Node.js Development"
              description="Creating robust backend services and APIs with Node.js. Building scalable server-side applications, RESTful APIs, and real-time applications with Express and modern Node.js ecosystem."
            />
            <ServiceCard 
              icon="/vue.png"
              title="Vue.js Development"
              description="Developing reactive, component-based Vue.js applications with Composition API and Vuex. Creating intuitive user interfaces with Vue's progressive framework and excellent developer experience."
            />
        </div>
    </div>
</section>
</template>

<style scoped>
  
  .services { 
    padding-top: 70px;
  }

  .section_title {
    color: transparent;        
    -webkit-text-stroke: 1px white; 
  }

  .title_text {
      color: white;
      font-weight: 600;
  }

</style>
