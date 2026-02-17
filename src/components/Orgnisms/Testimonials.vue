<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TestimonialCard from '@/components/Molecules/TestimonialCard.vue';

const testimonials = ref([
    {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        testimonial: "Best IT Sol transformed our digital presence completely. Their AI-powered SEO strategies increased our organic traffic by 300% in just 3 months. Outstanding service!",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Marketing Director",
        company: "E-Commerce Plus",
        testimonial: "The Shopify store they built for us is absolutely stunning. Sales increased by 250% and the automation workflows save us hours every week. Highly recommended!",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Founder",
        company: "Creative Agency",
        testimonial: "Their WordPress development team created a beautiful, fast, and SEO-optimized website that perfectly represents our brand. The ongoing support is exceptional.",
        rating: 5
    },
    {
        name: "David Thompson",
        role: "Operations Manager",
        company: "Global Solutions",
        testimonial: "The N8N automation workflows they set up have revolutionized our business processes. We've saved countless hours and improved efficiency dramatically.",
        rating: 5
    },
    {
        name: "Lisa Anderson",
        role: "CMO",
        company: "Digital Marketing Pro",
        testimonial: "Best IT Sol's email marketing and sales funnel creation helped us triple our conversion rates. Their expertise in automation is unmatched.",
        rating: 5
    },
    {
        name: "James Wilson",
        role: "Business Owner",
        company: "Retail Express",
        testimonial: "The Zapier integrations they implemented connected all our tools seamlessly. Our team productivity has increased significantly. Great work!",
        rating: 5
    },
    {
        name: "Maria Garcia",
        role: "Director",
        company: "Innovation Labs",
        testimonial: "Their Webflow development created a modern, responsive website that loads incredibly fast. The design is beautiful and the user experience is flawless.",
        rating: 5
    },
    {
        name: "Robert Brown",
        role: "VP of Sales",
        company: "Enterprise Corp",
        testimonial: "The DSP CRM setup and customization has transformed how we manage our sales pipeline. Our team is more organized and productive than ever.",
        rating: 5
    },
    {
        name: "Jennifer Lee",
        role: "Content Manager",
        company: "Media House",
        testimonial: "The Beehiiv newsletter setup and automation has grown our subscriber base by 400%. Their email marketing strategies are top-notch.",
        rating: 5
    },
    {
        name: "Christopher Taylor",
        role: "CTO",
        company: "Startup Hub",
        testimonial: "Best IT Sol's API integrations and custom automation solutions have streamlined our entire tech stack. They're true experts in their field.",
        rating: 5
    },
    {
        name: "Amanda White",
        role: "Founder",
        company: "Fashion Forward",
        testimonial: "Our Shopify store is now a conversion machine thanks to Best IT Sol. The custom features and optimization work perfectly. Highly professional team!",
        rating: 5
    },
    {
        name: "Daniel Martinez",
        role: "Marketing Lead",
        company: "Growth Co.",
        testimonial: "The performance marketing campaigns they ran increased our ROI by 350%. Their data-driven approach and expertise are impressive.",
        rating: 5
    }
]);

const leftColumnTestimonials = ref([...testimonials.value, ...testimonials.value, ...testimonials.value]);
const middleColumnTestimonials = ref([...testimonials.value, ...testimonials.value, ...testimonials.value]);
const rightColumnTestimonials = ref([...testimonials.value, ...testimonials.value, ...testimonials.value]);

let leftAnimationId = null;
let middleAnimationId = null;
let rightAnimationId = null;

