<script setup>

</script>

<template>

<header class="header bg-[black]  py-[20px]">
<div class="header-wrapper flex max-w-[1200px] mx-auto justify-between items-center ">
  <div class="left flex items-center gap-4">
    <div class="logo">
      <h3 class="logo text-[24px] font-[600]" >BEST IT SOL</h3>
    </div>
  </div>
  <div class="menu text-white ">
      <ul class="flex items-center gap-[16px]">
        <li class="list-none text-[16px] cursor-pointer nav-link">Home</li>
        <li class="list-none text-[16px] cursor-pointer nav-link">Services</li>
        <li class="list-none text-[16px] cursor-pointer nav-link">Projects</li>
        <li class="list-none text-[16px] cursor-pointer nav-link">Blog</li>
        <li class="list-none text-[16px] cursor-pointer nav-link">About</li>
        <li class="list-none text-[16px] cursor-pointer nav-link">Contact Us</li>
      </ul>
    </div>
  <div class="right flex items-center gap-4">
    <div class="login">
    <button class="header_cta px-[40px] py-[12px] bg-transparent text-white" >Free Qoute</button>
    </div>
  </div>
</div>
</header>

</template>


<style scoped >
.logo {
    color: white;
}
.nav-link {
    color: white;
}
.header_cta {
  position: relative;
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}

.header_cta::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -150%;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
  transition: transform 0.6s ease, bottom 0.6s ease;
  z-index: -1;
}

.header_cta:hover {
  color: black;
}

.header_cta:hover::before {
  transform: translateX(-50%) scale(1);
  bottom: -50%;
}


</style>