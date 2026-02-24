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
    }
})
</script>

<template>
    <div class="portfolio_card">
       <div class="flex gap-[30px] items-left p-[30px] rounded-[20px]" :style="{ backgroundColor: bgColor }">
            <div class="portfolio_card_content w-[25%]">
                <h3 class="portfolio_card_title" :style="{ color: titleColor }">{{ title }}</h3>
                <p class="portfolio_card_description mt-[30px]" :style="{ color: descriptionColor }">{{ description }}</p>
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

</style>