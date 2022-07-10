<template>
    <div>
        <p className="char__select">Please select a character to see information</p>
        <div className="skeleton">
            <div className="pulse skeleton__header">
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__mini"></div>
            </div>
            <div className="pulse skeleton__block"></div>
            <div className="pulse skeleton__block"></div>
            <div className="pulse skeleton__block"></div>
        </div>
    </div>
</template>

<style lang="sass">
    .skeleton 
        &__header 
            display: grid
            grid-template-columns: 40px auto
            column-gap: 10px
            align-items: center
        
        &__circle 
            width: 40px
            height: 40px
            background-color: #C4C4C4
            border-radius: 100%
        
        &__mini 
            width: 100%
            height: 16px
            background-color: #C4C4C4
        
        &__block 
            height: 35px
            width: 100%
            background-color: #C4C4C4
            margin-top: 15px

</style>