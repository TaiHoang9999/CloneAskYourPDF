<template>
    <header>
        <div class="header-container">
            <div class="header-logo">
                <img src="@/assets/images/doctopusLogo.png" alt="doctopusLogo.png">
            </div>
            <nav class="header-direction">
                <ul>
                    <li>Product</li>
                    <li>Solutions</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </nav>
            <div class="header-right">
                <img src="@/assets/images/header-avatar.png" alt="">
                <button>
                    Upload Document
                </button>
            </div>
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
.header-container
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto 60px;
    padding: 0 0 0 10px;
}

.header-direction>ul
{
    display: flex;
    gap:40px;
    margin: 20px 0;
}
.header-direction>ul>li
{
    font-family: "Source Sans 3";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.header-right
{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:32px;
}
.header-right img
{
    margin:12px 0;
}
.header-right button
{
    display: flex;
    padding: 16px 24px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    background: #066AFF;
}


</style>
