<template>
    <div className="comics__list" v-if="!loading">
        <ul className="comics__grid" >
            <li className="comics__item" :key="item.id" v-for="item in comicsList">
                <router-link :to="'/single-comic/' + item.id"    >
                    <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" :alt="item.name" className="comics__item-img">
                    <div className="comics__item-name">{{item.title}}</div>
                    <div className="comics__item-price">{{item.prices[0].price > 0 ? item.prices[0].price + '$': 'Our of stock'}}</div>
                </router-link>
            </li>
        </ul>
        
        <button @click="getComics(offset)" className="button button__main button__long">
            <div className="inner">load more</div>
        </button>
    </div>
    <div v-else class="comics__loading">Loading...</div>
    
</template>

<script>
    import apiKey from '../apiKey'
    import axios from 'axios'

    export default {
        data () {
            return {
                loading: true,
                offset: 0,
                comicsList: []
            }
        }, 

        methods: {
            async getComics (offset) {
                this.loading = true;

                await axios.get(`https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset}&apikey=${apiKey}`)
                    .then(items => items.data.data.results)
                    .then(items => this.comicsList = [...this.comicsList, ...items]);

                this.loading = false;
                this.offset += 8;
            }
        },

        mounted () {
            this.getComics(this.offset)
        }
    }
</script>

<style lang="sass">
    .comics 
        &__list 
            margin-top: 45px
        &__loading
            font-size: 44px
            text-transform: uppercase
            text-align: center
            color: #9F0013
            line-height: 38px
            margin-top: 100px
        &__grid 
            display: grid
            grid-template-columns: repeat(auto-fill, 225px)
            justify-content: space-between
            row-gap: 55px
        &__item 
            transition: 0.3s transform
            &-img 
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25)
                width: 225px
                height: 345px
            &-name 
                margin-top: 10px
                font-weight: bold
                font-size: 14px
                line-height: 18px
            &-price 
                margin-top: 5px
                font-weight: bold
                font-size: 14px
                line-height: 18px
                color: rgba(0, 0, 0, 0.6)
                text-transform: uppercase
            &:hover 
                transform: translateY(-5px)
</style>