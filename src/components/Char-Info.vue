<template>
    <div className="char__info">
            <div className="char__basics">
                <img src={thor} alt="abyss">
                <div>
                    <div className="char__info-name">thor</div>
                    <div className="char__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                <li className="char__comics-item">
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className="char__comics-item">
                    Alpha Flight (1983) #50
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #503
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #504
                </li>
                <li className="char__comics-item">
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Vengeance (2011) #4
                </li>
                <li className="char__comics-item">
                    Avengers (1963) #1
                </li>
                <li className="char__comics-item">
                    Avengers (1996) #1
                </li>
            </ul>
        </div>
</template>

<style lang="sass">
    .char 
        &__info 
            padding: 25px
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25)
            position: relative
            z-index: 5
            background-color: #fff
            &-name 
                font-weight: bold
                font-size: 22px
                line-height: 29px
                text-transform: uppercase
            .skeleton 
                margin-top: 30px
        &__basics 
            display: grid
            grid-template-columns: 150px auto
            column-gap: 25px
            img 
                width: 150px
                height: 150px
                object-fit: cover
        &__btns 
            margin-top: 35px
            a:nth-child(2) 
                margin-top: 10px
        &__descr 
            margin-top: 15px
            font-size: 14px
            line-height: 18px
        &__comics 
            font-weight: bold
            font-size: 18px
            line-height: 24px
            margin-top: 10px
            &-list 
                position: relative
                margin-top: 10px
            &-item 
                width: 100%
                padding: 0px 10px
                line-height: 25px
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
                margin-top: 10px
        &__select 
            font-weight: bold
            font-size: 18px
            line-height: 24px
            text-align: center
</style>