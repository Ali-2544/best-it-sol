<script setup>

</script>

<template>
    <footer class="footer h-[400px] pt-[70px]">
        <div class="footer-content flex flex-col h-[400px] justify-between max-w-[1200px] mx-auto">
            <div class="footer-content-top flex items-center justify-between">
                <a href="https://bestitsol.com" class="link">Home<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg></a>
                <a href="https://bestitsol.com/services" class="link">Services<svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg></a>
                <a href="https://bestitsol.com/portfolio" class="link">Projects<svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg></a>
                <a href="https://bestitsol.com/blog" class="link">Blog<svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg></a>
                <a href="https://bestitsol.com/about" class="link">About<svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg></a>
                <a href="https://bestitsol.com/contact" class="link">Contact Us<svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg></a>
            </div>
            <div class="footer-content-bottom ">
                <h3 class="footer-title  text-[150px] ">BEST IT SOL</h3>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: transparent;
    color: white;
}

.footer-content {
    position: relative;
}

.footer-content-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
}

.footer-title {

    text-transform: uppercase;
    letter-spacing: 32px;
    font-weight: 700;
}

.link svg {
    font-size: 47px;
    width: 30px;
    color: rgb(255, 255, 255);
    margin-left: 10px;
    rotate: -30deg;
}

.link:hover svg {
    rotate: 0deg;
    transition: all 0.3s ease;
}

.link {
    display: flex;
    font-size: 17px;
    align-items: center;
    text-decoration: none !important;
    color: rgb(255, 255, 255);
}

.link {
    display: flex;
    position: relative;
    z-index: 999;
}
</style>