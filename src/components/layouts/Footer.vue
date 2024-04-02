<template>
    <footer>
        <div class="footer-container">
            <div class="footer-left">
                <div class="footer-left-top">
                    <img src="@/assets/images/logo.svg" alt="" />
                </div>

                <div class="footer-left-mid">
                    <p>
                        We built AskYourPDF as the only ChatPDF AI App you will
                        ever need. Easily upload your PDF files and engage with
                        our intelligent chat AI to extract valuable information
                    </p>
                </div>

                <div class="footer-left-bottom">
                    <a href="https://google.com/" class="footer-left-items">
                        <img
                            class="footer-left-items"
                            src="@/assets/images/linkedin.svg"
                            alt=""
                        />
                    </a>

                    <a href="https://google.com/" class="footer-left-items">
                        <img
                            class="footer-left-items"
                            src="@/assets/images/twitter.svg"
                            alt=""
                        />
                    </a>

                    <a href="https://google.com/" class="footer-left-items">
                        <img
                            class="footer-left-items"
                            src="@/assets/images/discord.svg"
                            alt=""
                        />
                    </a>

                    <a href="https://google.com/" class="footer-left-items">
                        <img
                            class="footer-left-items"
                            src="@/assets/images/instagram.svg"
                            alt=""
                        />
                    </a>

                    <a href="https://google.com/" class="footer-left-items">
                        <img
                            class="footer-left-items"
                            src="@/assets/images/tiktok.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>

            <div class="footer-right">
                <div class="footer-right-content">
                    <div class="footer-right-title">Products</div>
                    <ul class="footer-right-list-item">
                        <li>
                            <a href="" class=""> API </a>
                        </li>

                        <li>
                            <a href="" class=""> Chrome Extension </a>
                        </li>

                        <li>
                            <a href="" class=""> Zotero Plugin </a>
                        </li>

                        <li>
                            <a href="" class=""> Android App </a>
                        </li>

                        <li>
                            <a href="" class=""> iOS App </a>
                        </li>

                        <li>
                            <a href="" class=""> Chat </a>
                        </li>

                        <li>
                            <a href="" class=""> File Upload </a>
                        </li>
                        <li>
                            <a href="" class=""> PDF To Chat </a>
                        </li>
                    </ul>
                </div>

                <div class="footer-right-content">
                    <div class="footer-right-title">Free Tools</div>
                    <ul class="footer-right-list-item">
                        <li>
                            <a href="" class=""> Literature Review Writer </a>
                        </li>

                        <li>
                            <a href="" class=""> Source Tool </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Essay Maker </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Thesis Statement </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Story Generator </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Poem Generator </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Lyrics Generator </a>
                        </li>
                        <li>
                            <a href="" class=""> AI Rap Generator </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Book Title Generator </a>
                        </li>

                        <li>
                            <a href="" class=""> AI Instagram Caption </a>
                        </li>

                        <li>
                            <a href="" class=""> PDF Merger </a>
                        </li>

                        <li>
                            <a href="" class=""> PDF Splitter </a>
                        </li>

                        <li>
                            <a href="" class=""> OCR PDF Reader </a>
                        </li>
                    </ul>
                </div>

                <div class="footer-right-content">
                    <div class="footer-right-title">Developers</div>
                    <ul class="footer-right-list-item">
                        <li>
                            <a href="" class=""> Developer Docs </a>
                        </li>

                        <li>
                            <a href="" class=""> Getting Started </a>
                        </li>
                    </ul>
                </div>

                <div class="footer-right-content">
                    <div class="footer-right-title">Company</div>
                    <ul class="footer-right-list-item">
                        <li>
                            <a href="" class=""> Help </a>
                        </li>

                        <li>
                            <a href="" class=""> Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="" class=""> Privacy Policy </a>
                        </li>

                        <li>
                            <a href="" class=""> FAQs </a>
                        </li>

                        <li>
                            <a href="" class=""> Contact Us </a>
                        </li>

                        <li>
                            <a href="" class=""> Blog </a>
                        </li>

                        <li>
                            <a href="" class=""> Affiliate Program </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-end">
            <a href=""> ProtonLabs. All rights reserved. ©2024 </a>

            <a href=""> support@askyourpdf.com </a>
        </div>
    </footer>
</template>

<script setup>
</script>
    
<style scoped>
footer {
    padding: 64px;
}
.footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.footer-left-mid {
    margin: 28px 0 58px;
}

.footer-left-mid p {
    max-width: 323px;
}
.footer-left-bottom {
    display: flex;
    gap: 18px;
}
.footer-right {
    display: flex;
}
.footer-right-content {
    margin-right: 24px;
    width: 182px;
    padding-bottom: 24px;
}
.footer-right-title {
    margin-bottom: 32px;
    color: rgb(141, 134, 152);
    font-weight: 500;
    font-size: 15px;
}
.footer-right-list-item > li {
    margin-bottom: 16px;
}

.footer-right-list-item > li > a {
    color: rgb(23, 18, 31);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}
.footer-end {
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid rgb(23, 18, 31);
    padding-top: 17px;
}
.footer-end > a {
    padding-top: 5px;
    color: rgb(102, 112, 133);
    font-size: 14px;
    font-weight: 400;
}
</style>