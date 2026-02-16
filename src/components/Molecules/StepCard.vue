<script setup>
const props = defineProps({
    stepNumber: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="step_card hover:scale-105 transition-all duration-300 flex flex-col items-left justify-between w-[284px] min-h-[300px] bg-gray-800 rounded-lg p-4 relative">
        <div class="step_number">
            <span class="text-[48px] font-bold text_white opacity-20">{{ stepNumber }}</span>
        </div>
        <div class="title">
            <h3 class="text_white text-[20px] font-bold">{{ title }}</h3>
        </div>
        <div class="description">
            <p class="text-[16px] text_white font-normal">{{ description }}</p>
        </div>  
    </div>
</template>

<style scoped>
.step_card {
  background: rgba(255, 255, 255, 0.066); 
  backdrop-filter: blur(10px);           
  -webkit-backdrop-filter: blur(10px);   
  border: 1px solid rgba(255, 255, 255, 0.107); 
  border-radius: 16px;                   
  padding: 20px;
  color: white;
  overflow: hidden;
  box-shadow: 0 4px 30px rgb(255 255 255 / 14%);
}

.step_card::before {
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

    .step_number {
        position: absolute;
        top: 20px;
        right: 20px;
        line-height: 1;
    }
    .step_number_text {

    background: linear-gradient(135deg, #7d0158, #120059);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px white;
    }
</style>
