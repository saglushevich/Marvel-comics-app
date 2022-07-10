<template>
    <header className="app__header">
        <h1 className="app__title">
            <a href="#">
                <span>Marvel</span> information portal
            </a>
        </h1>
        <nav className="app__menu">
            <ul>
                <li><a href="#">Characters</a></li>
                /
                <li><a href="#">Comics</a></li>
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
</style>