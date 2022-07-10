<template>
    <div class="app">
        <AppHeaderVue/>
        <main>
            <RandomCharVue/>
            <div class="char__content">
                <CharListVue @selectCharacter="selectCharacter"/>
                <CharInfoVue :selectedCharacter="selectedCharacter"/>
            </div>
            <img className="bg-decoration" src="../assets/vision.png" alt="vision">
        </main>
    </div>
</template>

<script>
    import CharListVue from './Char-List.vue';
    import AppHeaderVue from "./App-Header.vue"
    import CharInfoVue from './Char-Info.vue'
    import RandomCharVue from './Random-Char.vue'
    export default {
        data () {
            return {
                selectedCharacter: 0
            }
        },  
        components: {
            AppHeaderVue, CharInfoVue, RandomCharVue, CharListVue
        },
        methods: {
            selectCharacter(character) {
                this.selectedCharacter = character
            }
        }
    }
</script>