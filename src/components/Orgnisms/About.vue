<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.1 }
  );

  const section = document.querySelector('.about-section');
  if (section) {
    observer.observe(section);
  }
});
</script>

<template>
  <section class="about bg-[black]">
    <div class="about-wrapper max-w-[1200px] mx-auto px-5">
      <div class="about-section py-[70px]" :class="{ 'fade-in': isVisible }">
        <div class=" flex flex-col ">
          <div class="flex justify-between pb-[50px]">
            <div class="">
              <h3>About Me</h3>
              <h2
              class="title_text flex text-center uppercase gap-[7px] tracking-[4px] mb-[40px] text-[25px] font-bold text-white">
              Creative strategy for <span class="section_title">UNIQUE brands</span>
            </h2>
            </div>
            <p class="text-[#ffff] text-center text-lg w-[500px] leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I specialize in creating beautiful, responsive, and high-performance web applications
              that deliver exceptional user experiences.
            </p>
          </div>

          <div class="about-stats">
            <div class="flex w-[100%] justify-between">
              <div class="stat-card relative">
                <div class="absolute top-[13px] left-[0px]">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="absolute bottom-[13px] right-[0px] rotate-180">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="icon border-[1px] border-[#ffff] rounded-[100px] p-[7px] w-[50px] h-[50px]">
                  <img src="/users.svg" alt="users" class="w-[100%] rounded-[100%]">
                </div>
                <div class="flex flex-col items-start justify-center">
                  <div class="stat-number">3+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
              </div>
              <div class="stat-card mt-[200px] relative">
                <div class="absolute top-[13px] left-[0px]">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="absolute bottom-[13px] right-[0px] rotate-180">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="icon border-[1px] border-[#ffff] rounded-[100px] p-[7px] w-[50px] h-[50px]">
                  <img src="/users.svg" alt="users" class="w-[100%] rounded-[100%]">
                </div>
                <div class="flex flex-col items-start justify-center">
                  <div class="stat-number">70+</div>
                  <div class="stat-label">Projects Completed</div>
                </div>
              </div>
              <div class="stat-card relative">
                <div class="absolute top-[13px] left-[0px]">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="absolute bottom-[13px] right-[0px] rotate-180">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="icon border-[1px] border-[#ffff] rounded-[100px] p-[7px] w-[50px] h-[50px]">
                  <img src="/users.svg" alt="users" class="w-[100%] rounded-[100%]">
                </div>
                <div class="flex flex-col items-start justify-center">
                  <div class="stat-number">9+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
              </div>
              <div class="stat-card mt-[200px] relative">
                <div class="absolute top-[13px] left-[0px]">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="absolute bottom-[13px] right-[0px] rotate-180">
                  <div class="w-[30px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                  <div class="w-[30px] rotate-90 mt-[-52px] ml-[8px]"><img src="/line.png" alt="edge" class="w-[100%] "></div>
                </div>
                <div class="icon border-[1px] border-[#ffff] rounded-[100px] p-[7px] w-[50px] h-[50px]">
                  <img src="/users.svg" alt="users" class="w-[100%] rounded-[100%]">
                </div>
                <div class="flex flex-col items-start justify-center">
                  <div class="stat-number">5+</div>
                  <div class="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 70px 20px;
  position: relative;
  min-height: 600px;
}

.about::before {
  content: '';
  position: absolute;
  top: 650px;
  right: -200px;
  width: 1000px;
  height: 800px;
  background: linear-gradient(135deg, #8b005d6a, #8b005d69, transparent 70%);
  border-radius: 100%;
  pointer-events: none;
  z-index: 0;
  filter: blur(60px);
}

.about-wrapper {
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

.about-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.about-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.about-text {
  position: relative;
  z-index: 1;
}

.about-stats {
  position: relative;
  z-index: 1;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #ffffff1a;
  width: 24%;
  height: 400px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.stat-card:hover {
  transform: translateY(-8px);
  border-color: rgba(125, 1, 88, 0.4);
  box-shadow: 0 12px 40px rgba(125, 1, 88, 0.2);
}

.stat-number {
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #7d0158, #120059);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px white;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .title_text {
    font-size: 32px;
    letter-spacing: 10px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stat-card {
    padding: 30px 20px;
  }

  .stat-number {
    font-size: 42px;
  }

  .stat-label {
    font-size: 12px;
    letter-spacing: 2px;
  }
}
</style>
