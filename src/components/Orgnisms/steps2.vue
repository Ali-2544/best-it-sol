<script setup>

</script>

<template>
<section class="steps2 bg-[black]">
    <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
              How <span class="section_title">We Work</span>
            </h2>
    <div class="divider-line"></div>
    <div class="steps2-wrapper max-w-[1200px] mx-auto relative">
        <div class="design-section">
            <h2 class="design-heading">DISCOVERY</h2>
            <div class="stats-badges">
                <div class="badge badge-top-left">
                    <span class="badge-text">8455 Social Designs</span>
                </div>
                <div class="badge badge-bottom-left">
                    <span class="badge-text">600+ Web Pages Designed</span>
                </div>
                <div class="badge badge-top-right">
                    <span class="badge-text">30 Websites Designed</span>
                </div>
                <div class="badge badge-bottom-right">
                    <span class="badge-text">1200+ videos and animations</span>
                </div>
            </div>
        </div>
    </div>
    <div class="divider-line"></div>
    <div class="steps2-wrapper max-w-[1200px] mx-auto relative">
        <div class="design-section">
            <h2 class="design-heading">DEVELOPMENT</h2>
            <div class="stats-badges">
                <div class="badge badge-top-left">
                    <span class="badge-text">8455 Social Designs</span>
                </div>
                <div class="badge badge-bottom-left">
                    <span class="badge-text">600+ Web Pages Designed</span>
                </div>
                <div class="badge badge-top-right">
                    <span class="badge-text">30 Websites Designed</span>
                </div>
                <div class="badge badge-bottom-right">
                    <span class="badge-text">1200+ videos and animations</span>
                </div>
            </div>
        </div>
    </div>
    <div class="divider-line"></div>
    <div class="steps2-wrapper max-w-[1200px] mx-auto relative">
        <div class="design-section">
            <h2 class="design-heading">DESIGN</h2>
            <div class="stats-badges">
                <div class="badge badge-top-left">
                    <span class="badge-text">8455 Social Designs</span>
                </div>
                <div class="badge badge-bottom-left">
                    <span class="badge-text">600+ Web Pages Designed</span>
                </div>
                <div class="badge badge-top-right">
                    <span class="badge-text">30 Websites Designed</span>
                </div>
                <div class="badge badge-bottom-right">
                    <span class="badge-text">1200+ videos and animations</span>
                </div>
            </div>
        </div>
    </div>
    <div class="divider-line"></div>
    <div class="steps2-wrapper max-w-[1200px] mx-auto relative">
        <div class="design-section">
            <h2 class="design-heading">LAUNCH</h2>
            <div class="stats-badges">
                <div class="badge badge-top-left">
                    <span class="badge-text">8455 Social Designs</span>
                </div>
                <div class="badge badge-bottom-left">
                    <span class="badge-text">600+ Web Pages Designed</span>
                </div>
                <div class="badge badge-top-right">
                    <span class="badge-text">30 Websites Designed</span>
                </div>
                <div class="badge badge-bottom-right">
                    <span class="badge-text">1200+ videos and animations</span>
                </div>
            </div>
        </div>
    </div>
    <div class="divider-line"></div>

</section>
</template>

<style scoped>

.section_title {
  color: transparent;        
  -webkit-text-stroke: 1px white; 
}


.title_text {
    color: white;
    font-weight: 600;
}

.steps2-wrapper{
    background-color: black;
}

.steps2 {
    padding: 70px 20px;
    position: relative;
    min-height: 600px;
}

.divider-line {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 40px 0;
}

.design-section {
    position: relative;
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
}

.design-heading {
    font-size: 180px;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.842);
    letter-spacing: 20px;
    text-transform: uppercase;
    margin: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 1;
    margin-bottom: -200px;
}

.design-heading:hover {
    color: rgba(255, 255, 255, 0.25);
}

.stats-badges {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.badge {
    position: absolute;
    background: #7d0158;
    border-radius: 100px;
    padding: 10px 20px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 99;
}

.design-section:hover .badge {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
}

.badge-top-left {
    top: 20%;
    left: 10%;
    animation-delay: 0.1s;
}

.badge-bottom-left {
    bottom: 20%;
    left: 10%;
    animation-delay: 0.2s;
}

.badge-top-right {
    top: 20%;
    right: 10%;
    animation-delay: 0.3s;
}

.badge-bottom-right {
    bottom: 20%;
    right: 10%;
    animation-delay: 0.4s;
}

.badge-text {
    color: white;
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
}

.buzz-section {
    text-align: center;
    padding: 80px 0;
}

.buzz-heading {
    font-size: 180px;
    font-weight: 900;
    color: white;
    letter-spacing: 20px;
    text-transform: uppercase;
    margin: 0;
}

@media (max-width: 1024px) {
    .design-heading,
    .buzz-heading {
        font-size: 120px;
        letter-spacing: 10px;
    }
    
    .badge {
        padding: 10px 20px;
    }
    
    .badge-text {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .design-heading,
    .buzz-heading {
        font-size: 80px;
        letter-spacing: 5px;
    }
    
    .badge-top-left,
    .badge-bottom-left {
        left: 5%;
    }
    
    .badge-top-right,
    .badge-bottom-right {
        right: 5%;
    }
    
    .badge-text {
        font-size: 12px;
    }
}
</style>