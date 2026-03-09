<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    message: ''
});

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData.value);
    // Reset form
    formData.value = {
        name: '',
        email: '',
        message: ''
    };
};
</script>

<template>
    <section class="contact bg-[black]">
        <div class="contact-wrapper max-w-[1200px] mx-auto px-5">
            <div class="contact-content">
                <h2 class="title_text text-center uppercase tracking-[20px] mb-[40px] text-[48px] font-bold text-white">
                    Contact <span class="section_title">Me</span>
                </h2>
            </div>
            <div class="contact-container flex gap-[60px] items-start pt-[20px]">
                <div class="contact-info w-[40%]">
                    <div class="info-item mb-[50px]">
                        <h3 class="info-title text-white/60 text-[20px] font-semibold mb-[20px] uppercase tracking-[2px]">Get In Touch</h3>
                        <p class="info-description text-white/80 text-[16px] leading-[1.7]">
                            Have a project in mind or want to collaborate? I'd love to hear from you. 
                            Send me a message and I'll respond as soon as possible.
                        </p>
                    </div>
                    <div class="contact-links">
                        <a href="mailto:contact@bestitsol.com" class="contact-link flex items-center mb-[30px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span class="contact-text">contact@bestitsol.com</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="link-arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                        <a href="tel:+1234567890" class="contact-link flex items-center mb-[30px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span class="contact-text">+1 (234) 567-890</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="link-arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="contact-form w-[60%]">
                    <form @submit="handleSubmit" class="form">
                        <div class="form-group mb-[30px]">
                            <label for="name" class="form-label text-white text-[14px] uppercase tracking-[1px] mb-[10px] block font-medium">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                v-model="formData.name" 
                                required
                                class="form-input w-full bg-transparent border border-white/30 rounded-[10px] px-[20px] py-[15px] text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div class="form-group mb-[30px]">
                            <label for="email" class="form-label text-white text-[14px] uppercase tracking-[1px] mb-[10px] block font-medium">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email" 
                                required
                                class="form-input w-full bg-transparent border border-white/30 rounded-[10px] px-[20px] py-[15px] text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div class="form-group mb-[30px]">
                            <label for="message" class="form-label text-white text-[14px] uppercase tracking-[1px] mb-[10px] block font-medium">Message</label>
                            <textarea 
                                id="message" 
                                v-model="formData.message" 
                                required
                                rows="6"
                                class="form-textarea w-full bg-transparent border border-white/30 rounded-[10px] px-[20px] py-[15px] text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button type="submit" class="submit-button button_1 flex items-center gap-[10px]">
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="submit-arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    padding: 80px 20px;
    position: relative;
    background: #000;
}

.contact-wrapper {
    position: relative;
}

.contact-content {
    margin-bottom: 60px;
}

.section_title {
    color: transparent;
    -webkit-text-stroke: 1px white;
}

.title_text {
    color: white;
    font-weight: 600;
}

.contact-link {
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 10px 0;
    gap: 15px;
}

.contact-icon {
    width: 50px;
    height: 50px;
    color: #0066FF;
    stroke-width: 1.5;
    flex-shrink: 0;
}

.contact-text {
    color: #0066FF;
    font-size: 16px;
    font-weight: 400;
    transition: opacity 0.3s ease;
}

.contact-link:hover .contact-text {
    opacity: 0.8;
}

.link-arrow {
    font-size: 20px;
    width: 20px;
    height: 20px;
    color: #0066FF;
    rotate: -30deg;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.contact-link:hover .link-arrow {
    rotate: 0deg;
}

.form-input,
.form-textarea {
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-input:focus,
.form-textarea:focus {
    border-color: rgba(255, 255, 255, 0.5);
    outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.submit-button {
    margin-top: 10px;
}

.submit-arrow {
    font-size: 20px;
    width: 20px;
    height: 20px;
    rotate: -30deg;
    transition: all 0.3s ease;
}

.submit-button:hover .submit-arrow {
    rotate: 0deg;
}

@media (max-width: 768px) {
    .contact {
        padding: 50px 20px;
    }

    .title_text {
        font-size: 36px;
        letter-spacing: 10px;
    }

    .contact-container {
        flex-direction: column;
        gap: 40px;
    }

    .contact-info,
    .contact-form {
        width: 100% !important;
    }

    .contact-icon {
        width: 40px;
        height: 40px;
    }
}
</style>
