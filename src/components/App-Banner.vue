<template>
    <div className="app__banner">
            <img src="../assets/Avengers.png" alt="Avengers">
            <div className="app__banner-text">
                New comics every week!<br>
                Stay tuned!
            </div>
            <img src="../assets/Avengers_logo.png" alt="Avengers logo">
        </div>
</template>

<style lang="sass">
    .app 
        &__banner 
            width: 100%
            background-color: #232222
            height: 100px
            padding: 0 25px 0 45px
            display: grid
            grid-template-columns: 152px auto 133px
            &-text 
                font-weight: bold
                font-size: 24px
                line-height: 32px
                color: #FFFFFF
                padding-left: 83px
                padding-top: 18px
</style>