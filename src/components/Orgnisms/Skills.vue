<script setup>
import { ref, onMounted } from 'vue';

const skills = ref([
  { name: 'HTML/CSS', percentage: 95 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'TypeScript', percentage: 75 },
  { name: 'React.js', percentage: 80 },
  { name: 'Next.js', percentage: 80 },
  { name: 'Vue.js', percentage: 70 },
  { name: 'Node.js', percentage: 85 },
  { name: 'WordPress', percentage: 90 },
  { name: 'Webflow', percentage: 65 },
  { name: 'Shopify', percentage: 70 },
]);

const isVisible = ref(false);
const animatedSkills = ref(skills.value.map(() => ({ percentage: 0 })));

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true;
          animateProgressBars();
        }
      });
    },
    { threshold: 0.2 }
  );

  const section = document.querySelector('.skills-section');
  if (section) {
    observer.observe(section);
  }
});

const animateProgressBars = () => {
  skills.value.forEach((skill, index) => {
    let current = 0;
    const target = skill.percentage;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      animatedSkills.value[index].percentage = Math.round(current);
    }, 16);
  });
};
</script>

<template>
  <section class="skills bg-[black]">
    <div class="skills-wrapper max-w-[1200px] mx-auto px-5">
      <div class="divider-line"></div>
      
      <div class="skills-section" :class="{ 'fade-in': isVisible }">
        <div class="skills-list">
          <div 
            v-for="(skill, index) in skills" 
            :key="skill.name"
            class="skill-item"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percentage">
                {{ animatedSkills[index].percentage }}%
              </span>
            </div>
            <div class="progress-bar-container">
              <div 
                class="progress-bar"
                :style="{ width: isVisible ? skill.percentage + '%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
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

.skills-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.skills-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.skill-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  transition-delay: var(--delay);
}

.skills-section.fade-in .skill-item {
  opacity: 1;
  transform: translateY(0);
}

.skills-list {
  max-width: 900px;
  margin: 0 auto;
}

.skill-item {
  margin-bottom: 32px;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.skill-name {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.skill-percentage {
  color: white;
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(135deg, #7d0158, #120059);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px white;
}

.progress-bar-container {
  width: 100%;
  height: 14px;
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

@media (max-width: 768px) {
  .title_text {
    font-size: 32px;
    letter-spacing: 10px;
  }
  
  .skills-list {
    max-width: 100%;
  }
  
  .skill-item {
    margin-bottom: 28px;
  }
  
  .skill-name,
  .skill-percentage {
    font-size: 16px;
  }
  
  .progress-bar-container {
    height: 12px;
  }
}
</style>
