<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Orgnisms/Header.vue';
import Footer from '@/components/Orgnisms/Footer.vue';

const route = useRoute();
const blogPost = ref(null);

const blogPosts = [
    {
        id: 1,
        image: "/hero.jpg",
        title: "Getting Started with Vue 3: A Comprehensive Guide",
        excerpt: "Learn the fundamentals of Vue 3 and how to build modern, reactive web applications with this powerful JavaScript framework.",
        date: "March 15, 2024",
        category: "Development",
        content: `
            <p>Vue 3 represents a significant evolution in the Vue.js framework, introducing the Composition API, improved performance, and better TypeScript support. This comprehensive guide will walk you through everything you need to know to get started with Vue 3.</p>
            
            <h2>What's New in Vue 3?</h2>
            <p>Vue 3 brings several key improvements over Vue 2:</p>
            <ul>
                <li><strong>Composition API:</strong> A new way to organize component logic that makes code more reusable and easier to maintain.</li>
                <li><strong>Performance:</strong> Faster rendering, smaller bundle sizes, and improved reactivity system.</li>
                <li><strong>Better TypeScript Support:</strong> Built with TypeScript, providing better type inference and IDE support.</li>
                <li><strong>Multiple Root Elements:</strong> Components can now have multiple root elements without a wrapper.</li>
            </ul>
            
            <h2>Getting Started</h2>
            <p>To start a new Vue 3 project, you can use the Vue CLI or Vite. Vite is recommended for its faster development experience:</p>
            <pre><code>npm create vue@latest my-vue-app</code></pre>
            
            <h2>The Composition API</h2>
            <p>The Composition API is one of the most significant additions to Vue 3. It allows you to organize component logic by feature rather than by option type, making it easier to share logic between components.</p>
            
            <h2>Conclusion</h2>
            <p>Vue 3 is a powerful framework that makes building modern web applications easier and more enjoyable. With its improved performance and developer experience, it's an excellent choice for your next project.</p>
        `
    },
    {
        id: 2,
        image: "/hero.jpg",
        title: "SEO Best Practices for 2024",
        excerpt: "Discover the latest SEO strategies and techniques that will help your website rank higher in search engine results.",
        date: "March 10, 2024",
        category: "SEO",
        content: `
            <p>Search Engine Optimization (SEO) continues to evolve, and staying up-to-date with the latest best practices is crucial for maintaining and improving your website's search rankings.</p>
            
            <h2>Core Web Vitals</h2>
            <p>Google's Core Web Vitals are essential ranking factors that measure user experience:</p>
            <ul>
                <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. Aim for under 2.5 seconds.</li>
                <li><strong>First Input Delay (FID):</strong> Measures interactivity. Aim for under 100 milliseconds.</li>
                <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. Aim for under 0.1.</li>
            </ul>
            
            <h2>Content Quality</h2>
            <p>High-quality, original content remains the foundation of good SEO. Focus on creating content that:</p>
            <ul>
                <li>Answers user queries comprehensively</li>
                <li>Provides unique value and insights</li>
                <li>Is well-structured with proper headings</li>
                <li>Includes relevant keywords naturally</li>
            </ul>
            
            <h2>Technical SEO</h2>
            <p>Technical SEO ensures search engines can crawl and index your site effectively. Key areas include:</p>
            <ul>
                <li>Mobile-first responsive design</li>
                <li>Fast page load times</li>
                <li>Proper URL structure</li>
                <li>XML sitemaps and robots.txt</li>
            </ul>
        `
    },
    {
        id: 3,
        image: "/hero.jpg",
        title: "Automation Workflows: Streamline Your Business",
        excerpt: "Learn how to automate repetitive tasks and improve your business efficiency with modern automation tools and workflows.",
        date: "March 5, 2024",
        category: "Automation",
        content: `
            <p>Business automation has become essential for staying competitive in today's fast-paced market. By automating repetitive tasks, you can free up time for strategic work and improve overall efficiency.</p>
            
            <h2>Benefits of Automation</h2>
            <p>Automation offers numerous benefits:</p>
            <ul>
                <li>Increased productivity and efficiency</li>
                <li>Reduced human error</li>
                <li>Cost savings</li>
                <li>Better scalability</li>
                <li>Improved employee satisfaction</li>
            </ul>
            
            <h2>Common Automation Opportunities</h2>
            <p>Many business processes can benefit from automation:</p>
            <ul>
                <li>Email marketing campaigns</li>
                <li>Customer support ticketing</li>
                <li>Data entry and reporting</li>
                <li>Social media posting</li>
                <li>Invoice processing</li>
            </ul>
            
            <h2>Getting Started</h2>
            <p>Start by identifying repetitive tasks in your workflow. Then, research automation tools that can help streamline these processes. Popular tools include Zapier, Make (formerly Integromat), and custom scripts.</p>
        `
    },
    {
        id: 4,
        image: "/hero.jpg",
        title: "Building Scalable Web Applications",
        excerpt: "Explore the principles and practices of building web applications that can grow with your business needs.",
        date: "February 28, 2024",
        category: "Development",
        content: `
            <p>Building scalable web applications requires careful planning and architecture decisions from the start. Scalability ensures your application can handle growth in users, data, and traffic.</p>
            
            <h2>Architecture Principles</h2>
            <p>Key principles for scalable architecture:</p>
            <ul>
                <li>Microservices architecture</li>
                <li>Horizontal scaling capabilities</li>
                <li>Stateless design</li>
                <li>Efficient database design</li>
                <li>Caching strategies</li>
            </ul>
            
            <h2>Performance Optimization</h2>
            <p>Performance is crucial for scalability:</p>
            <ul>
                <li>Optimize database queries</li>
                <li>Implement caching layers</li>
                <li>Use CDN for static assets</li>
                <li>Minimize API response times</li>
                <li>Implement lazy loading</li>
            </ul>
        `
    },
    {
        id: 5,
        image: "/hero.jpg",
        title: "Digital Marketing Strategies That Work",
        excerpt: "Discover proven digital marketing strategies that can help you reach your target audience and grow your business.",
        date: "February 20, 2024",
        category: "Marketing",
        content: `
            <p>Effective digital marketing requires a strategic approach that combines multiple channels and tactics to reach and engage your target audience.</p>
            
            <h2>Content Marketing</h2>
            <p>Content is king in digital marketing. Focus on creating valuable, relevant content that:</p>
            <ul>
                <li>Addresses customer pain points</li>
                <li>Establishes your expertise</li>
                <li>Drives organic traffic</li>
                <li>Builds trust and authority</li>
            </ul>
            
            <h2>Social Media Strategy</h2>
            <p>A strong social media presence helps you connect with your audience and build brand awareness. Key strategies include:</p>
            <ul>
                <li>Consistent posting schedule</li>
                <li>Engaging with your audience</li>
                <li>Using platform-specific features</li>
                <li>Analyzing performance metrics</li>
            </ul>
        `
    },
    {
        id: 6,
        image: "/hero.jpg",
        title: "E-commerce Optimization Tips",
        excerpt: "Learn how to optimize your e-commerce store to increase conversions and improve customer experience.",
        date: "February 15, 2024",
        category: "E-commerce",
        content: `
            <p>E-commerce optimization is essential for converting visitors into customers and maximizing revenue. Here are proven strategies to improve your online store.</p>
            
            <h2>User Experience</h2>
            <p>A great user experience is crucial for e-commerce success:</p>
            <ul>
                <li>Fast page load times</li>
                <li>Mobile-responsive design</li>
                <li>Intuitive navigation</li>
                <li>Clear product descriptions</li>
                <li>Easy checkout process</li>
            </ul>
            
            <h2>Conversion Optimization</h2>
            <p>Optimize your store for conversions:</p>
            <ul>
                <li>High-quality product images</li>
                <li>Customer reviews and ratings</li>
                <li>Clear pricing and shipping info</li>
                <li>Trust badges and security indicators</li>
                <li>Abandoned cart recovery</li>
            </ul>
        `
    }
];

