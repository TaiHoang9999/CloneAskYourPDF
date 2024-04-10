<template>
    <Header />
    <Hero :fontsSizeHero="'16px'" />
    <section class="pricing">
        <div class="pricing-container">
            <h1>AskYourPDF API Pricing</h1>
            <p>Select a preferred pricing plan to get started</p>
            <div class="pricing-list">
                <div class="pricing-item">
                    <div class="pricing-item-title">Free Plan</div>
                    <h1 class="pricing-item-price">$0<span>/month</span></h1>
                    <div class="pricing-item-description">
                        <p>
                            100 messages
                            <span>monthly</span>
                        </p>
                        <p>|</p>
                        <p>
                            5000 document pages
                            <span>monthly</span>
                        </p>
                    </div>
                </div>

                <div class="pricing-item best-sales">
                    <div class="pricing-item-title-container">
                        <div
                            class="pricing-item-title"
                            style="color: rgb(2, 122, 72)"
                        >
                            Pro Plan
                        </div>
                        <button class="btn-upgrade-plan">Upgrade Plan</button>
                    </div>
                    <h1 class="pricing-item-price">
                        ${{price}}<span>/month</span>
                    </h1>

                    <div class="pricing-slider">
                        <div class="pricing-slider-bar" @mouseup="test($event)" @mousedown="test($event)"></div>

                        <div class="pricing-slider-track"></div>

                        <div class="pricing-slider-circle" :style="{ left: circleLeft }"></div>

                    </div>

                    <div class="pricing-item-description">
                        <p>
                            2000 messages
                            <span>monthly</span>
                        </p>
                        <p>|</p>
                        <p>
                            30000 document pages
                            <span>monthly</span>
                        </p>
                    </div>
                </div>

                <div class="pricing-item">
                    <div class="pricing-item-title-container">
                        <div
                            class="pricing-item-title"
                            style="color: rgb(2, 122, 72)"
                        >
                        Enterprise Plan
                        </div>
                        <button class="btn-upgrade-plan">Contact Us</button>
                    </div>
                    
                    <p style="text-align:left; margin-top:8px">
                        Custom and flexible pricing for high volume processing
                    </p>
                </div>
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
import { ref } from 'vue';

const price = ref(19.99);
const circleLeft = ref ('0%');

const test = (e) =>{
    let a = (e.offsetX / e.target.offsetWidth) * 100;
    circleLeft.value=a + '%';
}

</script>

<style scoped>
.pricing {
    height: 550px;
    position: relative;
}
.pricing-container {
    position: absolute;
    right: 0;
    left: 0;
    padding: 44px;
    background: #FFFF   ;
    top: -150px;
    z-index: 999;
    margin: 0 auto;
    max-width: 1324px;
    padding: 44px;
    border-radius: 25px;
}
.pricing-item {
    background-color: rgb(255, 255, 255) ;
    border-radius: 12px;
}
.pricing-container > h1,
p {
    text-align: center;
}

.pricing-container > h1 {
    color: rgb(47, 43, 67);
    font-size: 32px;
    font-weight: 700;
    line-height: 54px;
}
.pricing-container > p {
    color: rgba(47, 43, 67, 0.6);
    font-size: 16px;
    font-weight: 400;
}
.pricing-list {
    margin-top: 28px;
}
.pricing-item {
    padding: 16px 16px 16px 24px;
    margin-bottom: 20px;
    border: 1px solid rgb(214, 217, 224);
}
.pricing-item-title {
    width: fit-content;
    background-color: red;
    padding: 2px 10px;
    border-radius: 16px;
    background: rgb(242, 244, 247);
    color: rgb(52, 64, 84);
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
}
.pricing-item-price {
    line-height: 60px;
    font-size: 28px;
    font-weight: 700;
    color: rgb(44, 44, 44);
}
.pricing-item-description {
    display: flex;
    gap: 2px;
}
.pricing-item-description > p {
    font-weight: 700;
    color: rgb(20, 23, 24);
    font-size: 14px;
    line-height: 20px;
}
.pricing-list span {
    font-weight: 400;
}
.best-sales {
    border: 2px solid rgb(71, 84, 103);
}
.pricing-item-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn-upgrade-plan {
    color: white;
    background: black;
    padding: 8px 14px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
}

.pricing-slider
{
    box-sizing: border-box;
    margin: 11px 5px;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    position: relative;
    height: 10px;
    cursor: pointer;
    touch-action: none;
}
.pricing-slider-bar
{
    height: 8px;
    border-radius: 4px;
    background: rgb(243, 243, 243);
    position:absolute;
    width: 100%;

}

.pricing-slider-track
{
    height: 8px;
    border-radius: 4px;
    background: rgb(2, 122, 72);
    left: 0%;
    width: 0%;
}

.pricing-slider-circle::after
{
    content:"";
    position: absolute;
    background: rgb(2,122,72);
    width: 25px;
    height: 25px;
    border-radius: 100rem;
    cursor:pointer;
    transform: translate(-50%,-50%);
}
.pricing-slider-circle
{
    position: absolute;
    left: 0%;
    top: 50%;
}



































</style>





















