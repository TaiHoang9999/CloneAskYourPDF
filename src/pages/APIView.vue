<template>
    <Header />
    <Hero  :fontsSizeHero="'16px'"/>
    <section class = "pricing">
        <div class="pricing-container">
            <h1>AskYourPDF API Pricing</h1>
            <p>Select a preferred pricing plan to get started</p>
            <div class="pricing-list">
                <div class="pricing-item">
                    <div class="pricing-item-title">Free Plan</div>
                    <div class="pricing-item-number">
                        <span>$0</span>/month
                    </div>
                    <div class="pricing-item-description">100 messages monthly</div>
                </div>
                <div class="pricing-item">Pro Plan</div>
                <div class="pricing-item">Enterprise Plan</div>
            </div>
           
        </div>
       
    </section>
    <Footer />
</template>

<script>
export default {
    name: "APIView",
};
</script>
<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import Hero from "@/components/layouts/Hero.vue";
</script>

<style scoped>
    .pricing
    {
        height: 550px;
        position: relative;
    }
   .pricing-container
   {
    position: absolute;
    right:0;
    left:0;
    padding: 44px;
    background:purple;
    top:-155px;
    z-index: 999;
    margin:0 auto;
    max-width: 1324px;
    padding: 44px;
    border-radius: 25px;
   }
    .pricing-item
    {
        height: 100px;
        background-color: yellow;
        border-radius: 12px;
    }
    .pricing-container > h1, p
    {
        text-align: center;
    }

    .pricing-container > h1
    {
        color: rgb(47, 43, 67);
        font-size: 32px;
        font-weight: 700;
        line-height: 54px;

    }
    .pricing-container > p
    {
        color: rgba(47, 43, 67, 0.6);
        font-size: 16px;
    font-weight: 400;
    }
    .pricing-list
    {
        margin-top: 28px;
    }
    .pricing-item
    {
        padding: 16px 16px 16px 24px;
        margin-bottom: 20px;
    }
    .pricing-item-title
    {
        border-radius: 16px;
    }


</style>