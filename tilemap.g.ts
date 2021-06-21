// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404040404040401040401010101040101010404040404010404010101010401020104040404040104040101010104010101040404040401010404010101040101010404040404040001040401010101040101010104040404010104010101040404040401040404040101040404010104010101010101040401010401040401040101040404010101010404010404040401010404040401010404040104040101010101040404040104040401040401040401010104040401010104010401010401010101010404040401010104040404010404040101040404010301040404010404040401010101010101010404040404040404040404010104040404`, img`
2 2 2 2 2 2 2 2 2 . 2 2 . . . . 
2 . . . 2 2 2 2 2 . 2 2 . . . . 
2 . . . 2 2 2 2 2 . 2 2 . . . . 
2 . . . 2 2 2 2 2 2 . 2 2 . . . 
2 . . . 2 2 2 2 2 2 2 . 2 2 . . 
. . 2 . . . . 2 2 2 2 2 . 2 . . 
. 2 2 2 2 2 . 2 2 2 2 . . 2 2 2 
. . 2 . . . . . . 2 2 . . 2 . 2 
2 . 2 . . 2 2 2 . . . . 2 2 . 2 
2 2 2 . . 2 2 2 2 . . 2 2 2 . 2 
2 . . . . . 2 2 2 2 . 2 2 2 . 2 
2 . 2 2 . . . 2 2 2 . . . 2 . 2 
. . 2 . . . . . 2 2 2 2 2 . . 2 
2 2 2 . 2 2 2 . . 2 2 2 . . . 2 
2 2 . 2 2 2 2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
