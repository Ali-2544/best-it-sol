<script setup>
import BlogCard from '@/components/Molecules/BlogCard.vue';
import Header from '@/components/Orgnisms/Header.vue';
import Footer from '@/components/Orgnisms/Footer.vue';

const author = {
    name: "Zeeshan Ikram",
    role: "Founder",
    image: "/Author.jpeg",
    description: "Founder of SPP.co, with over a decade of experience in agency operations and billing systems. As a former agency owner, Chris developed SPP.co to solve the client management and payment challenges he experienced firsthand. His platform now processes millions in subscription payments for agencies worldwide, giving him unique insights into billing best practices across various service businesses.",
};

const blogPosts = [
    {
        id: 1,
        image: "/hero.jpg",
        title: "Getting Started with Vue 3: A Comprehensive Guide",
        excerpt: "Learn the fundamentals of Vue 3 and how to build modern, reactive web applications with this powerful JavaScript framework.",
        date: "March 15, 2024",
        category: "Development"
    },
    {
        id: 2,
        image: "/hero.jpg",
        title: "SEO Best Practices for 2024",
        excerpt: "Discover the latest SEO strategies and techniques that will help your website rank higher in search engine results.",
        date: "March 10, 2024",
        category: "SEO"
    },
    {
        id: 3,
        image: "/hero.jpg",
        title: "Automation Workflows: Streamline Your Business",
        excerpt: "Learn how to automate repetitive tasks and improve your business efficiency with modern automation tools and workflows.",
        date: "March 5, 2024",
        category: "Automation"
    },
    {
        id: 4,
        image: "/hero.jpg",
        title: "Building Scalable Web Applications",
        excerpt: "Explore the principles and practices of building web applications that can grow with your business needs.",
        date: "February 28, 2024",
        category: "Development"
    },
    {
        id: 5,
        image: "/hero.jpg",
        title: "Digital Marketing Strategies That Work",
        excerpt: "Discover proven digital marketing strategies that can help you reach your target audience and grow your business.",
        date: "February 20, 2024",
        category: "Marketing"
    },
    {
        id: 6,
        image: "/hero.jpg",
        title: "E-commerce Optimization Tips",
        excerpt: "Learn how to optimize your e-commerce store to increase conversions and improve customer experience.",
        date: "February 15, 2024",
        category: "E-commerce"
    }
];
</script>

<template>
    <div class="min-h-screen bg-[#ffff]">
        <header class="bg-white border-b border-gray-200">
            <Header />
        </header>

        <section class="py-30 px-5 mt-[70px] shadow-xl md:py-20">
            <div class="max-w-[1200px] mx-auto items-center justify-center  rounded-[20px]">
                <div
                    class="flex-col md:flex-col items-center justify-center gap-[60px] bg-white p-[30px] rounded-2xl md:gap-[60px] md:p-10 lg:p-[60px]">
                    <div class="flex items-center justify-center mx-auto md:mx-0">
                        <img :src="author.image" :alt="author.name"
                            class="w-[70px] h-[70px] rounded-full object-cover border-2 border-[#00296b] shadow-xl md:w-[200px] md:h-[200px]">
                    </div>
                    <div class="flex  flex-col gap-[7px] text-center md:text-left">
                        <h1 style="font-family: style script;" class="text-[45px] md:text-4xl lg:text-[42px] font-[600] text-[#00296b] mb-2 ">{{ author.name }}</h1>
                        <p class="text-lg text-[#000] font-[600] mb-6">{{ author.role }}</p>
                        <p class=" border-t-[1px] border-[#00296b] pt-[20px] text-base leading-relaxed text-gray-600 mb-5">{{ author.description }}</p>
                        <div class="flex justify-center gap-[15px] mt-[20px] md:justify-center">
                            <a href="https://www.linkedin.com/in/zeeshan-ikram-full-stack-developer/"
                                class="w-[35px] h-[35px] flex items-center justify-center bg-[#00296b] text-[#ffffff] border-2 border-transparent transition-all duration-300 hover:bg-[#ffff] hover:border-[#00296b] hover:text-[#00296b] hover:-translate-y-0.5 hover:shadow-lg no-underline">
                                <svg class="w-6 h-6 fill-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-[60px] px-5 bg-white md:py-[100px]">
            <div class="max-w-[1200px] mx-auto">
                <h2
                    class="text-4xl md:text-5xl lg:text-[48px] font-bold text-gray-900 text-center mb-10 relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-navy after:rounded md:mb-[60px]">
                    Latest Articles
                </h2>
                <div class="flex flex-wrap justify-between md:grid-cols-2 lg:grid-cols-3  px-4 md:px-0">
                    <BlogCard v-for="post in blogPosts" :key="post.id" :id="post.id" :image="post.image" :title="post.title"
                        :excerpt="post.excerpt" :date="post.date" :category="post.category" />
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    section.py-30 {
        margin-top: 50px;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    section.py-\[60px\] {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    div.flex-col {
        padding: 20px !important;
        gap: 30px !important;
    }

    h1.text-\[45px\] {
        font-size: 32px !important;
    }

    h2.text-4xl {
        font-size: 28px !important;
        margin-bottom: 30px !important;
    }

    div.flex.flex-wrap {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 20px;
    }

    div.flex.flex-wrap > * {
        width: 100% !important;
        margin-bottom: 0 !important;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    div.flex.flex-wrap {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px;
    }

    div.flex.flex-wrap > * {
        width: 100% !important;
    }
}

@media (min-width: 1025px) {
    div.flex.flex-wrap {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px;
    }

    div.flex.flex-wrap > * {
        width: 100% !important;
    }
}
</style>
