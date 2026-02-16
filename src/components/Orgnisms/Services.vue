<script setup>
import ServiceCard from '@/components/Molecules/ServiceCard.vue';
</script>

<template>
<section class="services bg-[black]">
    <div class="services-wrapper max-w-[1200px] mx-auto">
        <div class="services-content">
            <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
              Our <span class="section_title">Services</span>
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
              description="Design and develop modern, responsive Webflow websites with SEO-friendly structure. Tailored solutions for businesses and agencies, ensuring visually appealing, high-performance, and user-focused experiences."
            />
            <ServiceCard 
              icon="/beehiv-icon.svg"
              title="Beehiiv Development"
              description="Launch and manage professional Beehiiv newsletters to grow your subscriber base. Automate content delivery, increase engagement, and drive conversions with fully optimized email marketing workflows."
            />
            <ServiceCard 
              icon="/zapier-icon.svg"
              title="Zapier Integration"
              description="Automate workflows by connecting your favorite apps using Zapier. Streamline repetitive tasks, boost operational efficiency, and ensure your business processes run smoothly and error-free."
            />
            <ServiceCard 
              icon="/n8n-icon.svg"
              title="N8N Integration"
              description="Implement custom N8N automation workflows to integrate multiple apps, optimize business processes, and improve productivity. Flexible solutions to save time and enhance operational efficiency."
            />
            <ServiceCard 
              icon="/dsp-icon.svg"
              title="DSP CRM"
              description="Manage clients, leads, and marketing campaigns with DSP CRM. Automate daily operations, track performance, and improve agency productivity with a centralized, professional CRM platform."
            />
            <ServiceCard 
              icon="/seo.svg"
              title="AI Powered SEO"
              description="Boost your website visibility with modern AI-powered SEO services. Our solutions optimize content, technical SEO, and user experience using advanced AEO, GEO, and LLMO strategies to drive traffic, improve rankings, and grow your business effectively."
            />
        </div>
    </div>
</section>
</template>

<style scoped>
.services { 
    padding: 70px 0;
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
