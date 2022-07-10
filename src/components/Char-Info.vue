<template>
    <div className="char__info" v-if="character">
        <div className="char__basics">
            <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="abyss">
            <div>
                <div className="char__info-name">{{character.name}}</div>
                <div className="char__btns">
                    <a :href="character.urls[0].url" className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a :href="character.urls[1].url" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="char__descr">{{character.description ? character.description : 'There is no description for this character'}}</div>
        <div className="char__comics">Comics:</div>
        <ul className="char__comics-list">
            <li v-if="character.comics.items.length" className="char__comics-item" v-for="comic in character.comics.items">
                {{comic.name}}
            </li>
            <li v-else class="char__comics-item">There are no comics for this character</li>
        </ul>
    </div>
    <SceletonVue v-else/>
</template>

<script>
    import SceletonVue from './Sceleton.vue';
    import axios from 'axios';
    import apiKey from '@/apiKey';

    export default {
        data () {
            return {
                character: undefined
            }
        },  
        components: {
            SceletonVue
        },
        props: {
            selectedCharacter: {
                type: Number
            }
        },
        methods: { 
            async getCharInfo (id) {
                await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${apiKey}`)
                    .then(items => items.data.data.results[0]).then(item => this.character = item)
            }
        }, 
        watch: {
            selectedCharacter (newId, oldId) {
                if (newId !== oldId) {
                    this.getCharInfo(newId)
                }
            }
        }
    }

</script>

<style lang="sass">
    .char 
        &__info 
            padding: 25px
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25)
            position: relative
            z-index: 5
            background-color: #fff
            &-name 
                font-weight: bold
                font-size: 22px
                line-height: 29px
                text-transform: uppercase
            .skeleton 
                margin-top: 30px
        &__basics 
            display: grid
            grid-template-columns: 150px auto
            column-gap: 25px
            img 
                width: 150px
                height: 150px
                object-fit: cover
        &__btns 
            margin-top: 35px
            a:nth-child(2) 
                margin-top: 10px
        &__descr 
            margin-top: 15px
            font-size: 14px
            line-height: 18px
        &__comics 
            font-weight: bold
            font-size: 18px
            line-height: 24px
            margin-top: 10px
            &-list 
                position: relative
                margin-top: 10px
            &-item 
                width: 100%
                padding: 0px 10px
                line-height: 25px
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
                margin-top: 10px
        &__select 
            font-weight: bold
            font-size: 18px
            line-height: 24px
            text-align: center
</style>