<template>
    <!-- <div id="Home">
       
    </div> -->
    <header>
            <div class="divHeader container">
                <ul class="ulHeader">
                    <div class="logo">
                        <img src="@/assets/images/logo.svg" alt="">
                    </div>
                    <li class="liHeader">
                        Home
                    </li>

                    <li class="liHeader">
                        ✨
                        Conversations
                    </li>

                    <div class="header_Plugins">
                        <button class="header_Plugins_Button">
                            Plugins
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                viewBox="0 0 256 256">
                                <path
                                    d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z">
                                </path>
                            </svg>
                        </button>
                        <div class="header_Plugins_Button_NoShow">
                            <a href="chrome_extension">Chrome Extension</a>
                            <a href="for_zotero">For Zotero</a>
                        </div>
                    </div>

                    <li class="liHeader">
                        Pricing
                    </li>

                    <li class="liHeader">
                        Download
                    </li>

                    <li class="liHeader">
                        API
                    </li>

                    <button href="#" class=btnlanguageHeader>
                        EN
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 256 256">
                            <path
                                d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z">
                            </path>
                        </svg>
                    </button>

                    <button href="#" class=btnStartForFree>
                        Start For Free
                        <img src="@/assets/images/startforfree_icon.svg" alt="">
                    </button>
                </ul>
            </div>
        </header>
</template>




<script>
export default
    {
        name: 'HeaderMain',
        props:
        {
        }
    }
</script>



<style scoped>
#Home {
    width: 100%;
    min-height: 100vh;
    position: relative;
}

header {
    position: fixed;
    top: 21px;
    width: 100%;
    z-index: 11;

}

.divHeader {
    display: flex;
    justify-content: center;
}

.ulHeader {
    display: flex;
    align-items: center;
    gap: 24px;
    background-color: rgba(13, 13, 13, 0.8);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    color: #ffffff;
    padding: 12px;
}

.liHeader {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
}

.btnlanguageHeader,
.btnStartForFree {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    background-color: rgb(49, 49, 49);
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 14px;
    gap: 8px;
    height: 40px;
    text-decoration: none;
    cursor: pointer;

}

.header_Plugins {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: 80%;
}

.header_Plugins_Button {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    background: none;
}

.header_Plugins_Button_NoShow {
    display: none;
}

ul .header_Plugins:hover .header_Plugins_Button_NoShow {
    display: flex;
    padding: 15px;
    border-radius: 12px;
    gap: 12px;
    background: rgb(60, 60, 60);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
    border: 1px solid rgba(13, 13, 13, 0.8);

    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 30px;
    left: 40px;
    min-width: 116px;
    min-height: 60px;
    line-height: 22px;
}

.header_Plugins_Button_NoShow a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    background: rgb(60, 60, 60);
    font-size: 14px;
    font-weight: 500;
}
</style>
