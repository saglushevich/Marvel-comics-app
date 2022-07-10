<template>
    <div class="app">
        <AppHeaderVue/>
        <main>
            <RandomCharVue/>
            <div class="char__content">
                <CharListVue/>
                <CharInfoVue/>
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
    import '../styles/style.sass'
    import '../styles/button.sass'
    export default {
        components: {
            AppHeaderVue, CharInfoVue, RandomCharVue, CharListVue
        }
    }
</script>