onMounted(() => {
    const postId = parseInt(route.params.id);
    blogPost.value = blogPosts.find(post => post.id === postId);
    
    if (!blogPost.value) {
        // Handle case where post is not found
        console.error('Blog post not found');
    }
});
</script>

<template>
    <div class="min-h-screen bg-[#ffff]">
        <header class="bg-white border-b border-gray-200">
            <Header />
        </header>

        <article v-if="blogPost" class="blog-post-container">
            <!-- Breadcrumb -->
            <nav class="blog-breadcrumb">
                <router-link to="/author" class="breadcrumb-link">Home</router-link>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-item">{{ blogPost.category }}</span>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-current">{{ blogPost.title }}</span>
            </nav>

            <!-- Category and Date Badge -->
            <div class="blog-meta">
                <span class="category-badge">{{ blogPost.category }}</span>
                <span class="date-text">{{ blogPost.date }}</span>
            </div>

            <!-- Title -->
            <h1 class="blog-title">
                {{ blogPost.title }}
            </h1>

            <!-- Featured Image -->
            <div class="featured-image-wrapper">
                <img :src="blogPost.image" :alt="blogPost.title" class="featured-image">
            </div>

            <!-- Content -->
            <div class="blog-content">
                <div class="content-body" v-html="blogPost.content"></div>
            </div>

            <!-- Back Button -->
            <div class="back-button-wrapper">
                <router-link to="/author" class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="back-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    <span>Back to Articles</span>
                </router-link>
            </div>
        </article>
        <div v-else class="max-w-[820px] mx-auto mt-[70px] px-4 text-center py-20">
            <h1 class="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p class="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <router-link to="/author" class="text-[#00296b] font-semibold hover:underline">Back to Articles</router-link>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.blog-post-container {
    max-width: 820px;
    margin: 70px auto 60px;
    padding: 0 20px;
}

.blog-breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    font-size: 14px;
    flex-wrap: wrap;
}

