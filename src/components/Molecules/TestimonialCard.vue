<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    testimonial: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 5
    }
})
</script>

<template>
    <div class="testimonial_card mb-[20px] z-[99] hover:scale-105 transition-all duration-300 flex flex-col items-left justify-between w-full min-h-[280px] bg-gray-800 rounded-lg p-6 relative">
        <div class="rating mb-4">
            <div class="flex gap-1">
               <img src="/shopify.svg" alt="shopify" class="w-[50px] h-[50px]">
            </div>
        </div>
        <div class="testimonial_text mb-6">
            <p class="text-[16px] text_white font-normal leading-relaxed">{{ testimonial }}</p>
        </div>
        <div class="author_info">
            <h4 class="text_white text-[18px] font-bold mb-1">{{ name }}</h4>
            <p class="text-[14px] text_white opacity-80">{{ role }}</p>
            <p class="text-[14px] text_white opacity-60">{{ company }}</p>
        </div>
    </div>
</template>

<style scoped>
.testimonial_card {
  background: rgba(255, 255, 255, 0.066); 
  backdrop-filter: blur(10px);           
  -webkit-backdrop-filter: blur(10px);   
  border: 1px solid rgba(255, 255, 255, 0.107); 
  border-radius: 16px;                   
  padding: 24px;
  color: white;
  overflow: hidden;
  box-shadow: 0 4px 30px rgb(255 255 255 / 14%);
}

.testimonial_card::before {
    content: '';
    position: absolute;
    top: -54px;
    left: -54px;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #7d015840, #12005945);
    pointer-events: none;
    border-radius: 50%;
    overflow: hidden;
}
</style>
