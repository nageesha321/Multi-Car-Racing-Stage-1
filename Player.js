class Player{
    constructor(){

    }
        getCount(){
            var playerCountRef = database.ref('playerCount');
            playerCountRef.on("value", function(data){
                playerCount = data.val();
            }
            )
    
    
        }
        update(count){
            database.ref('/').update({
                PlayerCount:count
            });
        }
        update(name){
            var playerIndex = "player"+playerCount;
            database.ref(playerIndex).set({
                name:name
            });
        }
}