.breadcrumb-link {
    color: #00296b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.breadcrumb-link:hover {
    color: #0052CC;
    text-decoration: underline;
}

.breadcrumb-separator {
    color: #9ca3af;
    margin: 0 4px;
}

.breadcrumb-item {
    color: #6b7280;
}

.breadcrumb-current {
    color: #1f2937;
    font-weight: 500;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.blog-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.category-badge {
    display: inline-block;
    background: linear-gradient(135deg, #00296b 0%, #0052CC 100%);
    color: white;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 6px 14px;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 41, 107, 0.2);
}

.date-text {
    color: #6b7280;
    font-size: 14px;
    font-weight: 500;
}

.blog-title {
    font-size: 36px;
    font-weight: 700;
    color: #00296b;
    margin-bottom: 32px;
    line-height: 1.2;
    letter-spacing: -0.5px;
}

.featured-image-wrapper {
    width: 100%;
    height: 450px;
    overflow: hidden;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
}

.featured-image-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 41, 107, 0.05) 0%, transparent 100%);
    z-index: 1;
    pointer-events: none;
}

.featured-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.featured-image-wrapper:hover .featured-image {
    transform: scale(1.02);
}

.blog-content {
    margin-top: 20px;
}

.content-body {
    font-size: 18px;
    line-height: 1.8;
    color: #374151;
}

.content-body :deep(p) {
    margin-bottom: 20px;
    line-height: 1.9;
}

.content-body :deep(h2) {
    font-size: 32px;
    font-weight: 700;
    color: #00296b;
    margin-top: 48px;
    margin-bottom: 20px;
    line-height: 1.3;
    padding-bottom: 12px;
    border-bottom: 2px solid #e5e7eb;
}

.content-body :deep(h3) {
    font-size: 24px;
    font-weight: 600;
    color: #00296b;
    margin-top: 36px;
    margin-bottom: 16px;
}

.content-body :deep(ul),
.content-body :deep(ol) {
    margin-left: 24px;
    margin-bottom: 24px;
    padding-left: 8px;
}

.content-body :deep(li) {
    margin-bottom: 12px;
    line-height: 1.7;
    position: relative;
}

.content-body :deep(ul li) {
    list-style: none;
    padding-left: 24px;
}

.content-body :deep(ul li::before) {
    content: '▸';
    color: #00296b;
    font-weight: bold;
    position: absolute;
    left: 0;
}

.content-body :deep(strong) {
    font-weight: 600;
    color: #00296b;
}

.content-body :deep(pre) {
    background: #1f2937;
    color: #f9fafb;
    padding: 20px;
    border-radius: 12px;
    overflow-x: auto;
    margin: 24px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #00296b;
}

.content-body :deep(code) {
    background: #f3f4f6;
    color: #00296b;
    padding: 3px 8px;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    font-weight: 500;
}

.content-body :deep(pre code) {
    background: transparent;
    color: #f9fafb;
    padding: 0;
}

.content-body :deep(blockquote) {
    border-left: 4px solid #00296b;
    padding-left: 20px;
    margin: 24px 0;
    font-style: italic;
    color: #6b7280;
}

.back-button-wrapper {
    margin-top: 60px;
    padding-top: 32px;
    border-top: 2px solid #e5e7eb;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #00296b;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 12px 20px;
    border-radius: 8px;
    background: #f8f9ff;
}

.back-button:hover {
    color: #0052CC;
    background: #f0f4ff;
    transform: translateX(-4px);
}

.back-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.back-button:hover .back-icon {
    transform: translateX(-4px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .blog-post-container {
        margin-top: 50px;
        padding: 0 15px;
        margin-bottom: 40px;
    }

    .blog-breadcrumb {
        font-size: 13px;
        margin-bottom: 20px;
    }

    .breadcrumb-current {
        max-width: 200px;
    }

    .blog-meta {
        margin-bottom: 16px;
        gap: 12px;
    }

    .category-badge {
        font-size: 10px;
        padding: 5px 12px;
    }

    .date-text {
        font-size: 13px;
    }

    .blog-title {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .featured-image-wrapper {
        height: 300px;
        border-radius: 16px;
        margin-bottom: 32px;
    }

    .content-body {
        font-size: 16px;
    }

    .content-body :deep(h2) {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 16px;
    }

    .content-body :deep(h3) {
        font-size: 20px;
        margin-top: 24px;
    }

    .content-body :deep(p) {
        margin-bottom: 16px;
    }

    .content-body :deep(ul),
    .content-body :deep(ol) {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .back-button-wrapper {
        margin-top: 40px;
        padding-top: 24px;
    }

    .back-button {
        font-size: 15px;
        padding: 10px 16px;
    }
}

/* Tablet Responsive */
@media (min-width: 769px) and (max-width: 1024px) {
    .blog-post-container {
        padding: 0 30px;
    }

    .blog-title {
        font-size: 32px;
    }

    .featured-image-wrapper {
        height: 400px;
    }
}
</style>
