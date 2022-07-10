<template>
    <div className="randomchar">
        <div className="randomchar__block">
            <img src={thor} alt="Random character" className="randomchar__img">
            <div className="randomchar__info">
                <p className="randomchar__name">Thor</p>
                <p className="randomchar__descr">
                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                </p>
                <div className="randomchar__btns">
                    <a href="#" className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href="#" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="randomchar__static">
            <p className="randomchar__title">
                Random character for today!<br>
                Do you want to get to know him better?
            </p>
            <p className="randomchar__title">
                Or choose another one
            </p>
            <button className="button button__main">
                <div className="inner">try it</div>
            </button>
            <img src={mjolnir} alt="mjolnir" className="randomchar__decoration">
        </div>
    </div>
</template>

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