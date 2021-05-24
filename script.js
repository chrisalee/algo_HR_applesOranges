/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges( s, t, a, b, fallenApples, fallenOranges ) {
     debugger;  // for stepping thru with chrome dev tools
     let appleTree             = a,
          orangeTree           = b,
          houseLeft            = s,
          houseRight           = t,
          houseWidth           = Math.abs( houseRight - houseLeft ),
          appleHouseLeftDist   = Math.abs( houseLeft - appleTree ),
          appleHouseRightDist  = Math.abs( houseRight - appleTree ),
          orangeHouseLeftDist  = Math.abs( orangeTree - houseLeft ),
          orangeHouseRightDist = Math.abs( orangeTree - houseRight );
     let appleHits = 0;
     let orangeHits = 0;

     for (let i = 0; i < fallenApples.length; i++) {
         if(fallenApples[ i ] <= 0){
             continue;
         }
         if(fallenApples[ i ] >= appleHouseLeftDist && fallenApples[ i ] <= appleHouseRightDist){
             appleHits++;
         }
     }
     for (let i = 0; i < fallenOranges.length; i++) {
         if( fallenOranges[ i ] >= 0 ){
            continue;
         }
         if( -fallenOranges[ i ] <= orangeHouseLeftDist && -fallenOranges[ i ] >= orangeHouseRightDist ){
             orangeHits++;
         }
     }
     console.log(appleHits);
     console.log(orangeHits);
 }
