<template>
    <div class="wrapper">
        <main>
            <Header />
            <section class="watch-demo">
                <div class="watch-demo-container">
                    <h1>
                        Don't yawn,
                        <span class="watch-demo-chat">chat</span> with
                        <span class="watch-demo-yourdocument">
                            your document.
                        </span>
                    </h1>
                    <p>
                        Guaranteed to finish reading before you get a chance to
                        yawn. Try it now.
                    </p>

                    <button class="watch-demo-button">
                        Watch A Demo
                        <img src="@/assets/images/icon_right_2.svg" alt="" />
                    </button>
                </div>
            </section>

            <section class="upload">
                <div class="upload-container">
                    <div class="upload-button">
                        <img src="@/assets/images/tamdeptrai.svg" alt="" />
                    </div>
                    <p>Click to upload</p>
                    <span
                        >Supported format .pdf | .docx | doc | .txt | .text |
                        .csv</span
                    >
                    <span>Maximum file size: 20 MB</span>
                </div>
            </section>

            <section class="industry">
                <div class="industry-container">
                    <div class="industry-top">
                        <div class="industry-top-logo">
                            <img
                                src="@/assets/images/industry_logo.svg"
                                alt="industry_logo.svg"
                                class="industry-logo"
                            />
                        </div>

                        <div class="industry-title-description">
                            <h1>
                                Let Doctopus do the heavy lifting for every
                                industry
                            </h1>
                            <p>Read, skip & yawn: We don’t do that here.</p>
                        </div>

                        <ul class="industry-item-list">
                            <li class="industry-item">
                                <img
                                    src="@/assets/images/icon_left.png"
                                    alt="icon_left_1.png"
                                    class="industry-logo"
                                />
                                Education
                            </li>

                            <li class="industry-item">
                                <img
                                    src="@/assets/images/icon_left.png"
                                    alt="icon_left_1.png"
                                    class="industry-logo"
                                />
                                Business & Corporate
                            </li>

                            <li class="industry-item animation-btn">
                                <img
                                    src="@/assets/images/icon_left.png"
                                    alt="icon_left_1.png"
                                    class="industry-logo"
                                />
                                Journalism & Media
                            </li>

                            <li class="industry-item">
                                <img
                                    src="@/assets/images/icon_left.png"
                                    alt="icon_left_1.png"
                                    class="industry-logo"
                                />
                                Legal & Compliance
                            </li>

                            <li class="industry-item">
                                <img
                                    src="@/assets/images/icon_left.png"
                                    alt="icon_left_1.png"
                                    class="industry-logo"
                                />
                                Customer Support
                            </li>

                            <li class="industry-item">
                                <img
                                    src="@/assets/images/icon_left.png"
                                    alt="icon_left_1.png"
                                    class="industry-logo"
                                />
                                Consulting Services
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="education">
                <div class="education-container">
                    <div class="education-left">
                        <div class="education-content">
                           <div class="education-item">
                                <div class="education-icon">      
                                    <img src="@/assets/images/pen.png" alt="">
                                </div>
                                <div class="education-title-description">
                                    <h1>Enhance learning outcomes</h1>
                                    <p class="text">Navigate through extensive research papers, textbooks, and scholarly articles, saving valuable time.</p>
                                </div>

                           </div>

                           <div class="education-item">
                                <div class="education-icon">      
                                    <img src="@/assets/images/pen.png" alt="">
                                </div>
                                <div class="education-title-description">
                                    <h1>Accelerate research & study</h1>
                                    <p class="text">Extract key insights and relevant information from academic literature.</p>
                                </div>

                           </div>

                           <div class="education-item">
                                <div class="education-icon">      
                                    <img src="@/assets/images/pen.png" alt="">
                                </div>
                                <div class="education-title-description">
                                    <h1>Optimize teaching workflows</h1>
                                    <p class="text">Reduce administrative burdens for educators by automating the summarization of course materials.</p>

                                    <a href="" class=" education-button button button-white">
                                        Try sample case here
                                    </a>
                                </div>
                                
                               
                           </div>

                        </div>
                        

                    </div>

                    <div class="education-right">
                        <div class="education-logo">
                            <img src="@/assets/images/education_logo.png" alt="">
                            
                        </div>
                       
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
</script>

<style scoped>
.wrapper {
    /* max-width: 1440px; */
    margin: 0 auto;
    max-width: 1440px;
    margin: 0 auto;
}
.watch-demo {
    margin-bottom: 60px;
}
.watch-demo-container {
    text-align: center;
    max-width: 788px;
    margin: 0 auto;
}
.watch-demo-container > h1 {
    color: #161c24;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; /* 125% */
    margin-bottom: 16px;
}

.watch-demo-container > p {
    color: #212b36;
    text-align: center;
    font-family: "Source Sans 3";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
}

