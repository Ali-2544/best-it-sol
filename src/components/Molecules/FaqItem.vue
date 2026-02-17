<script setup>
import { ref } from 'vue';

const props = defineProps({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <div class="faq-item" :class="{ 'is-open': isOpen }">
        <button class="faq-question" @click="toggle">
            <span class="question-text">{{ question }}</span>
            <span class="icon" :class="{ 'rotated': isOpen }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
        </button>
        <div class="faq-answer" :class="{ 'is-open': isOpen }">
            <p class="answer-text">{{ answer }}</p>
        </div>
    </div>
</template>

<style scoped>
.faq-item {
    background: rgba(255, 255, 255, 0.066);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.107);
    border-radius: 16px;
    padding: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 30px rgb(255 255 255 / 14%);
}

.faq-item:hover {
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 40px rgb(255 255 255 / 18%);
}

.faq-item.is-open {
    border-color: rgba(255, 255, 255, 0.3);
}

.faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 28px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease;
}

.faq-question:hover {
    background: rgba(255, 255, 255, 0.03);
}

.question-text {
    font-size: 18px;
    font-weight: 600;
    color: white;
    flex: 1;
    padding-right: 20px;
    line-height: 1.4;
}

.icon {
    width: 24px;
    height: 24px;
    color: white;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon svg {
    width: 100%;
    height: 100%;
}

.icon.rotated {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;
    padding: 0 28px;
}

.faq-answer.is-open {
    max-height: 500px;
    padding: 0 28px 24px 28px;
}

.answer-text {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    padding-top: 16px;
}

@media (max-width: 768px) {
    .faq-question {
        padding: 20px 24px;
    }
    
    .question-text {
        font-size: 16px;
    }
    
    .faq-answer {
        padding: 0 24px;
    }
    
    .faq-answer.is-open {
        padding: 0 24px 20px 24px;
    }
    
    .answer-text {
        font-size: 14px;
    }
}
</style>
