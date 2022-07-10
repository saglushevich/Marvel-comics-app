<template>
    <div className="char__list" v-if="!loading">
        <ul className="char__grid" v-if="!loading">
            <li @click="onSelectCharacter(item.id)" :key="item.id" className="char__item" v-for="item in charList">
                <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" :alt="item.name">
                <div className="char__name">{{item.name}}</div>
            </li>
        </ul>
        <button @click="getData(offset)" className="button button__main button__long">
            <div className="inner">load more</div>
        </button>
    </div>
    <div v-else style="margin: 0 auto"><img src="../assets/Spinner.svg" alt="Spinner"></div>
</template>

<script>
    import apiKey from '../apiKey'
    import axios from 'axios'

    export default {
        data () {
            return {
                loading: true,
                charList: [],
                offset: 0
            }
        },

        methods: {
            async getData(offset) {
                this.loading = true;

                await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=${apiKey}`)
                    .then(items => items.data.data.results)
                    .then(items => this.charList = [...this.charList, ...items]);
                    
                this.loading = false;
                this.offset += 9
            },

            onSelectCharacter (character) {
                this.$emit('selectCharacter', character)
            }
        },

        mounted () {
            this.getData(this.offset);
        }
    }
</script>

<style lang="sass">
    .char 
        &__content 
            margin-top: 50px
            display: grid
            grid-template-columns: 650px 425px
            column-gap: 25px
            align-items: start
        
        &__grid 
            display: grid
            grid-template-columns: repeat(3, 200px)
            column-gap: 25px
            row-gap: 30px
        
        &__item 
            width: 200px
            height: 318px
            background-color: #232222
            box-shadow: 5px 5px 10px rgba(0, 0, 0, .25)
            padding: 15px
            cursor: pointer
            transition: 0.3s transform
            img 
                width: 200px
                height: 200px
                object-fit: cover
                transform: translate(-15px, -15px)
            
            &_selected 
                box-shadow: 0 5px 20px #9F0013
                transform: translateY(-8px)
        
        &__name 
            font-weight: bold
            font-size: 22px
            line-height: 29px
            text-transform: uppercase
            color: #fff
</style>