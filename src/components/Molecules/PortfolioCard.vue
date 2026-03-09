<script setup>  
const props = defineProps({
    image: {
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
    bgColor: {
        type: String,
        required: true,
    },
    titleColor: {
        type: String,
        required: true,
    },
    descriptionColor: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="portfolio_card">
       <div class="flex gap-[30px] items-left p-[30px] rounded-[20px]" :style="{ backgroundColor: bgColor }">
            <div class="portfolio_card_content w-[25%]">
                <h3 class="portfolio_card_title" :style="{ color: titleColor }">{{ title }}</h3>
                <p class="portfolio_card_description mt-[30px]" :style="{ color: descriptionColor }">{{ description }}</p>
                <a :href="link" target="_blank" class="portfolio_card_link_button" :style="{ color: descriptionColor }">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div> 
            <div class="portfolio_card_image w-[75%]">
                <img :src="image" class="w-[100%] rounded-[20px]" alt="portfolio_card_image">
            </div>
        </div>
    </div>
</template>

<style scoped>

.portfolio_card {
    width: 100%;
    height: 100%;
}

.portfolio_card_title {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 24px;
}

.portfolio_card_description {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: capitalize;
}

.portfolio_card_link_button {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-top: 20px;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.portfolio_card_link_button svg {
    font-size: 20px;
    width: 20px;
    margin-left: 10px;
    rotate: -30deg;
    transition: all 0.3s ease;
}

.portfolio_card_link_button:hover svg {
    rotate: 0deg;
}
</style>