.watch-demo-chat {
    position: relative;

    background: #dfe3e8;
    color: black;
    font-family: Arial;
    font-size: 64px;
    text-align: center;
    border-radius: 16px;
    padding: 0px 14px;
}
.watch-demo-chat::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #dfe3e8;
    transform: rotate(45deg);
    top: 85%;
    margin-left: -20px;
    left: 55%;
    z-index: 1;
    border-radius: 75px 20px 16px 20px;
}
.watch-demo-yourdocument {
    color: #066aff;
    font-family: "Source Sans 3";
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
}
.watch-demo-button {
    margin: 0 auto;
    display: flex;
    padding: 16px 24px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    background: #066aff;
    color: white;
    font-size: 16px;
}
.upload {
    background-color: #ffffff;
    margin: 60px 80px;
    max-width: 817px;
    border-radius: 16px;
    margin: 0 auto;
    padding:40px;
}
.upload-container {
    padding: 24px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    border-radius: 16px;
    background-color: #ffffff;
    border: 1px dashed #1890FF;

}

.upload-button
{
    cursor: pointer;
}
.upload-container > span {
    color: #637381;
    font-family: "Source Sans 3";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
.upload-container > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #161c24;
}
.industry-top-logo,.industry-title-description
{
    margin-bottom:40px;
}

.industry
{
    margin: 160px 0 80px ;

}

.industry-container,.education-container
{
    margin: 0 auto;
    max-width: 1120px;
}
.industry-top
{
    margin: 0 auto;
    width: 810px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.industry-title-description
{
    max-width: 726px;
}
.industry-title-description>h1
{
    color:  #212B36;
    text-align: center;
    font-family: "Source Sans 3";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin-bottom: 16px;
}
.industry-title-description>p
{
    color: #454F5B;
    text-align: center;
    font-family: "Source Sans 3";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
.industry-item-list
{
    max-width: 726px;
    display: flex;
    gap:20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.industry-item
{
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid  #066AFF;
    color: #161C24;
    font-family: "Source Sans 3";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
}
.industry-item-list>li:first-child
{
    color: #066AFF;
}
.education-container
{
    max-width: 1120px;
}
.education-container,
.education-item
{
    display: flex;
    align-items: flex-start;
}

.education-logo
{
    justify-content: center;
    display: flex;
    padding-top: 32px;
}
.education-content
{
    padding-top: 70px;
    max-width: 450px;
}
.education-icon
{
    margin-right: 8px;
}

.education-title-description>h1
{
    margin-bottom: 8px;
    color:  #212B36;
    font-family: "Source Sans 3";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: calc(20/32);
    margin-bottom: 8px;
}
.education-item>p
{
    color:#212B36;
    font-family: "Source Sans 3";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.education-item
{
    margin-bottom: 24px;
}

.education-button
{
    margin:16px 0;
}

.button
{
    border:none;
    margin: 0 auto;
    display: flex;
    padding: 16px 24px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    background: #066aff;
    font-size: 16px;
    width: fit-content;
    cursor: pointer;
    color:  #F9FAFB;
    font-family: "Source Sans 3";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(24/16);
}
.education-logo-tooltip
{
    color:  #161C24;
font-family: "Source Sans 3";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: calc(24/14); 
}
.education-logo
{
    position: relative;
}

.education-logo-tooltip
{
    position: absolute;

}
.tooltip_custom
{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left:3px solid #066AFF;
    backdrop-filter: blur(2px);
    background: rgba(244, 246, 248, 0.90);
    padding: 8px 12px;
    left: 16%;
    bottom: 53%;
}
.tooltip2
{
    left: 22%;
    bottom: 13%;
}

.tooltip3
{
    left: 60%;
    bottom: 43%;
}
.tooltip3-title 
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tooltip3-title-top
{
    display: flex;
    align-items: center;
    gap:0 8px;
}
.tooltip3-title-top>span
{
    color:  #161C24;

font-family: "Source Sans 3";
font-size: 16px;
font-style: normal;
font-weight: 700;;
line-height: (24 /16)
}
.tooltip-text
{
    font-weight: 400;
    font-size: 14px;
    font-family: "Source Sans 3";
    line-height: (20/14);

}
.button-white
{
    color: #066AFF;
    background-color: #FFFFFF;
    border-radius: 4px;
    border: 1px  solid #066AFF ;
    margin: 16px 0;

}
.education-right
{
    margin:0 auto;
}
/* animation btn */
.animation-btn
{
    animation: btn-animation 1s;
}
@keyframes btn-animation
{
    0%
    {
        width: 0;
        left: 50%;
        top: 50%;
    }
    100%
    {
        width: 300px;
        left: 0;
        top: 0;
    }
}
</style>

 
