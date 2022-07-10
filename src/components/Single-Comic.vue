<template>
    <div className="single-comic">
        <img src={xMen} alt="x-men" className="single-comic__img">
        <div className="single-comic__info">
            <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
            <p className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
            <p className="single-comic__descr">144 pages</p>
            <p className="single-comic__descr">Language: en-us</p>
            <div className="single-comic__price">9.99$</div>
        </div>
        <a href="#" className="single-comic__back">Back to all</a>
    </div>
</template>

<style lang="sass">
    .single-comic 
        margin-top: 50px
        display: grid
        grid-template-columns: 293px 550px auto
        column-gap: 50px
        align-items: start
        &__img 
            width: 293px
            height: 450px
        
        &__name 
            font-weight: bold
            font-size: 22px
            line-height: 29px
        
        &__descr 
            font-size: 18px
            line-height: 24px
            margin-top: 25px
        
        &__price 
            font-weight: bold
            font-size: 24px
            line-height: 32px
            color: #9F0013
            margin-top: 25px
        
        &__back 
            justify-self: end
            font-weight: bold
            font-size: 18px
            line-height: 24px
            &:hover 
                color: #9F0013
</style>