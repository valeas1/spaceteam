<template>
    <div class="mainblock">
        <p class="mainblock-pretitle">SO, YOU WANT TO TRAVEL TO</p>
        <h1 class="mainblock-title">SPACE</h1>
        <p class="mainblock-text">Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we’ll give you a truly out of this world experience!</p>
        <button class="mainblock-btn">EXPLORE</button>
    </div>
</template>

<script setup lang="ts">

</script>
<style scoped>
.mainblock {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 0 10px;
    margin-bottom: 250px;
}
.mainblock-pretitle {
    color: #D0D6F9;
    text-align: center;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    margin-top: 48px;
}
.mainblock-title {
    color: #FFF;
    text-align: center;
    font-family: 'Bellefair';
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 100px;
    margin-top: 24px;
}
.mainblock-text {
    color: #D0D6F9;
    text-align: center;
    font-family: 'Barlow';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin-top: 24px;
}
.mainblock-btn {
    width: 150px;
    height: 150px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 50%;
    color: #0B0D17;
    text-align: center;
    font-family: Bellefair;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.25px;
    margin-top: 80px;
    margin-bottom: 48px;
}
@media screen and (min-width: 768px) {
    .mainblock-pretitle {
        font-size: 20px;
        letter-spacing: 3.375px;
        margin-top: 106px;
    }
    .mainblock-title {
        font-size: 150px;
        line-height: 150px;
    }
    .mainblock-text {
        font-size: 16px;
        line-height: 28px;
        width: 55%;
    }
    .mainblock-btn {
        margin-top: 156px;
        margin-bottom: 90px;
        width: 242px;
        height: 242px;
        font-size: 32px;
        letter-spacing: 2px;
    }
}
@media screen and (min-width: 1300px) {
    .mainblock {
        padding-top: 251px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: max-content max-content max-content;
        justify-items: center;
    }
    .mainblock-pretitle {
        margin: 0;
        grid-column: 1/2 ;
        align-self: self-end;
        font-size: 28px;
        letter-spacing: 4.725px;
        text-align: start;
    }
    .mainblock-title {
        grid-column: 1/2 ;
        text-align: start;
    }
    .mainblock-text {
        grid-column: 1/2 ;
        font-size: 18px;
        line-height: 32px;
        text-align: start;
        padding-left: 30px;
    }
    .mainblock-btn {
        transition: box-shadow .3s ease;
        cursor: pointer;
        margin: 0px;
        grid-column: 2/3 ;
        grid-row: 1/4;
        align-self: end
    }
    .mainblock-btn:hover {
        box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1);
    }
}
</style>