class form {
   constructor(){}
   display(){
       var title = createElement('h2');
       title.html("π²π°π ππ°π²πΈπ½πΆ πΆπ°πΌπ΄ ");
       title.position(130,0);
       var input = createInput("name");
       var button = createButton('πΏπ»π°π');
       var greeting = createElement('h3');
       input.position(130,160);
       button.position(250,200);
       button.mousePressed(function(){
           input.hide();
           button.hide();
           var name = input.value();
           playerCount += 1;
           player.update(name);
           player.updateCount(playerCount);
           greeting.html("π·π΄π»π»πΎ"+ name);
           greeting.position(130,160)
           
       });


       

   } 

}