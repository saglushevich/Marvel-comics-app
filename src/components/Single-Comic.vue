<template>
    <div class="app">
        <AppHeaderVue/>
        <main>
            <AppBannerVue/>
            <div className="single-comic" v-if="!loading">
                <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" :alt="comic.title" className="single-comic__img">
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{{comic.title}}</h2>
                    <p className="single-comic__descr">{{comic.description.length ? comic.description : 'There is no description for this comic'}}</p>
                    <p className="single-comic__descr">{{comic.pageCount ? comic.pageCount : "Unknown how many"}} pages</p>
                    <p className="single-comic__descr">Language: en-us</p>
                    <div className="single-comic__price">{{comic.prices[0].price ? comic.prices[0].price + '$' : 'OUT OF STOCK'}}</div>
                </div>
                <router-link to="/comics" className="single-comic__back">Back to all</router-link>
            </div>
            <div v-else class="comics__loading">Loading...</div>
        </main>
    </div>
    
</template>

<script>
    import AppBannerVue from "./App-Banner.vue";
    import AppHeaderVue from "./App-Header.vue";
    import axios from "axios";
    import apiKey from "@/apiKey";

    export default {
        components: {
            AppBannerVue, AppHeaderVue
        },
        
        data () {
            return {
                comicId: this.$route.params.id,
                comic: {},
                loading: true
            }
        },

        methods: {
            async getComicInfo () {
                this.loading = true;
                await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${this.comicId}?apikey=${apiKey}`)
                    .then(item => item.data.data.results[0]).then(item => this.comic = item)

                this.loading = false;
            }
        },

        mounted () {
            this.getComicInfo();
        }
    }
</script>

<style lang="sass">
    .single-comic 
        margin-top: 50px
        display: grid
        grid-template-columns: 293px 550px auto
        column-gap: 50px
        align-items: start
        &__img 
            width: 293px
            height: 450px
        
        &__name 
            font-weight: bold
            font-size: 22px
            line-height: 29px
        
        &__descr 
            font-size: 18px
            line-height: 24px
            margin-top: 25px
        
        &__price 
            font-weight: bold
            font-size: 24px
            line-height: 32px
            color: #9F0013
            margin-top: 25px
        
        &__back 
            justify-self: end
            font-weight: bold
            font-size: 18px
            line-height: 24px
            &:hover 
                color: #9F0013
</style>