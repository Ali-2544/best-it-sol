<script setup>
import PortfolioCard from '../Molecules/PortfolioCard.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const portfolioCards = ref([
    {
        image: "/relocate_now.png",
        title: "Relocate Now",
        description: "We create fully responsive, secure, and high-performing WordPress websites. Custom designs, SEO-ready structure, and optimized performance help businesses establish a strong online presence and grow effectively.",
        bgColor: "#DFCCB4",
        titleColor: "black",
        descriptionColor: "black"
    },
    {
        image: "/darkness_unlimited.png",
        title: "Darkness Unlimited",
        description: "We create fully responsive, secure, and high-performing WordPress websites. Custom designs, SEO-ready structure, and optimized performance help businesses establish a strong online presence and grow effectively.",
        bgColor: "#E93B17",
        titleColor: "white",
        descriptionColor: "white"
    },
    {
        image: "/IES.png",
        title: "IES",
        description: "We create fully responsive, secure, and high-performing WordPress websites. Custom designs, SEO-ready structure, and optimized performance help businesses establish a strong online presence and grow effectively.",
        bgColor: "#012F6D",
        titleColor: "white",
        descriptionColor: "white"
    },
    {
        image: "/xuxa_pakistan.png",
        title: "Xuxa Pakistan",
        description: "We create fully responsive, secure, and high-performing WordPress websites. Custom designs, SEO-ready structure, and optimized performance help businesses establish a strong online presence and grow effectively.",
        bgColor: "#D5EED1",
        titleColor: "black",
        descriptionColor: "black"
    }
]);

const portfolioSection = ref(null);

const setupStickyScroll = () => {
    if (!portfolioSection.value) return;

    const cards = portfolioSection.value.querySelectorAll('.portfolio-card-item');
    if (cards.length === 0) return;

    const header = portfolioSection.value.querySelector('.portfolio-content');
    if (!header) return;

    const viewAllProjects = portfolioSection.value.querySelector('.view-all-projects');
    
    const headerHeight = header.offsetHeight;
    const cardHeight = cards[0].offsetHeight;
    const gap = 20;
    const stickyTop = headerHeight;
    const viewAllHeight = viewAllProjects ? viewAllProjects.offsetHeight : 80;
    const extraSpacing = 200; // Extra spacing to prevent overlap
    
    const totalScrollHeight = headerHeight + (cardHeight * cards.length) + (gap * (cards.length - 1)) + viewAllHeight + extraSpacing;

    portfolioSection.value.style.height = `${totalScrollHeight}px`;

    cards.forEach((card, index) => {
        card.style.top = `${stickyTop}px`;
        card.style.zIndex = `${10 + index}`;
    });
};

onMounted(() => {
    // Run immediately
    setupStickyScroll();
    
    // Run after a short delay to ensure DOM is ready
    setTimeout(() => {
        setupStickyScroll();
    }, 200);
    
    // Run after window load to ensure all assets are loaded (important for production)
    window.addEventListener('load', () => {
        setTimeout(() => {
            setupStickyScroll();
        }, 100);
    });

    window.addEventListener('resize', setupStickyScroll);
});

onUnmounted(() => {
    window.removeEventListener('resize', setupStickyScroll);
});
</script>

<template>
    <section class="portfolio" ref="portfolioSection">
        <div class="portfolio-wrapper max-w-[1200px] mx-auto">
            <div class="portfolio-content sticky top-0 z-10">
                <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
                    Our <span class="section_title">Portfolio</span>
                </h2>
            </div>
            <div class="portfolio-cards ">
                <div v-for="(card, index) in portfolioCards" :key="index" class="portfolio-card-item pb-[30px]">
                    <PortfolioCard :image="card.image" :title="card.title" :description="card.description"
                        :bgColor="card.bgColor" :titleColor="card.titleColor"
                        :descriptionColor="card.descriptionColor" />
                </div>
            </div>
            <div class="view-all-projects text-center items-center justify-center  py-[20px]">
                <a href="https://bestitsol.com/portfolio" class="link">View All Projects <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.portfolio {
    position: relative;
    padding: 80px 20px;
    padding-bottom: 120px;
    margin-bottom: 200px;
    background: #000;
    overflow: visible;
}

.portfolio-wrapper {
    position: relative;
}

.portfolio-content {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px 0 40px 0;
    margin-bottom: 0;
}

.section_title {
    color: transparent;
    -webkit-text-stroke: 1px white;
}

.title_text {
    color: white;
    font-weight: 600;
}

.portfolio-cards {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
}

.portfolio-card-item {
    position: sticky;
    width: 100%;
    will-change: transform;
}

.view-all-projects a svg{
    font-size: 47px;
    width: 30px;
    color: white;
    margin-left: 10px;
    rotate: -30deg;
}

.view-all-projects a:hover svg {
    rotate: 0deg;
    transition: all 0.3s ease;
}
.view-all-projects a {
    display: flex;
    font-size: 17px;
    align-items: center;
    text-decoration: none !important;
    color: white;
}

.view-all-projects {
    display: flex;
    position: relative;
    z-index: 10;
    margin-top: 40px;
    padding-top: 40px;
}

@media (max-width: 768px) {
    .portfolio {
        padding: 50px 20px;
    }

    .title_text {
        font-size: 36px;
        letter-spacing: 10px;
    }

    .portfolio-content {
        padding: 15px 0 30px 0;
    }
}
</style>