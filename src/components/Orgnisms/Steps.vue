<script setup>
import StepCard from '@/components/Molecules/StepCard.vue';
</script>

<template>
<section class="steps bg-[black]">
    <div class="steps-wrapper max-w-[1200px] mx-auto">
        <div class="steps-content">
            <div class="marquee-container">
                <div class="marquee-content">
                    <h2 class="title_text uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
                      Smarter Projects Faster Results — in <span class="section_title">4Simple Steps</span>
                    </h2>
                    <h2 class="title_text uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
                      Smarter Projects Faster Results — in <span class="section_title">4Simple Steps</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="steps-cards flex flex-wrap gap-[20px] justify-between items-center">
            <StepCard 
              :stepNumber="1"
              title="Discovery & Planning"
              description="We start by understanding your business goals, target audience, and project requirements. Our team conducts thorough research and creates a detailed roadmap for your project."
            />
            <StepCard 
              :stepNumber="2"
              title="Design & Development"
              description="Our expert designers and developers bring your vision to life. We create responsive, high-performance solutions using the latest technologies and best practices."
            />
            <StepCard 
              :stepNumber="3"
              title="Testing & Optimization"
              description="We rigorously test every aspect of your project to ensure flawless functionality. Performance optimization and quality assurance are our top priorities."
            />
            <StepCard 
              :stepNumber="4"
              title="Launch & Support"
              description="We launch your project smoothly and provide ongoing support. Our team ensures everything runs perfectly and helps you grow your digital presence."
            />
        </div>
    </div>
</section>
</template>

<style scoped>
.steps { 
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

.marquee-container {
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 40px;
}

.marquee-content {
  display: inline-flex;
  animation: marquee 20s linear infinite;
  gap: 100px;
}

.marquee-content h2 {
  display: inline-block;
  margin: 0;
  padding-right: 100px;
  white-space: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
