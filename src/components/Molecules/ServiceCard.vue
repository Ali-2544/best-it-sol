<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        default: 0
    }
})

const isVisible = ref(false);
const animatedPercentage = ref(0);
const cardRef = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isVisible.value) {
                    isVisible.value = true;
                    animateProgressBar();
                }
            });
        },
        { threshold: 0.2 }
    );

    if (cardRef.value) {
        observer.observe(cardRef.value);
    }
});

const animateProgressBar = () => {
    let current = 0;
    const target = props.percentage;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        animatedPercentage.value = Math.round(current);
    }, 16);
};
</script>

<template>
    <div ref="cardRef" class="service_card hover:scale-105 transition-all duration-300 flex flex-col items-left justify-between w-[284px] min-h-[450px] bg-gray-800 rounded-lg p-4">
        <div class="icon">
            <img class="w-[50px] h-[50px]" :src="icon" alt="icon">
        </div>
        <div class="title">
            <h3 class=" text_white text-[20px] font-bold">{{ title }}</h3>
        </div>
        <div class="description">
            <p class="text-[16px] text_white font-normal">{{ description }}</p>
        </div>  
        <div class="progress-section">
            <div class="progress-header">
                <span class="progress-label">Proficiency</span>
                <span class="progress-percentage">
                    {{ animatedPercentage }}%
                </span>
            </div>
            <div class="progress-bar-container">
                <div 
                    class="progress-bar"
                    :style="{ width: isVisible ? percentage + '%' : '0%' }"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped >
.service_card {
  background: rgba(255, 255, 255, 0.066); 
  backdrop-filter: blur(10px);           
  -webkit-backdrop-filter: blur(10px);   
  border: 1px solid rgba(255, 255, 255, 0.107); 
  border-radius: 16px;                   
  padding: 20px;
  color: white;
  overflow: hidden;
  box-shadow: 0 4px 30px rgb(255 255 255 / 14%);
  position: relative;
}

.service_card::before {
    content: '';
    position: absolute;
    top: -54px;
    left: -54px;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, rgb(4 186 220 / 40%), rgba(255, 255, 255, 0));
    pointer-events: none;
    border-radius: 50%;
    overflow: hidden;
}

.progress-section {
    width: 100%;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.progress-label {
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.progress-percentage {
    color: white;
    font-size: 16px;
    font-weight: 700;
    background: linear-gradient(135deg, #7d0158, #120059);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px white;
}

.progress-bar-container {
    width: 100%;
    height: 12px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #7d0158, #8b005d, #a0006d);
    border-radius: 10px;
    transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    box-shadow: 0 0 15px rgba(125, 1, 88, 0.4);
}

</style>