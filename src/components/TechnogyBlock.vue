<template>
    <div class="technology">
        <p class="technology__pretitle"><span>03</span> SPACE LAUNCH 101</p>
        <img class="technology__img" :src="(screenWidth >= 1300)? tab.images.portrait : tab.images.landscape">
        <ul class="technology__list">
            <li 
                v-for="btn, idx in technology" 
                class="technology__list-item"
                :id="btn.name"
                :class="(btn.name === tab.name) ? 'technology__list-item--active' : undefined"
                @click="tabHandler">
                    {{ idx + 1}}
                </li>
        </ul>
        <p class="technology__term">
            THE TERMINOLOGY…
        </p>
        <h1 class="technology__title">{{ tab.name }}</h1>
        <p class="technology__description">{{ tab.description }}</p>
    </div>

</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { technology } from '../data.json'

const tab = ref(technology[0])

const screenWidth = ref(window.innerWidth)

const onSizeCheckHandler = () => {
  screenWidth.value = window.innerWidth;
}

onMounted(()=> {
  window.addEventListener('resize', onSizeCheckHandler)
})

onBeforeUnmount(()=> {
  window.removeEventListener('resize', onSizeCheckHandler)
})

function tabHandler (e: Event) {
    const el = e.target as Element;
    const idx = technology.findIndex((item) => item.name === el.id);

    tab.value = technology[idx]
    
}

</script>

<style scoped>
    .technology {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 34px;
        padding-bottom: 60px;
    }
    .technology__pretitle {
        color: #FFF;
        font-family: Barlow Condensed;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.7px;
        text-transform: uppercase;
    }
    .technology__pretitle span {
        font-weight: 700;
        opacity: 0.25;
        margin-right: 18px;
    }
    .technology__img {
        display: block;
        width: 101%;
        margin-top: 32px;
    }
    .technology__list {
        list-style: none;
        display: flex;
        gap: 16px;
        margin-top: 16px;
    }
    .technology__list-item {
        color: #FFF;
        text-align: center;
        font-family: 'Bellefair';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    .technology__list-item--active {
        background-color: #FFF;
        color: #0B0D17;
    }
    .technology__term {
        color: #D0D6F9;
        text-align: center;
        font-family: 'Barlow Condensed';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.362px;
        margin-top: 26px;
    }
    .technology__title {
        color: #FFF;
        text-align: center;
        font-family: 'Bellefair';
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        margin-top: 8px;
    }
    .technology__description {
        color: #D0D6F9;
        text-align: center;
        font-family: 'Barlow';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        margin-top: 16px;
        width: 80%;
    }
    @media screen and (min-width: 768px) {
        .technology {
            padding-bottom: 98px;
        }
        .technology__pretitle {
            align-self: flex-start;
            margin-left: 38px;
            font-size: 28px;
            letter-spacing: 3.375px;
        }
        .technology__list {
            margin-top: 56px;
        }
        .technology__list-item {
            width: 60px;
            height: 60px;
            font-size: 24px;
            letter-spacing: 1.5px;
        }
        .technology__term {
            font-size: 16px;
            letter-spacing: 2.7px;
            margin-top: 44px;
        }
        .technology__title {
            font-size: 40px;
            margin-top: 16px;
        }
        .technology__description {
            font-size: 16px;
            line-height: 28px;
        }
    }
    @media screen and (min-width: 1300px) {
        .technology {
            display: grid;
            grid-template-columns: min-content 1fr 1fr;
            grid-template-rows: min-content;
            padding-top: 76px;
        }
        .technology__pretitle {
            grid-column: 1/4;
            grid-row: 1/2;
            margin-left: 160px;
            font-size: 28px;
            letter-spacing: 4.725px;
        }
        .technology__img {
            width: 515px;
            grid-row: 1/5;
            grid-column: 3/4;
            justify-self: end;
        }
        .technology__list {
            flex-direction: column;
            grid-column: 1/2;
            grid-row: 1/5;
            margin-left: 160px;
            margin-right: 80px;
        }
        .technology__list-item {
            width: 80px;
            height: 80px;
            font-size: 32px;
            letter-spacing: 2px;
        }
        .technology__list-item:hover {
            cursor: pointer;
            border-color: #FFF;
        }
        .technology__term {
            justify-self: start;
            align-self: end;
        }
        .technology__title {
            justify-self: start;
            align-self: start;
            font-size: 56px;
        }
        .technology__description {
            text-align: start;
            justify-self: start;
            align-self: start;
            font-size: 18px;
            line-height: 32px;
            margin-top: 0px;
        }
    }
</style>
<style>

</style>