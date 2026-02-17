<script setup>
import FaqItem from '@/components/Molecules/FaqItem.vue';
</script>

<template>
<section class="faq bg-[black]">
    <div class="faq-wrapper max-w-[1200px] mx-auto relative z-10">
        <div class="faq-content">
            <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
              Frequently Asked <span class="section_title">Questions</span>
            </h2>
        </div>
        <div class="faq-items flex flex-col gap-[20px]">
            <FaqItem 
              question="What services does Best IT Sol offer?"
              answer="We offer a comprehensive range of digital services including WordPress and Shopify Web Development, Webflow Development, Beehiiv Development, Zapier and N8N Integration, DSP CRM Setup, AI-Powered SEO, Email Marketing, Sales Funnel Creation, Performance Marketing, API & App Integrations, and Intelligent Business Process Automation."
            />
            <FaqItem 
              question="How long does it take to complete a project?"
              answer="Project timelines vary depending on the scope and complexity. A simple website typically takes 2-4 weeks, while more complex projects with custom features may take 6-12 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
            />
            <FaqItem 
              question="Do you provide ongoing support after project completion?"
              answer="Yes, we offer comprehensive ongoing support and maintenance services. This includes regular updates, security patches, performance optimization, content updates, and technical support. We have flexible support packages tailored to your business needs."
            />
            <FaqItem 
              question="What is your pricing model?"
              answer="Our pricing is customized based on your specific project requirements. We offer transparent pricing with detailed breakdowns. During our initial consultation, we'll discuss your needs and provide a comprehensive quote. We also offer flexible payment plans for larger projects."
            />
            <FaqItem 
              question="Can you work with our existing systems and tools?"
              answer="Absolutely! We specialize in integrating with existing systems and tools. Whether you need to connect with your current CRM, e-commerce platform, marketing tools, or custom applications, we can create seamless integrations using Zapier, N8N, or custom API development."
            />
            <FaqItem 
              question="How do you ensure SEO optimization?"
              answer="We use AI-powered SEO strategies including AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and LLMO (Large Language Model Optimization). Our approach includes technical SEO audits, on-page optimization, content strategy, performance optimization, and continuous monitoring to improve rankings and drive organic traffic."
            />
        </div>
    </div>
</section>
</template>

<style scoped>
.faq { 
    padding: 70px 20px;
    position: relative;
    overflow: hidden;
}

.faq::before {
    content: '';
    position: absolute;
    top: 200px;
    right: -200px;
    width: 800px;
    height: 800px;
    background: linear-gradient(135deg, #8b005d6a, #8b005d69, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(60px);
}

.section_title {
  color: transparent;        
  -webkit-text-stroke: 1px white; 
}

.title_text {
    color: white;
    font-weight: 600;
}

.faq-items {
    max-width: 900px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .faq {
        padding: 50px 20px;
    }
    
    .title_text {
        font-size: 36px;
        letter-spacing: 10px;
    }
}
</style>