onMounted(() => {
    setTimeout(() => {
        const leftColumn = document.querySelector('.testimonials-left');
        const middleColumn = document.querySelector('.testimonials-middle');
        const rightColumn = document.querySelector('.testimonials-right');
        
        if (!leftColumn || !middleColumn || !rightColumn) return;
        
        const getSingleSetHeight = (column) => {
            const firstCard = column.querySelector('.testimonial_card');
            if (!firstCard) return 320 * testimonials.value.length;
            const cardHeight = firstCard.offsetHeight;
            const gap = 24; 
            return (cardHeight + gap) * testimonials.value.length;
        };
        
        const leftSingleSetHeight = getSingleSetHeight(leftColumn);
        const middleSingleSetHeight = getSingleSetHeight(middleColumn);
        const rightSingleSetHeight = getSingleSetHeight(rightColumn);
        
        let leftPosition = 0;
        let middlePosition = 0;
        let rightPosition = 0;
        
        const speed = 0.8; 
        
        const animateLeft = () => {
            leftPosition -= speed;
            
            if (Math.abs(leftPosition) >= leftSingleSetHeight) {
                leftPosition = leftPosition + leftSingleSetHeight;
            }
            
            leftColumn.style.transform = `translateY(${leftPosition}px)`;
            leftAnimationId = requestAnimationFrame(animateLeft);
        };
        
        const animateMiddle = () => {
            middlePosition += speed;
            
            if (middlePosition >= middleSingleSetHeight) {
                middlePosition = middlePosition - middleSingleSetHeight;
            }
            
            middleColumn.style.transform = `translateY(${middlePosition}px)`;
            middleAnimationId = requestAnimationFrame(animateMiddle);
        };
        
        const animateRight = () => {
            rightPosition -= speed;
            
            if (Math.abs(rightPosition) >= rightSingleSetHeight) {
                rightPosition = rightPosition + rightSingleSetHeight;
            }
            
            rightColumn.style.transform = `translateY(${rightPosition}px)`;
            rightAnimationId = requestAnimationFrame(animateRight);
        };
        
        animateLeft();
        animateMiddle();
        animateRight();
    }, 100);
});

onUnmounted(() => {
    if (leftAnimationId) cancelAnimationFrame(leftAnimationId);
    if (middleAnimationId) cancelAnimationFrame(middleAnimationId);
    if (rightAnimationId) cancelAnimationFrame(rightAnimationId);
});
</script>

<template>
<section class="testimonials bg-[black]">
    <div class="testimonials-wrapper max-w-[1200px] mx-auto">
        <div class="testimonials-content">
            <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
              Client <span class="section_title">Testimonials</span>
            </h2>
        </div>
        <div class="testimonials-grid bg-transparent flex gap-[20px] relative">
            <div class="testimonials-column overflow-hidden h-[600px]">
                <div class="testimonials-left flex flex-col gap-6">
                    <TestimonialCard
                        v-for="(testimonial, index) in leftColumnTestimonials"
                        :key="`left-${index}`"
                        :name="testimonial.name"
                        :role="testimonial.role"
                        :company="testimonial.company"
                        :testimonial="testimonial.testimonial"
                        :rating="testimonial.rating"
                    />
                </div>
            </div>
            
            <div class="testimonials-column overflow-hidden h-[600px]">
                <div class="testimonials-middle flex flex-col gap-6">
                    <TestimonialCard
                        v-for="(testimonial, index) in middleColumnTestimonials"
                        :key="`middle-${index}`"
                        :name="testimonial.name"
                        :role="testimonial.role"
                        :company="testimonial.company"
                        :testimonial="testimonial.testimonial"
                        :rating="testimonial.rating"
                    />
                </div>
            </div>
            
            <div class="testimonials-column overflow-hidden h-[600px]">
                <div class="testimonials-right flex flex-col gap-6">
                    <TestimonialCard
                        v-for="(testimonial, index) in rightColumnTestimonials"
                        :key="`right-${index}`"
                        :name="testimonial.name"
                        :role="testimonial.role"
                        :company="testimonial.company"
                        :testimonial="testimonial.testimonial"
                        :rating="testimonial.rating"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.testimonials { 
    padding: 100px 20px 70px 20px;
    position: relative;
    overflow: hidden;
    margin-top: 0;
}

.testimonials::before {
    content: '';
    position: absolute;
    top: 200px;
    left: -200px;
    width: 800px;
    height: 800px;
    background: linear-gradient(135deg, #7d015840, #12005945, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(60px);
}

.testimonials::after {
    content: '';
    position: absolute;
    bottom: 200px;
    right: -200px;
    width: 800px;
    height: 800px;
    background: linear-gradient(135deg, #04badc40, rgba(255, 255, 255, 0), transparent 70%);
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

.testimonials-column {
    position: relative;
    flex: 1;
    mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
}

.testimonials-left,
.testimonials-middle,
.testimonials-right {
    will-change: transform;
    backface-visibility: hidden;
    transform: translateZ(0);
}

@media (max-width: 768px) {
    .testimonials {
        padding: 50px 20px;
    }
    
    .title_text {
        font-size: 36px;
        letter-spacing: 10px;
    }
    
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
    
    .testimonials-column {
        height: 600px;
    }
}
</style>
