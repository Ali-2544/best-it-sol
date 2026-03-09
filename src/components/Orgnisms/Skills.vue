<script setup>
// Skills section - progress bars moved to ServiceCard components
</script>

<template>
  <section class="skills bg-[black]">
    <div class="skills-wrapper max-w-[1200px] mx-auto px-5">
      <div class="divider-line"></div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 70px 20px;
  position: relative;
  min-height: 600px;
}

.skills::before {
  content: '';
  position: absolute;
  top: 200px;
  left: -200px;
  width: 1000px;
  height: 800px;
  background: linear-gradient(135deg, #8b005d6a, #8b005d69, transparent 70%);
  border-radius: 100%;
  pointer-events: none;
  z-index: 0;
  filter: blur(60px);
}

.skills-wrapper {
  position: relative;
  z-index: 1;
}

.section_title {
  color: transparent;
  -webkit-text-stroke: 1px white;
}

.title_text {
  color: white;
  font-weight: 600;
}

.divider-line {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 40px 0;
}
</style>
