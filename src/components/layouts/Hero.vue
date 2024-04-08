<template>
    <section class="hero">
        <div class="heroImage">
            <img src="@/assets/images/Hero.webp" alt="" />
        </div>

        <div class="heroContent">
            <h1 class="heroDesc1">Build Better With The,</h1>

            <h1 class="heroDesc2">
                <span> AskYourPDF API</span>
            </h1>

            <p class="heroDescription" :style="{fontSize: fontsSizeHero}">
                Experience Seamless Integration and Unparalleled PDF Processing
                Capabilities with AskYourPDF API
            </p>

            <button class="uploadDocument">
                <div>
                    <img src="@/assets/images/upload.svg" alt="" />
                </div>

                <p>Read Document</p>
            </button>
        </div>
    </section>
</template>


<script setup>
defineProps({
    fontsSizeHero: String,
    default: '14px'
});
</script>

<style scoped>
.hero {
    background-color: rgb(10, 10, 10);
    position: relative;
    z-index: 10;
    padding-block: 250px;
}

.heroImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: 7s linear 0s infinite alternate none running animatedHero;
    z-index: -1;
}

@keyframes animatedHero {
    0% {
        transform: translate(-50%, -50%) scale(0.6);
    }
    50% {
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        transform: translate(-50%, -50%) scale(0.6);
    }
}

.heroContent {
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    gap: 6px;
}

.heroDesc1,
.heroDesc2 {
    color: white;
    font-size: 50px;
    line-height: calc(65 / 50);
}
.heroDesc2 {
    margin-bottom: 24px;
}
.heroDesc2 span {
    color: #edb01a;
}
.heroDescription {
    color: white;
    font-weight: 500;
    max-width: 588px;
    margin: 0 auto;
    line-height: 25px;
}

.uploadDocument,
.btnDownloadExtension {
    margin: 32px 0;
    background: #edb01a;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px auto 16px;
    padding: 15px;
    gap: 10px;
    font-weight: 700;
    cursor: pointer;
}
.heroContentText {
    font-size: 14px;
    color: white;
    font-weight: 600;
    margin-bottom: 30px;
}
</style>