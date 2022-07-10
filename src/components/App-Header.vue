<template>
    <header className="app__header">
        <h1 className="app__title">
            <router-link to="/" exact>
                <span>Marvel</span> information portal
            </router-link>
        </h1>
        <nav className="app__menu">
            <ul>
                <li><router-link to="/" exact active-class="active-link">Characters</router-link></li>
                /
                <li><router-link to="/comics" active-class="active-link" exact>Comics</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="sass">
    .app 
        &__header 
            display: flex
            justify-content: space-between
    
        &__title 
            font-weight: bold
            font-size: 28px
            line-height: 37px
            span 
                color: #9F0013
            
        &__menu 
            ul 
                display: flex
                justify-content: space-between
                font-weight: bold
                font-size: 24px
                line-height: 32px
                li 
                    margin: 0 8px
                    a:hover 
                        color: #9F0013
    .active-link
        color: #9f0013
</style>