<template>
    <div className="randomchar">
        <div className="randomchar__block" v-if="!loading">
            <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="Random character" className="randomchar__img">
            <div className="randomchar__info">
                <p className="randomchar__name">{{character.name}}</p>
                <p className="randomchar__descr">
                    {{character.description ? (character.description.length > 200 ?  character.description.slice(0, 200) : character.description): "There is no description for this character"}}
                </p>
                <div className="randomchar__btns">
                    <a :href="character.urls[0].url" className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a :href="character.urls[1].url" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div v-else style="margin: 0 auto"><img src="../assets/Spinner.svg" alt="Spinner"></div>
        <div className="randomchar__static">
            <p className="randomchar__title">
                Random character for today!<br>
                Do you want to get to know him better?
            </p>
            <p className="randomchar__title">
                Or choose another one
            </p>
            <button @click="getNewCharacter" className="button button__main">
                <div className="inner">try it</div>
            </button>
            <img src="../assets/mjolnir.png" alt="mjolnir" className="randomchar__decoration">
        </div>
    </div>
</template>

<script>
    import apiKey from '@/apiKey';
    import axios from 'axios';

    export default {
        data () {
            return {
                character: {},
                loading: true
            }
        },
        methods: {
            async getNewCharacter () {
                this.loading = true;
                const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
                await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${apiKey}`)
                    .then(items => items.data.data.results[0]).then(item => this.character = item) ;
                this.loading = false
            }
        },
        mounted() {
            this.getNewCharacter();
        }
    }
</script>

<style lang="sass">
    .randomchar 
        display: grid
        grid-template-columns: repeat(2, 50%)
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25)
        &__block 
            padding: 40px 35px
            display: grid
            grid-template-columns: 180px auto
            column-gap: 30px
        
        &__img 
            width: 180px
            height: 180px
            object-fit: cover
        
        &__info 
            display: grid
            grid-template-rows: minmax(29px, auto) 90px 38px
            row-gap: 10px
            padding-top: 3px
        
        &__name 
            font-weight: bold
            font-size: 22px
            line-height: 29px
            text-transform: uppercase
        
        &__descr 
            font-size: 14px
            line-height: 18px
        
        &__btns 
            a:nth-child(1) 
                margin-right: 30px
            
        
        &__static 
            padding: 40px 35px
            background-color: #232222
            position: relative
            button 
                margin-top: 13px
            
        
        &__title 
            font-weight: bold
            font-size: 24px
            line-height: 32px
            letter-spacing: -0.045em
            color: #FFFFFF
            &:nth-child(2) 
                margin-top: 33px
            
        
        &__decoration 
            position: absolute
            bottom: 14px
            right: -37px
        
    
</style>