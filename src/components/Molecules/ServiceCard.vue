<script setup>
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
    }
})
</script>

<template>
    <div class="service_card  hover:scale-105 transition-all duration-300 flex flex-col items-left justify-between w-[284px] min-h-[450px] bg-gray-800 rounded-lg p-4">
        <div class="icon">
            <img class="w-[50px] h-[50px]" :src="icon" alt="icon">
        </div>
        <div class="title">
            <h3 class=" text_white text-[20px] font-bold">{{ title }}</h3>
        </div>
        <div class="description">
            <p class="text-[16px] text_white font-normal">{{ description }}</p>
        </div>  
        <div class="button">
            <button class="lean_btn hover:scale-105 transition-all duration-300 py-[6px] pl-[14px] pr-[6px] cursor-pointer bg-transparent border-[1px] text_white border-[#ffff] rounded-[30px] flex items-center justify-between w-[100%] text-[16px] font-bold">Learn More <span class="w-[40px] flex items-center justify-center bg-black rounded-full" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></span></button>
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

.lean_btn:hover {
    background: linear-gradient(135deg, #990167, #0C0256);

}

.lean_btn span {
    width: 40px;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    font-weight: 900;
}

.lean_btn svg {
    width: 20px;
    font-weight: 900;
    color: black;
}

</style>