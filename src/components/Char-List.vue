<template>
    <div className="char__list">
            <ul className="char__grid">
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item char__item_selected">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss">
                    <div className="char__name">Abyss</div>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
</template>

<style lang="sass">
    .char 
        &__content 
            margin-top: 50px
            display: grid
            grid-template-columns: 650px 425px
            column-gap: 25px
            align-items: start
        
        &__grid 
            display: grid
            grid-template-columns: repeat(3, 200px)
            column-gap: 25px
            row-gap: 30px
        
        &__item 
            width: 200px
            height: 318px
            background-color: #232222
            box-shadow: 5px 5px 10px rgba(0, 0, 0, .25)
            padding: 15px
            cursor: pointer
            transition: 0.3s transform
            img 
                width: 200px
                height: 200px
                object-fit: cover
                transform: translate(-15px, -15px)
            
            &_selected 
                box-shadow: 0 5px 20px #9F0013
                transform: translateY(-8px)
        
        &__name 
            font-weight: bold
            font-size: 22px
            line-height: 29px
            text-transform: uppercase
            color: #fff
</style>