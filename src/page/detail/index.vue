<template>
    <div class="detail-page-container">
        <!-- 顶部固定广告 -->
        <iframe class="top-fixed-advertise"></iframe>
        <div class="quzzeDetail">
            <img :src="quzzeData.image" alt="" />
            <div class="question">{{ quzzeData.question }}</div>
            <van-radio-group :value="radioValue" direction="horizontal">
                <van-radio v-for="(item, index) in quzzeData.optionList" :key="index" :name="item.sorce" @click="radioClick(item.sorce)">{{ item.label }}</van-radio>
            </van-radio-group>
        </div>
        <!-- 往前往后按钮 -->
        <div class="btns">
            <van-button type="default" @click="goToLast">Last</van-button>
            <van-button type="primary" @click="goToResultPage">Next</van-button>
        </div>
    </div>
</template>

<script>
import {quzzeData} from '../home/initData';

export default {
    name: 'detail-page',
    data() {
        return {
            quzzeData,
            radioValue: '',
        };
    },
    methods: {
        radioClick(value) {
            this.radioValue = value;
            console.log('radioValue', this.radioValue);
        },
        goToLast() {
            console.log('Last Last');
        },
        goToResultPage() {
            this.$router.push('/result');
        }
    }
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
