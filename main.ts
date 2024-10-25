namespace SpriteKind {
    export const Sofa = SpriteKind.create()
    export const Computer = SpriteKind.create()
    export const Plastflaske = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sofa, function (sprite, otherSprite) {
    sprites.destroy(Sofa, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("Hvordan vil du affaldssortere?", DialogLayout.Top)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("Hvordan vil du affaldssortere?", DialogLayout.Top)
})
let Sofa: Sprite = null
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
Sofa = sprites.create(img`
    ..cccc.........
    .cdddbc........
    cbdddbccccccc..
    cbdddbcbdddddc.
    cbdddbcdddddbbc
    cbdddbcbbbbbbbc
    cbdddbccccccbbc
    cbdddbcddddbccc
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbdddbcdddddbc.
    cbddbbcdddddbc.
    cbbbbbcccccccc.
    cbbbbbcbdddddc.
    cbbbbbcdddddbbc
    cbbbbbcbbbbbbbc
    cbbbbbcbbbbbbbc
    cbbbbbcbbbbbbbc
    .cccccccccccccc
    .cbbc.....cbbc.
    `, SpriteKind.Sofa)
let Computer = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Computer)
let Plast_flaske = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........dddd........
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......555555.......
    .......555555.......
    .......555555.......
    ........5555........
    ........4444........
    ....................
    `, SpriteKind.Plastflaske)
let text_list = [
"Restaffald",
"Pap/papir",
"Tekstilaffald",
"Plastik",
"Batteri",
"Madaffald"
]
mySprite.setPosition(72, 105)
Plast_flaske.setPosition(9, 34)
Sofa.setPosition(140, 87)
Computer.setPosition(144, 33)
Plast_flaske.changeScale(0.05, ScaleAnchor.Middle)
Sofa.changeScale(0.05, ScaleAnchor.Middle)
Computer.changeScale(0.05, ScaleAnchor.Middle)
scene.setBackgroundImage(img`
    eeffcbbbfccdbffcbcddbdddbbddcdbc1dbcbbddbbceed111111111111111111111111111111111111111111111111111111111111111111bcfcbbbcffbcbfbcccfcccffffcbdbccffcffccbcffffbb
    fcbccbbbfccdeeccbcddebbdbbbdcdbb1ddebedddbeeeed11111111111111111111111111111111111111111111111111111111111111111ccccbbccffbbbfcccccccfffccbbbccffcfccccbbffffbb
    eefeeebbfccdeffebcddebbbdbbbcdbbdcdcbcbdddbceeb1111111111111111111111111111111111111111111111111111111111111111dcfccbccbcfbcbccffcccccfcbcbbccfccccccccbbfffcbb
    dbefeeebfccdbfcebcddbebbddbbbdbbdcdcdcbbdddbeeeb111111111111111111111111111111111111111111111111111111111111111bcfcbbccbccbcbcccccccccccbbbccfccfbcbccbbbcffcbb
    bdbbcceefccbbfcebcbdbbcbdddbbdbbdcdcddbebdddeeeed111111111111111111111111111111111111111dddddbbdddddddddbb1111dcfccbcbcbcfbcccccccccccccbbccfccfcbcccfbbbcffcbb
    cbbcbccbcccdefccbcbdddddbbddbbbbdcdcdddbbdddbeecbbbbbd11111111111111111111111111111111111111db11111111111c11ddccfcbbcbcbcfbccccccccccccccccfcccccbcfffbbccffcbb
    fbeecbefbecdefcebcbdddddcdeddbbbdcdcdcddcbdddbeecbcccbd1111111111111111111111111111111111111db11111111111cbbcccfccbccbcbcfbcccccccccccccccffcccccbcfffbbbcffcbb
    ceffcbbeceeeefcebcbddbddbfbbddebdcdcdcddebbdddbeceecced1111111111111111111111111111111111111bcd111111111dccccccfcbbccbbbcfcccccccccccccccfccccbccbcffcbbbcffcbb
    fccfffddeccbcfcebcbddccddbcbdbdebcdcdcbbbbcbddbeecbeeebd11111111111111111111111111111111111bcccd1111111dbcccccfccbcccbbbcfcccbccccfffffcfccccccccbccfcbbccffcbb
    ecccfcedbbeceecebcbddccddddcbbddebdbdcdbbdbbbdbbeefeceed1111111111111111111111111111111111cccccc1111111bcccccefcbbcbcbcbcfcccbcfffffffffccfcbcffcbccfcbbccffcbb
    ebcccfcebeebceecbcbddccddddbcbbddbbbdbdbcddbcbbbbecceeebd1111111111111111111111111111111111dbbd11111111cccccecccbccbbbcbcfbcbcffffffffffcfccbcffcbccfcbbccffcbb
    bebefffdcffbeccbccbddccdbedbbcbb1beedbbbcdbdbbbbbeeceeebd111111111111111111111111111111111111111111111dfcccccfcbbccbbbcbcfcbccffffccccccccccbcffcbccffbbccffcbb
    bceeecfecfcedbececcddccdbcddddcbc1bcbbbbcdbbdbebbbeebeeebd11111111111111111111111111111111111111111111bfcccccccbcccbcbbbcfbccfffffffccccccccbcffcbccfcbbccffcbb
    bfceeeceecfcddbbfccddccdbcbdddccdddcdbbbcdbbddebbbebbbeebd11111111111111111111111111111111111111111111cfccccfcbbcccbcdbbcfccfffffffffcccccfcbcffcbccfcbbccffcbb
    bfffceeeefcfcbecbfcddccdbcbdcdbcdbbbdcbbcdbbddbebbbebbbebd1111111111111111111111111111111111111111111dffccccccbcbbbbcdbbcfcffffffffffffccffcbccfbbccfccbccffcbb
    bcfffceebeffccfcefbbdccdbcbdcddddcbcddbbcbbbdbbebbbebbbeeb1111111111111111111111111111111111111111111bfccccccbccbbcbcdbbcfffffffffffffccccfcbcffcbccfcbbccffcbb
    bcfffebcbecccecfefcbdbcdbcbdcdbddeccdddcbbbbbbeebebeeddeebd111111111111111111111111111111111111111111bfcccccbbccbbcbcdbbcfcffffffffffffcccfcbcffbbccfcbbccffcbb
    bcfffbbffccebccfffbccbbdbcbdcdbcdbbcdbddcbbbbbccccebebbbecd111111111111111111111111111111111111111111cfcccccbcccbbbbcdbbcfccbbcffffffffcccfcbcffbbccfcbbccffcbc
    ecfffedeffeebbcfccddbccdbcbdcbbcdddcbedddbbbbbccccebdebdbeb11111111111111111111111111111111111111111dfccccccbccbbcbbcdbbcfcbdbcffffffffcccfcbcccbbccfcbbccffccf
    bcecfbbbffeebeccecdddbebbcbdcbbcdcdcbebbdbbbbbcccbbedebdbbd11111111111111111111111111111111111111dddcfcccccccccbbbbbcdbccfbdbccccfffccfcccfcbcccbbccfcbbccfffcf
    bcfffbbbffcebfccbcdddddcbcbdcbbcdcbcdecbddbbbbcccbdebebbbd11111111111111111111111111111111111111dbbbffccccccccbcbbbbbdccffbbccccccffccfcbcfcbcccbbccfcbbccfcfff
    bcfffbbeffcbbffebcbdddddbebdcbbcdcbcddbcbddbbbcfcbbbbebbbd11111111111111111111111111111111111111dbbbffccccccccbcbbbbbbcbffbcccccccffccfcbcfcbcccbbccfcbbcccffff
    ecfffbbeefcbbffcbcbddbbddbcccbbcdcbcbcdbcbddbbcccbbbbebbbd111111111111111111111111111111111111dddbbcfccccccccbbbbbbbbcbbffcccfcccbfcccfcbcfcbcccbbccfcccfffffcc
    bcfffbbeffcbbffcbcbdcbccdddebbbcdcbcbcddeecddbcfcbbbbebbb1111111111111111111111111111111111111bddbbffcccccccbcbbbbbbcbdbffccfccfcbfcccfcbcfcbcccbbccffcfffffcbc
    bcfffcbbffcbeffcbcbdcbbcbdddbebcdcbcbcbbbbebddcfcbbbbbbbb1111111111111111111111111111111111111dddcccccccccccbbbbbbbcbbccffccccbfcbfcccfcbcfcbcccbbcfcfffffcccbb
    ecffccbbffcbbbffbcbdbcccbdbddbcbdcbcdcbbcdbcbdcccbbbebbbbddd1111111111111111111111111111111111dddccccccccccccbbbbbbbbbbcffcccfbfcbfcccfcbcfcbcccbcccfffcfccbcbb
    bcfffbbbffcbeffcbcbdbbcbebcddddcccbbdcbbcbdcbbcccbbbbebbeccb1111111111111111111111111111111111d11bcccccccccccbbbbcbbccccffbccfbfcbfcccfcccfcbcccccffffcccbbbcbb
    ecfffcbbffcbbffcbcbddbbdccbcbbddbcbbdcbbcbcdbcccccbbbebbbbcbd111111111111111111111111111111111d11bcccccccccccbbbbbbccffcffbcccbfcbfcccfcccfcbcfcffffcccccbbbcbc
    ccfffebeffcbeffcbccdddddbccbbcdddbcbbcbbcbbbdbccccbbbbebbccccddddddd11111111111111111111111111d11ccccccccccccbbbcdcccbccffcccccfccfcccfcccfccccffffcccbbcbbcccc
    fcfcfebbffcbbfffbccddcbdbbbccbbbdddcbcbbcbbbbbccccbbbebbbccccbccccccd1111111111111111111111111d11dccccccccccbbbcdcccccccffccccbcccfcccccbcfccfffcccbbcbbccccccf
    ffcfccbcffcbefffcccddcfbdddbcccbcddbbbbbcbbbbbccccebbebebcccccbcccccd1111111111111111111111111d111cccccccfccbbcbbccccbbcfcccccbcccfcccccccfffffccbcbbbbccccffcc
    fccffffcffcbefffbfcddccdbbddbbccbbbbbccbcbbbbbccccbebebebccccccbccccb1111111111111111111111111d11dccccccccccccbccbfccbcbccccccbcccccccccfcfffcccbbbbbccccffccff
    ccccfffffccbbfffbfcddccbbfbdddbcbcbcddbccbbbbbcccbbbbebebccccccbbccceb1111111ddddddd1111111111d11dccccccccccccbcccccbbcbffcccccffffffffffffcccbbbbbccccfcccffff
    ccbbffeffffcefffbfcbdccbbcbdebbbbfccbddbccbcbbcfccbebebebcccccccccccbe1111111d1111111111111111ddbbccccccccccbbcfcccbcbcbffcccccccccccfffffccbbbbbccccfccfffffcc
    ccebffbecfffcfccbfcbdccbbcbbcbbbdbccbbdddcccbbcccccbbebebbccccccccccded11111dd1111111111111111dbccccccccccccbccccccbcbccffccccccccccccffccbcbbbccccfccffffccccb
    ebeecfbbecfffffccfcbdccbbcbbcbbcddbccfbbddbccbcfcbccbbeebbbbbbbbbbebbb111111dd1111111111111111dccccccccccccccccccbcbcbcbffccccccccccccfcccbbccccffccfffccccbbcb
    eccbefbbeececfcfcfcbdccbbcbbcbbcdcdcccccbddbbccfcbcbeebebbbbbbbdddebbb11111111111111111111111dbcccccccccccccccccbccbcbcbfffcccccccfcccfccbbcccfccffffcccbccbbbc
    cceeecbeecceeeefcfcbdccbbcbbcbbcdcccbcccccbddccfcbcccebbebbbcccdddbebbdd111111111111111111111dcccccccccccccccccccccbcbccffccccccccfffffccccccccfffcccbbbbccccfc
    fffcbbcebbcceeefbfcbdccbbcbbcbbcdcccbdbcfccbdbcfcccceeeebbbbcfcddddbbbbd11111111111111111111bbccccccccccccffcccccccbcbccffcccccfffffffffcffccfffcccccbbbbccccbb
    ffffffcbceeeeeecbfcbdccbbcbbcbbcdcccbcbbccfccbcccccceeeeebbbcccdddddebddd1111111111111111111bbcccccccccfcccccbcccccbcbccffcccccfffffffffccfffcccbbbcccccccffcbb
    bccfffffccceeeecefcccccbbcbbcbbcdcccbcccbbccccccccccecccebbbcccdddddbbbdd111111111111111111dcbcccccccccccffccccccbcbcbccffcccffffffffffcfffcccccbbccccbbffffcbb
    bbbcccffffffcbecefccffcbbcbbcbbcdcccbcbccbbbccfcccbceeccecbbbbbbbdddbebdbd1111111111d1111111cbccccccccfffffcccccbbcbcbccffcfcfffffffffffcccbbcccfccffcbbcfffccf
    bcbbbbcccfffffcccccbdccfccbbcbbcdcccbcbcccccbcfccccceeeeebbcbbbcbbdddebbbd1111111111bd1111dbcccccccccccfccccccccbccbcbccfffffffffffcccfccccbccccbbcffcbbcfffccc
    bcbbbbbbccccfffffccbdbcbbcfccbbcdcccbcbcccccbcccfffceceeebbbccbbbdbbdebbcd1111111111111111bcccccccccccfcccccccccbccbccccfffffffffffffccccccfcfffbbcffccfcfffcbb
    bcffcccbbbbbbccfffcdddddbccccfccbcccbcbccccccccfffccccceebbbcfcbbddbdebbcd111111111111111dcccccccccccfffcfccccccbcccccccffbcffffffffffffccfbbcffbccffcbbcfffcbb
    ccfffbbcceebbbbbcfccbbddddbbcccfccccbcbcccccbcfffcccccccebbbffcbdddbbebbcdd11111111111111dccccccccccccffcfcccccccccccbbcffcccfcfffffffcccffbbcffcccffcbbcfffccc
    bcfffcbbfffbccbbbfcbccfcbdddbbbcccfcbcccccccbcffccccccefcbbbcccbbdbbbebbcdd1111111111111bbcccccccccccccfcfcccccccccbbbbcfffccbbccffffffccffcfcffbbcffcbbcffffbb
    bcfffcbbfffbbfcceccccccccccbbbbbbbccccccccccccffccccccccccbbcccbbdbbbebccbbb111111111111bbccccfccccccccfcfccccccccbbbcccffcbbbccccffcffccffcbcffbbccfccccfffcbb
    bcfffbeefffccfffeccebbcfcbbcccbbbbbccfcccccccccfccccccccccccbbbbbbbbbcebbbded1111111111dbbcccccccccfcccfcfccccccbbbcccccffbbccbfccffcffccffbbcffcccffcbbcfffcbb
    cccffcbbfffbefffccccbbbbbcccccccccbccccccccccccfcccccccccccccccccbdbbcebbbdbd1111111d1ddcccccffccccccccfcfccccbbbcccccccfcbbcfbfccfccffbcffcccffbbcffcbbcfffcbb
    bccffcccfffbbfffccccbbbbbbbbbccccccccbbbcccccccfccccccccccccccbbbbbbbcbbbbdbbbd1111111dbcccfffffcccccccfcfcccbccfcccbbbcfcbccfcfccfccffcccfcbcffbbccfcbbccfffcc
    bcfffcbbfffccfffcccedbbbbbbbcbbbccfccccbbcbcccffcccccccccccccfcbbbdbccccebdbbbd1111111dbcccffffffccccccfcfffcccfccbccbbcfccccfbfccfffffcccfbbcffbbccffffcfffcbb
    cccffcbbfffbbcffbccbbbbbbbbbbbbbcccccccccccbbbccccccccccccfccfcbbbbbccbccbbdbbbd11111dbcccccffffcccccfcfcccfcccccccbccccfcccbfcfccfccffbccfbbcffccccfcbbcfffcbb
    cccffccffffcbfffbcbcdbfbbbbbbbbbbfccccccfcccccccccccccccccffcccbbbbbbccccbbdbbbb11111dbccccffffffccccccffffcccbcbbccccccccbccfcfccfccffbccffccfcbbccfcbbcfffcbb
    eecffcbbfffccfffcfccbbfbbfcbcbbcbfcbccccccccccccccccccccccffcccbbbbbcccccbbbbbbbbdd11cccccffffccccccffffffffccbccccbcbccfcccbfbfccffcffcccfbbcfcbbccfcbbcfffccc
    becffcbbfffcccffbfccbbfcbfcbccbfcfcbcbbcccccccfcccccccccccffcccbbbbccccccbbbbb7bbcbdbcccccffffccccccfffffffcccccccccccccfcbccfcfccfccffcccfbbcfcbbccfccccfffccb
    bccffceccffcccffcfccbbfcbccbccbfcccccccccbbbbccccfffccccccfffccccbbccccccbbbbbc7bccbccccfcffffccccccfccffffcccccccccccccccccccbfccfccffcccfcccffffccfcbbccffcbb
    cccffceecffcccffccccbbfcbccbccbfcccbcfccfcccbbfcccccccccccfffcccccccccccceeecccccccccccfccffffccfccfcfcffffcccccccccccccccbcccbfccfccffcccfcbcfcbbccfcbbcfffcbb
    eccffcbbcffcbcffcfccbbfcbccbccbfcfcbcfcccccccbccffcfcfcfcffccccccbbbcccccebcccccccccccccccfffffffccccfcffcccccccccccccccfccccccffcfccffcccfbbcfcbbcffcbbcfffbbb
    eccffcebcffcecffbcccbbccbccbccbfcccbcfcccccccbcccccccccfccfcfcccccccccccccbecccccccccfcccccfccfffcccffcffcccccccccccccccfccccccfccfccffcccfbbcfcbbcffcbccfffccc
    cccccfeeeefccccfecccbcccbccbccbfcccccfcccccccbccfccfccccccfcffccccccccccccbbccccccccccccccccccfcccccffcffccccccccccccccccccccccfccfccffcccfcccfccccffccccffccbb
    cccccfccccfccccfcfccbcccbccbccbccccccfcccccccbccfcccccccccccccccccccccccccbccccbbbbbbcccccccccfcccccfffffccccccccccccccffccccccfccfccffcccccccccccccccccffffccc
    eeeeefeeeeeceeececccbbccbccbccbccccccfcccccccbcccccccfcccbbbbbbbccccccccccbbcbbddddbcffcccfcccfffccffffffcfccccccccccccfffccccccccccccccccccccccccccccccccccccc
    eebeefeeeeecbeecefccbcccbccccccccccccfcccccccccbbb1bfcccccccbbbbcccccccccfcccddddddbccfccccfcccffffffffffcffcccccccccccfffccccccfffffffffffffffffffffffffffffff
    cebbbeeebbbeeebecfccbbbbbbbbbbbccfccfccccccfffcbbbbcccccfcbbbbbcfccceccccccbbddddddbbcfcccccccffffffcfffffffcccccccccccfffccccccccccccccccccccccccccccccccccccc
    ccceeeeeeeecccccccccbbbbbbbbbbcccffccccccccccccbbbbbbcccccbbbbbbccccccbbbbbdddddddbbbccccccccccfcccccfcfffffccccccccccffffccccccccccccccccccccccccccccccccccccc
    ceeceeeeeeeeeceeeeccccccccccffcccccffcccccccccbbbbccccccccccccccccccbccbbdddddddddbbbbccfccccccccccccccfffffffffcccccccfffcccccccccccccfccccccccccccccccccccccc
    cecccceeecccccccccccccfccffccfcfccccfccccccfffffccccccffcccccccfcccbbbbddddddddddddbbbeccccbbbccccccccccccfffffffcfcccffffcccccccccfcccfccccccccccccccccccccccc
    cecccceeeffcefffccfcfccccffccffffcccfcccccffcccfffffcccccccccccccccbbddddddddddddddbbbbccccbcbccbcccccccccccccfffffcfcffffccffcfcfffffcfccccccccccccccccccccccc
    cecffceeeffccfffffcfffccccccccccccccfcbbccfffffffffcfcfffffffffffccdddddddddddbbcddbbcbccccbbbccbbbccccccccccccfccccccfffffcffcfcfffffffffccccccccccccccccccccc
    fccffeebbcfcccfffccbcccbcccccbbbbbbcfbcccffffffffffffcfffffffccfffcddddddddddddbcbcbbcbbbccccbccbbbbbbbbbbbcccccccccccffffcccfcfffffcffffffcfffccfffccccccccccc
    ffcccbddbbccccccccccbbcccbbcccbbbbbcfcccccccccffffffccffcfccccbcffcdddddddddbddddddbccbdccbbccffbbbbbbbbbbbbbbcccccccccfffcccccffcfffffffffffffccffffccffffcccf
    ccccccccbbbbbbbbbbbbbbbcccccccbbbbccbbbbbccccccccccbbbcccccccccccbddddddddddddddddddbbbdccbbccfcbcbbbbbbbbbbbcbbbcccccffffccccccfcccccccfffffffccffffccffffcccf
    cccbcccbcbbbbbbbbbbbbcccccccbbbbddbbeccccccecccbbbbbbbbbbbbbbbbddddddddddddddddddddddbcddbbbbbbbbbbbbbccbbbbbccbbbbbbbcfffccccfccccbccbcffffcccccffffccfffffccf
    bbbbbbcbbbbbbbbbbccbccccccbbbbbbbcccccccccccbbbbbbbbbbbbbbbbdddddddddddbbddddddddbccbbbddbcbcbccbbbbcccccbbbbbbbbbbbbccfffcccccccccccccccccccccccccffccffffffff
    ccbbbccbbbbbbbbccccbbbbbbbbceecccccbdcccccccbbbbbbbbbbbbbbdddddddddddddbbdddddddbbccbcccdbccbbbbcbbbbcccccbbbbbbbbbbbbcfffbccbccccccccccccccccccbccccccfffcffff
    cbbbbccccbbbbbbbbbbbbbbbbeeedbccccccccccccbbbbbbbbbbbbbbbdddddddddddbbddbbccdbbdbdbddbccddbbbccbccccbbcbccccbbbbbbbbbbcfffbccccccccccccccccccccccccccccccccffff
    cbbbbcccbbbbbbdbbbbbeeeccccccccccccccccccccbbbbbbbbbbbbbdddddddddddbcbddbbcbbccccbdddbccddbcccccccccbbbbcbbbbbbbbbbbbbcfffcbbbbcbccbccccccccccccccccccccccccfff
    cbbccbbbbbdddbbccccccccccccccfccccccbbdcccbbbbbbbbbbbbdddbbbbddddddbbbbddddbbdcccccddcccbdbcccccfffcccbbbbbbbbbccbbbbbcfffbbbbbbbcbcccccccccccccccccccccccccfff
    cbbdddbebbbeeeecccccccccccccccccccccccccbbbbbbbbbbbbbddbbbbddddddddddddddbdbdddbbbbdddbcbdbefccfffcfccbbbbbbbbbbbccbbcffffbbbbcccbcbbcccccbcccccccccccccccccccc
    bbbbbbeeeeeeccccccccbcccccccccccccccccccbbbbbbbbbbbddbbbbbbbbbdddddddbcccbddddddddbbbbbbcddbcccccccccbbbbbbbbbbbbbbbbbffffbcbbccccbbccbccccbccccccccccccccccccc
    beeeeeeccccccccccccccbbccccccccccccccccbbbbbbbbbbddbbbbbbbbbbbbbdbbbdbcccbddddddddbccccccdddcbbbbbbbbbbbbbbbbbbbbbbbbbffffbbcbcccccccbccccccccccccccccccccccccc
    eccceeecccccccccccccccccccccccccccccbbbbbbbbbbbbdbbbbbbbbbbbbbbdcbbdddddddddddddbccccccccbdddbbbbbbbbbbbbbbbbbbbbbbbbbffffbcbbbbbcbbbbbcbccbcccccfccffccccccccc
    ccffceebcccccccccccccccccccccccccccbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbddddddddddddbbbcccccffcdddbbcbccccccccbbbbbbbbbbbccffffbbbbdddbbbbccccbbcbccfffffffccccccccc
    ffccccccccccccccccccccccccccccccccccbbbbbbbbddbbbbbbbbbbbbbbbbbbbbdddddddbbdddbdddbcbbbcccdddbccbcccccccccbcbbbbbbbbccffffbbbcbbdbbbbbbbbccbbcfffcccccccccccccc
    ccccccccccccdbddcccccccccccccccccccccbbbbbddbbbbbbbbbbbbbbbbbbdddddbddddbbbdddbc6bbbdbbcfcdddbcccccffffcffcbbbbbbbbbbbffffcccccccccbbcbcccbbbccccccbbbbbccbcccc
    cccccccccccccbbbccccccccccccccccccccccbbddbbbbbbbcbbbbbbccbbbbbbddddbbbbbbbbbddddbdbcccccfdddcccfffcffffffcbbbbbbbbbccfffffccbcbcbbbcbccccbcbbccccbcccbccbcccff
    cccccccccccccccccccccccccccccccccccccbbdbbbbbbbbbcfccccccbbbbbbdddddddddddddddbbcbbccccccfbdddbeffccffcfffccbcccbcfcbcccccccccccbcbccbbbbbbbcbccbbcbcccccccffff
    ccccccbccccccccbccbcccccccccccccccccbddbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbcbbcdbb6ccccccffcccdbccffffcccccccbbccccccccccbbbcccccccccbcccccbbbcccbcbbccccfffffffff
    cccccccccccccccbbfccccccccccccccccbbdbbccbbbbbbbbbbbbbbbbbbbbbdddddbbddbcbddbbbccbcccffcccfddddbebcccbcbbbbcfffccccfccccccccccbbbbcbcbbbccbbccbccbcccccfffffcfc
    ccccccccccccccfcbcccccccccccccccbbdbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbcbbbbdbbbbcfccbbbcfbddddcbbcbbbbbcccfffffffffccbbcbccbbbbbbcfccbcccbccccbbccccccccccccb
    ccccccccccccccffccccccccccccccbbddbcccdddddbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbcbbbbcbccddddbcbcbbbcbffcffcfffffffcbbcbcbbbcbbccccccccbbddbccbcccccbccccccc
    ccccccccccccccccccccccccccccbbddbcccccbccbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbcbbccdddddcbbcbbbbfcffffffffffffcbbbbbbbbbbbbcccccbbbbbbccccccccbbcccccc
    cccccccccccccccccccccccccccdddbccccccffcccfcccbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbcbbcffdddddbcbbcbbccfffffffffffffcbbbbcbbbbbdbcccccccbdbbbbcbbcccccbcbbbb
    cccccccccccccccccccccccccbddbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbcbcccffffbdddddebbccbffffffffffffffffbbbbbbcccccccccccccbbbbdbeccccccccccccc
    cccccccccccccccccccccccbddbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbcbcccbbbcfccccffcfcdddddccbbbbcfffffffffffffffcccbbbcccccccccccccbbbbbbbccbbbcccccccc
    cccccccccccccccccccccbbddbccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbccccccccbbbcbcfffcddddddcbbcccfffffffffffffffcbcccbbbccbcbcccccccccccbbbbbceeccccccc
    cccccccccccccccccccbbddbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbcffffccbbbbcfffffffcebbbccccfcddddddccbbcbbccfcccccccccccccbcbbbbbcbcbccbcccbcccccccccccccccccbc
    ccccccccccccccccccbdddcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccffcbbbbbbbccbbcffcccbbbbbcfcbdddddbcbbecbccccccccccccccccbbbccccccccccbcccccccccfccccccccccccb
    ccccccccccccccccbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbcbdddbbbcfccccbbcccccceccbccbbcbbbcbbccccccbcccbcbcccbcccfccfffffffcffcccccc
    ccccccccccccccbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbcffcddddddeeccfcccccbbccbbbccbbccbbbbbbbbbcbbbbbcccccccccccccccccccbb
    ccccccccccccbdbbbcccccccccccccccccccbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcddbbcfcfffddddddbfccccbcccbbcbbbccbbcccccbbbcbcbbbbbbccbbcbcccccffccccccccc
    ccccccccccbbddbcccccccccccbbbbbdbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbdbbbcccfbddddddeccccbbbcbbbcbbbcbccbcccbcbcbbbbcbcbcccccccccbccbcbbcccccc
    cccccccccbdddbccccccccccbbbddbcbdbbbccccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcdbbbbbcbcfcddddddccbbbcbbccbbdbbccccbcfcbcccbbcccccbbccbcccccccccccccccbcbb
    cccccccbdddbccccccccccccbbecbbcbbbbccccccccbcccbbbbbbbbbccbbdbbdbbbbbbbbbbbbbbbbbbbcbdddccccffcdddddddfcbccbbbcbbbbccbbccccccbbbbbcbbbbbccccbccccbbbcccbccbbccc
    ccccccddddcccccccccccccccccccbbcbbcccccccccccbcbbbbbbbbccccbbbbbbbcbbbbbbbbbbbbbbbbcdbbffcccffcbddddddccbbccbbbcccbbcbbbcbbbbdddddbbcccbccbcccccbbbbccbcccccccb
    ccccbdddbcccccccccccccccccccccccdbebccccccccbbbbbbbbbbbcffffcbccccccbbbbbbbbbbbbbbbccccccfccfffbdddddddfcbbccbbbbcccdddddbdddddccbddddbbcccbbbcbbbccbbbbbccbbdb
    ccbdddbccccccccccccccccccccfcccceccccccccccccbbbbbbbbbccfffcccfcfcfcbbbbbbbbbbbbbbcccffccccccffcddddbbb7cccbcbbccbbbdddddbccbbbbdddddbbbcccccccbcccccccccbcccbd
    bbdddccccccccccccccccccffccccccccccccccccbccbbbbbbbcbbbccfcfcffffffbbbbbbbbbbbbbbbbcfccbbccccffcddddbcbcccccccccccccccfcdddddddddcccccccfbbbbbccccbbccccddbcccb
    bbdbccccccccccccccccccffffffffffffccccccccbcccccbbbbbbccfcfffffffffcbbbbbbbbbbbbbccfccccccffffffbddddddbecccbcccccccccfccccbcccccccccfccfcccccccbbbbbcbcdbcbbcc
    bbcccccccccccccccccccccffffffffccccccccccccbbcccccbccccfffffffffccccbbbbbbbbbbbbbbcccccfcfffffffbddbdddb7ccebbbbccccfcfccccfcccccfffffccfbbccccccccccbbb1dcccbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbccbccccffcfffcc7ecdeebfcfccccccccfffccccccccccffffffccbbbbbcbbbccbddbbcbcccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbccccccccffcccfcddbbcc77ee7eebcbcccccfccccccfcccfffffffccccbcfcbbdbccbcccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbcbbbbbbbbbbbbbbbbbbbbbccbbbbbcccbbcfcbddbbc7ccfccbefcccccccccccccfccfffffffffbbbccfcbcdcccccfccfccc
    ccccccccccccccccccccccccccccccccccccccccccccccbbbcbcccccccbbbbbbbbbbbbbbbbbbbbbbbbccbbbcccfcccffccddddbeebcffcbccccccccccccffffffffffffffccbcccdbcccbccccfcfccc
    fccccccccccccccccccccccccccccccccccccccccccccccbccccbbccbbbbbcbbbbbbbbbbbbbbbbbbbbccbbbbccccfffffcdbbecccfffccbbcccccccccccffffffffffffffccccbddbbccccccccfcfcc
    fcccccccccccccccccccccccccccccccccccccccccccccccbccccbcbbbccbcbbbbbbbbbdd1dbbbbcccccbbbbcbcccccffcccbcffcfcffccbcfffcccccccffffffffffffffbbcbbccbbcffffccfcfcfc
    cccccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbbdbbbbddbbccccbbbbbcbdbbbbbbccccfccccccfcfcffccccfffffcccccffffffffffffffcccccffffffcbffcccccff
    fcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcbcbbbbbbbccbbccbbccccccbbbbbcbdbbbbbbbcccfcccfffffffffffcfffffffffccffffffffffffffccbbbffffffbcfffccfccf
    ccfcccccccccccccccccccccccccccccccccccccccccccbdbdeddbcccbbbbbbbccbcccccccccbbbbbbbcbbbbbbbbbbccfcccccffffffffccccffffffffcffffffffffffffbbccbcfffff7ffffffffff
    ffccccccccccccccccccccccccccccccccbcccccccccccbbbbebbcfccbbbbbbbc6ccccccfccbbbbbbbbcbbbbbbbbbccffffccffffffcffccccfffffffffffffffffffffccfbcdbccffffccfffffffff
    fcfcccccccccccccccccccccccccbbbbbbbbbbcccccccfccccfcccffffcbbbbbbbcccffffccccbbbbdddddbbbbbbbcccfffcbccccccccffccccffcccffffffffffccfcfccccb1dccfff777fffffffff
    ffcccccccccbbbbdddbbbcccccccbbbbbbbddbbbbccccfccffffcffcccbbbbbbccccccccccccccbbdbdddddddbbbbcccfffcbbbbbbbbbcffcccffcccffffcccfccccffcccccb3dccffff77effffffff
    fcfcccccccccbbb66ccccccccccbbbbbbecbbddbdbcccffffffffffbbcbbbbbcccccccccccccbbbbbbcbdbbddbdbbcccfffcbbbbbbbbbbfcbcbccfccccfcffcfcccccccccccbbdbeffff77bffffffff
    fcfcccccccccccc86ccccccccccbbbbbbeebbbbbbbcccffffffffffcccbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbccfffcbddbbdbbbbcfcbcccfcccccffcfccccccfcffcee33beffffcccffffffff
    fcffcfcccccbcccccccccccccccbbbbbbbebbbbbbebcccfccccccccccccbcbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbccffccdddddddddbfccbbccfccccfccccccccccccccebddceecffffffccccfff
    ffcccccccccccccfffcfcccccccccceebbeebbbeecccccccccccccccccbbbbbbbbbcbccbbcbbbbbbbbbbbbbcbbbbcbbbcffccbddddddddbccbbbbeccccccfccccccfccecccccddccfccfffffccccccc
    ffcccccccccffffffffffcccccccccceebbeeeceeeebbccccccccccbbccbcbbbbbbbbbbbbbbcbbcccbbbbccbcccccbccccfccbdddddddddcccbbbcfccccbcfcccccbcbcccccbddccfccffffffcccccf
    ccfccfcccffffffffcccccccccccccfccbeeeebeeeeebbbbcccccccccbcbbbcbcbbcbbcbbbbccccccbbbcccccccccbccccffcbdddddddddbfcbbbbeccccccccbbbcccfcccccb11dcfcfffffccccbccc
    ffccfccffffffffccfccccccccccffffffeecccebbbbbcceebccccccccbbcbbbbbbcbbbbbbccccccccbcccccccccccfbcffffcddddddddddcffccccfcccbcffffccffccccccdddbcffffffffccccccc
    ccccccccffcfccccccccccccccfffffffceeccceebbbbbbbccccccccbbcccbbbbbbbbbbbbcccccccccccccffffffffcccffffcbdddddddddbffcccbcccccccccbbbbbccccbbccbcccccccccccccffcc
    fcfcccfcfcccccccccccccccfffffcccfffffcceeebbbfccccccccbbccbcbbbbcbbbcbbbbcfffffccccfffffffffffccccfffcbdddbddddddcfcbbbbfcbbbbcfbbbbbcccccccccccccbccccbbbbbccb
    cfcffccccccccccccccccccffffffffcffffceebbbccccccccbcbcbbbcbbbbbbbbbbbbbbcccffffffffffffffcccccccccfffccbbddddddddbfcfccccfccccccfcbbccccccccccccfcffccccccccccb
    ffccfccccccccfcccccccccffffffffffceebbbcfcccccccccccbccbcbcbbbbcbbbbbbbccccccfcfffffccccccccccccccfcffcbdbddddddddcfbbbbbfffccccfffccffcfccccfccccbffcbbbbcfffc
    ffcfcccccccccccccccccccffffffffffffcccccccccccccccccccccccbbbdbbbcbbbbbbbcccccccffffccbbccccccccccccffcbbdddddddddbfcbbbbbfcbbbbbccbbbbbcccccccccbbbecbbbbbbccf
    fffcccbdbcccccccccccccfcffffffffffffccccccccccccccccccccbbcbd1bbbbbbbbbbbccccccccccfbbbbcbceeeecccffcfccbdddddddddbffcbbbbccbbbbbbcccbbbbcccccccccccccccccbbcbc
    fffccccccbcbcbbdcccccccccfccfffffcfccccccccccccccccccccccccbd1bbbbbbbbbbbcbbcccccccfbbbbcbcefcfccfffffccdddddddddddbfffccccccccbbbbccfffcffccbcbffffffffccbbccc
    ccccccccccccccccbccbbbbbcbbbcccccccccccccccccccccccccccccccdddbcccccbbbbcccccccccccccbbbbbbeeeccccfffffcbddddddddddbcfffcbcffcccccccccccbbbccccccbbbbbcccccbbbb
    fcfcbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbddcfccbcbbbbcbbcccbcccccbbbbbbcccccccffffffbdbddddddddbcffccbbbfbbbbbbbbccbbbcbcccfcbbbbbbcccccbbb
    cfcbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbcccccbbbbbccbccbcccccccbbbbbbbccccffffffffcbbbbbdddddbbfccbbbbcfccbbbbbcfcbbbbcccffcbbccccccfcbcc
    fcfcbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbccccccbcbbcbbbcbbcccbccbbbbbccbcccfffffffffccccccccccccffccbbbcfffcccccccfccccccfcfffffccccfffccc
    cfcffffcccccccccbbbbbbbbbbbbbbbbbbcbbbbbbcccccccccccccccccfceecccccbbcbccbbbbbcccccccbbbbbbccfffffffffffcbdddddddddddbfcbbbbbccfbbbbbbbffffccbbbcffcbbbbbbcffcf
    cffffffcccccbccbbbbbbbbbbbbbbbbbbbccbbbbccccccccccccccccccfffcfccccccccccbbcbbbccccccbbbbbbccfffffffffffcbddddbddddddbccbbbbbbcfcbbbbbbbcfcbbbbbbbcccbbbbbbccff
    ffffffccccbcccbbbbbbbbbbbbbbbbbbbcccbbbcccccccccccccccccccffffcccccbbbbbbbbccccccccccbbbbbbbccfffffffffffcbdbdbdddddddbfcbbbbbbfcbbbcbbcbfcbbcbbbccfcccbbbbbcff
    ffcffccbccccbbbbbbbbbbbbbbbbbbbbcccbcbcccccccccccccccccccccfccccccbbbcccccbccccccccccbbbbbbbccccfffffffffcbdbbbdddbdddbccccccbccffcccccccfccbbccbbbcfcbbbbbbccc
    ffffccbcbbbbcbbbbbbbbbbbbbbbbbbbcccccbccccccccccccccccccccccccccccbcbccccbcccccbccbccbbbbbbbbccccccffffffcbddddbddddbdbcfffccccccffccccccccfcccccccccfccccccccc
    fcfccccbbbbbbbbbcbbbbbbbbbbbbbbcccccbddddbccccccccccccbbddbbbcccccbbcccbccbbbbbbcccccbbbbbbbbcccccccffffffcbbddddddddddbefbbbbbbbcfbbbbbbbccffffccccccfffffffff
    ffccbbbcbbbbbbbbbbbbbbbbbbbbbbcccbbdd11ddddbccccccccccbddbbbcbcccbcfcbbbddddddbdbbcccbbbbbbbbccccccccfffffcbdbdddddddbdbcfcbbbbbbbfcbbbbbbbbccbbbbbbbbbccbbbbbb
    fcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbddddddddbfccccccccfccfcdbfcccbcccfffcc7bbdddcffcffcbbddbbbbcccccccccffffcbdbddbddddddbbffcbbbbbbcfcbbbbbbbcfbbbbbbbbbcfcbbbbb
    cccbcbbcbbbbbbbbcbbbbbbbbbbbbcccfffcbddbccccccccccccccfcfccccccccbcffffc777777cffcffffcccbbbbbccccccccffffcbdbbbdbddddbdbeffcccbbbcffcbbcccccffcccbccccccfcbbbb
    cbccbcbbccbbbcbccbcbbbbbbbbbcccccccffcfcccccccccccccccccccccccccccccffffc7ccc6cffffffffffbbbbcbcccccccfffffcbbdddddddbbdbcfffcccccccfffffffffffffcccccccccfcccc
    ffffffcfcfcccccccffcccccccccccccccfccccccccccccccccccccccccccccccccfffffccccccfffffffffffbbbbbbbbccccccffffcbbbbbbbbbdbbbbffcbbbbbbbcfcbbccbbccffcbbbbbbbbbfffc
    ffffffffcfcfcccffcccccccccccccccccccfcccccccccccccccccccccccccbbcbcfffffccccccfffffffccccbbbbbbbbbcccccffffccbbbdbbbbbbbbbbffbbbbbbbbffcbbbbbbbcffbbbbbbbbbbccc
    ffcffffcccffffcfcfffccfcfcccccccccccccccccccccccccccccccccccccbccccfffffcfcfcfffffffcbbbbbbbbbbccbcccccfffffbbbbbbbbbbbbbbbfccccbbbbccfccccbbcbccfcbbbbbbbbbcfc
    ffffffffcfccccfcfcffcccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffccfbbbbbbbbbbbbbcccccfffffcbbbbbbbbbbdbbbefcffffccbcfffffccccccfcbbbbbbbbbbff
    fcfffffcffffcfcfccfcfccccccccccccccccccccccccfcccccccccccccccccccccffffffffffffffffffcbbbbbbbbbbbccccccfffffcbbbbbbdbbbbbbbbffffffffccfffccccfcbccfcccccccccccf
    fffffcffffffccffcccfffccccccccccfccccccccccccccccccccccccccccccccccffffffffffffffffffcccccbbbbbbbcccccccffffccbbdbbdbbbbbbbbcfffcccbbbcffccbbbbbbcfffffffffffff
    ffffffffffffccfffccccccccccccfcccccccccccccccccccccccccccccccccccccffffffffffffffffffcbbbbbbbbbbbbbcccccfffffcbbbbbbbbbbbbbbbffccbbbbbbbcfcbbbbbbbbccfffcbbbbbb
    fffcffffffccfffcffcccccccccffffcccfccccccccccccccccccccccccccccccccffffffcffffffffcfccbbbbbbbbbbbbccccccfffffcbbbbbbbbbbbbbbbcfccbbbbbbbbfcbbbbbbbbbbcfffbbbbbb
    fcffcfffffffccfffccfcffccccccccccccccfccccccccccccccccccccccccccccccffcccccccccfffccccbbbbbbbbbbbbccccccfffffccbbbbbbbbbbbbbbbfffcbbbbbbbbccbbbbbccccccffcbbbbb
    `)
info.setLife(10)
info.setScore(0)
controller.moveSprite(mySprite)
