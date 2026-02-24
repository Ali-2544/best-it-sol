<script setup>

</script>

<template>
<section class="hero ">
  <div class="hero-content flex flex-col items-center justify-between pt-[150px] pb-[50px] h-[700px] max-w-[1200px] mx-auto ">
    <h1 class="hero-title text-[40px] font-bold text-white">ALI MEHTAB</h1>
    <div class="flex flex-col w-[100%] items-center justify-end ">
      <p class="hero-description text-white text-[16px] font-bold">A Pasionate Developer Who loves to code</p>
      <button class="button_1 w-[169px]">Get Started</button>
    </div>
  </div>
</section>
</template>

<style scoped >

.hero {
    background-image: url('/public/hero.jpg');
    background-size: cover;
    background-position: center;
}

.hero-title {
  text-transform: uppercase;    
    text-align: center;
    font-size: 120px;
    text-align: center;
    letter-spacing: 30px;
    font-weight: 600;
    color: white;
}
.hero-description {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  margin-bottom: 20px;
}

</style>