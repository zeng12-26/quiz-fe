<template>
    <div class="home-page-container">
        <!-- 顶部固定广告 -->
        <iframe class="top-fixed-advertise"></iframe>
        <!-- 域名图片 -->
        <div class="nav">
            <img src="./image/home.jpeg" />
        </div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="2100" indicator-color="#ccc" touchable>
          <van-swipe-item v-for="item of imgsList" :key="item.id">
            <img class="banner-img" :src="item.image"/>
          </van-swipe-item>
        </van-swipe>
        <!-- 分类tab -->
        <van-tabs v-model="active" swipeable swipe-threshold="3" @change="tabChange">
            <van-tab v-for="(item, index) in tabList" :key="index" :title="item.title" :name="item.value">
                <h1>QUIZZES</h1>
                <div class="quzzes-content">
                    <div
                        class="quzzes-item"
                        v-for="(item, index) in quzzesList"
                        :key="index"
                        @click="goToDetailPage(item.id)"
                    >
                        <img :src="item.image" />
                        <span>{{ item.title }}</span>
                    </div>
                </div>
                <div class="advertise">
                    <div class="divLinePa">
                        <div class="divLine"></div>
                        <span>ADVERTISMENT</span>
                    </div>
                    <div class="iframe-advertise"></div>
                </div>
            </van-tab>
        </van-tabs>
        <!-- 隐私条款 -->
        <div class="privacy-clause">
            <van-row>
                <a href="https://acquizi.com/privacy-policy">Privacy Policy</a>
                <a href="https://acquizi.com/user-terms">User Terms</a>
                <a href="https://acquizi.com/cookie-policy">Cookie Policy</a>
            </van-row>
            <van-row>
                <a href="https://acquizi.com/dmca-policy">DMCA</a>
                <a href="https://acquizi.com/feedback">Feedback</a>
            </van-row>
            <div class="bottom">Copyright © 2019-2022 QUZZES All rights reserved.</div>
        </div>
    </div>
</template>

<script>
import {tabList, quzzesList, imgsList} from './initData';

export default {
    name: 'home-page',
    data() {
        return {
            tabList,
            quzzesList,
            imgsList,
            active: '1'
        };
    },
    methods: {
        tabChange() {
            console.log('active', this.active);
        },
        goToDetailPage(id) {
            console.log(id);
            this.$router.push('/detail');
        }
    }
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
