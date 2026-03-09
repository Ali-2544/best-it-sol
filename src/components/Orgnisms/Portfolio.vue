<script setup>
import PortfolioCard from '../Molecules/PortfolioCard.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const portfolioCards = ref([
    {
        image: "/relocate_now.png",
        title: "Relocate Now",
        description: "A comprehensive platform designed to help people seamlessly relocate from one place to another, providing essential services and resources for smooth transitions.",
        bgColor: "#DFCCB4",
        titleColor: "black",
        descriptionColor: "black",
        link: "https://www.relocatenow.io/"
    },
    {
        image: "/strap-up.png",
        title: "Strap up",
        description: "An exclusive online marketplace dedicated to buying and selling luxury watches, connecting collectors and enthusiasts with premium timepieces.",
        descriptionColor: "white",
        titleColor: "white",
        bgColor: "#4f4f4f",
        link: "https://www.strap-up.com/"
    },
    {
        image: "/miegroups.png",
        title: "MIE Groups",
        description: "A leading events management company based in Dubai, specializing in organizing major international trade events including CTW Global, CTW Kenya, and China Trade Week. Successfully delivered 28 websites for their diverse portfolio of events.",
        bgColor: "#a5181d",
        titleColor: "white",
        descriptionColor: "white",
        link: "https://www.miegroups.com/"
    },
    {
        image: "/apex.png",
        title: "Us property Expo",
        description: "A premier expo and exhibition company specializing in showcasing properties across the United States, connecting real estate professionals and potential buyers.",
        bgColor: "#012F6D",
        titleColor: "white",
        descriptionColor: "white",
        link: "https://www.uspropertyexpo.com/"
    },
    {
        image: "/peugeot.png",
        title: "Peugeot Dubai",
        description: "A renowned international car brand with a rich heritage, offering innovative and stylish vehicles. The Dubai dealership showcases the latest Peugeot models and exceptional customer service.",
        bgColor: "#ffffff",
        titleColor: "black",
        descriptionColor: "black",
        link: "https://dubai.peugeot.com/"
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
    const extraSpacing = 200; 
    
    const totalScrollHeight = headerHeight + (cardHeight * cards.length) + (gap * (cards.length - 1)) + viewAllHeight + extraSpacing;

    portfolioSection.value.style.height = `${totalScrollHeight}px`;

    cards.forEach((card, index) => {
        card.style.top = `${stickyTop}px`;
        card.style.zIndex = `${10 + index}`;
    });
};

onMounted(() => {
    setupStickyScroll();
    
    setTimeout(() => {
        setupStickyScroll();
    }, 200);
    
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
                        :descriptionColor="card.descriptionColor" :link="card.link" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.portfolio {
    position: relative;
    padding: 80px 20px;
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