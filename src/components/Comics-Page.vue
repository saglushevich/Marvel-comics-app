<template>
    <div class="app">
        <AppHeaderVue/>
        <main>
            <AppBannerVue/>
            <ComicsListVue/>
        </main>
    </div>
</template>

<script>
    import AppBannerVue from "./App-Banner.vue";
    import AppHeaderVue from "./App-Header.vue"
    import ComicsListVue from "./Comics-List.vue";
    export default {
        components: {
            AppBannerVue, ComicsListVue, AppHeaderVue
        }
    }
</script>