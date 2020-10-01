//creating search box
let div = document.createElement("div");
div.setAttribute("id", 'resultBox')
document.getElementById("searchBox").appendChild(div);

//creating an unordered list of pokemon
let ul = document.createElement("ul");
ul.setAttribute('id', 'myUL');

pokemon = [
    {name: 'Bulbasaur', id: 1, description: 'Rarity: 4, Type: Grass, Fast Move: Tackle', pic:'Pokemon/Bulbasaur.png' },
    {name: 'Ivysaur', id: 2, description:'Rarity:5, Type: Grass, Fast Move: Rasor Leaf', pic:'Pokemon/Ivysaur.png'},
    {name: 'Venusaur', id: 3, description:'Rarity: 6, Type: Grass, Fast Move: Rasor Leaf', pic:'Pokemon/Venusaur.png'},
    {name: 'Charmander', id: 4, description: 'Rarity: 4, Type: Fire, Fast Move: Ember', pic:'Pokemon/Charmander.png'},
    {name: 'Charmeleon', id: 5, description: 'Rarity: 5, Type: Fire, Fast Move: Ember', pic:'Pokemon/Charmeleon.png'},
    {name: 'Charizard', id: 6, description:'Rarity: 6, Type: Fire, Fast Move: Fire Spin', pic:'Pokemon/Charizard.png'},
    {name: 'Squirtle', id: 7, description: 'Rarity: 4, Type: Water, Fast Move: Tackle', pic:'Pokemon/Squirtle.png'},
    {name: 'Wartortle', id: 8, description:'Rarity: 4, Type: Water, Fast Move: Bite', pic:'Pokemon/Wartortle.png'},
    {name: 'Blastoise', id: 9, description:'Rarity: 6, Type: Water, Fast Move: Bite', pic:'Pokemon/Blastoise.png'},
    {name: 'Caterpie', id: 10, description: 'Rarity: 1, Type: Bug, Fast Move: Tackles', pic:'Pokemon/Caterpie.png'},
    {name:'Metapod', id: 11, description: 'Rarity: 3, Type: Bug, Fast Move: Tackles', pic:'Pokemon/Metapod.png'},
    {name:'Buterfree', id: 12, description:'Rarity: 4, Type: Bug, Fast Move: Struggle Bug', pic:'Pokemon/Butterfree.png'},
    {name:'Weedle', id:13, description:'Rarity: 1, Type: Bug, Fast Move: Bug bite', pic:'Pokemon/Weedle.png'},
    {name: 'Kakuna', id:14, description: 'Rarity: 3, Type: Bug, Fast Move: Bug Bite', pic:'Pokemon/Kakuna.png'},
    {name: 'Beedrill', id:15, description: 'Rarity: 4, Type: Bug, Fast Move: Infestation', pic:'Pokemon/Beedrill.png'}, 
    {name: 'Pidgey', id: 16, description: 'Rarity: 1, Type: Normal, Fast Move: Tackles', pic:'Pokemon/Pidgey.png'},
    {name: 'Pidgeotto', id:17, description: 'Rarity: 3, Type: Normal, Fast Move: Wing Attack', pic:'Pokemon/Pidgeotto.png'},
    {name: 'Pidgeot', id: 18, description: 'Rarity: 4, Type: Normal, Fast Move: Air Slash', pic:'Pokemon/Pidgeot.png'},
    {name:'Rattata', id: 19, description: 'Rarity: 1, Type: Normal, Fast Move: Tackle', pic:'Pokemon/Rattata.png'},
    {name: 'Raticate', id: 20, description: 'Rarity: 4, Type Normal, Fast Move: Bite', pic:'Pokemon/Raticate.png'}]
    

    function filterName() {
        // Declare variables
        let input, filter, ul, li, txtValue;
        input = document.forms["nameForm"]["fName"];
        filter = input.value.toUpperCase();
        ul = document.createElement('ul');
        // Loop through all list items, and hide those who don't match the search query
        let del = document.getElementById('resultBox');

        //deleting the previous list if there is one
        while(del.firstChild){
        del.removeChild(del.firstChild);
        }

        //looping through all pokemon to determine if there is a match
        for (i = 0; i < pokemon.length; i++) {
            a = pokemon[i].name;

        //if there is no input dont output a list element
        if (filter === ""){
          let del = document.getElementById('resultBox');
          while(del.firstChild){
          del.removeChild(del.firstChild);
          }
        }
        //if there is a matching pokemon dynamically create a list element with all of the pokemon info
         else if (a.toUpperCase().includes(filter)) {
            //creating a list element and setting class name
            li = document.createElement("li");
            li.setAttribute('class', 'newgaller');
            //creating paragraph element and img element
            p = document.createElement('P');
            img = document.createElement('img');
            img.src = pokemon[i].pic;
            img.setAttribute('class', 'newimg');
            //creating text elements 
            txt = document.createTextNode(pokemon[i].name);
            id = document.createTextNode('ID: ' + pokemon[i].id);
            desc = document.createTextNode(pokemon[i].description);
            //appending all text to elements 
            p.appendChild(txt)
            li.appendChild(id);
            li.appendChild(img);
            li.appendChild(p);
            li.appendChild(desc);
            ul.appendChild(li)
            div.appendChild(ul);           
          } 
        }
      }

       
    function filterNum() {
        // Declare variables
        let input, filter, ul, li, txtValue;
        input = document.forms["numForm"]["fNum"];
        filter = input.value.toUpperCase();
        ul = document.createElement('ul');
        ul.setAttribute('id', 'resultul');
        div.append(ul);
        // Loop through all list items, and hide those who don't match the search query
        let del = document.getElementById('resultBox');

        //deleting the previous list if there is one
        while(del.firstChild){
            del.removeChild(del.firstChild);
        }

         //if there is a matching pokemon dynamically create a list element with all of the pokemon info
        for (i = 0; i < pokemon.length; i++) {
          a = pokemon[i].toString();
         
           //if there is no input dont output a list element
          if (filter === ""){
            let del = document.getElementById('resultBox');
            while(del.firstChild){
            del.removeChild(del.firstChild);
          }
        }

        //if there is a matching pokemon dynamically create a list element with all of the pokemon info
        else if (pokemon[i].id.toString().includes(filter.toString())) {
             //creating a list element and setting class name
            li = document.createElement("li");
            li.setAttribute('class', 'newgaller');
            //creating paragraph element and img element
            li.setAttribute('id', li);
            p = document.createElement('P');
            img = document.createElement('img');
            img.src = pokemon[i].pic;
            img.setAttribute('class', 'newimg');
             //creating text elements 
            txt = document.createTextNode(pokemon[i].name);
            id = document.createTextNode('ID: ' + pokemon[i].id);
            desc = document.createTextNode(pokemon[i].description);
            //appending all text to elements 
            p.append(txt)
            li.append(id);
            li.append(img);
            li.append(p);
            li.append(desc);
            ul.append(li)
            div.append(ul);
          } 
        }
      }

   
    //function to search according to number 
    function checkNum() {
        let text = "";
        let counter = 0;
        //getting user input
        var x = document.forms["numForm"]["fNum"].value;
         //validating the users input
        if (x <= 0 || x>20) {
            alert("input invalid");  
        }
        //if the users input is valid 
        else{
            //going through the pokemon array
            for(let i = 0; i < pokemon.length; i++){
                //checking if the users input matches any of the pokemon id
                if (pokemon[i].id.toString().includes(x.toString())){

                     //up to 5
                    if (counter<5){                
                        text += "Name: " + pokemon[i].name + " ID: " + pokemon[i].id + " " + pokemon[i].description + "\n";
                        counter++;
                    }   
                }    
            } 
            //printing the matching pokemon
            alert(text)
        }
    }
    
    //function to search according to name
    function checkName() {
        let text = "";
        let msg = [];
        let counter = 0;
        //getting users input and turning it to lower case
        var x = document.forms["nameForm"]["fName"].value;
        x = x.toLowerCase();
        
        var letters = /^([A-Za-z]*)$/;
        //validating input
        if (x.length == 0 || x.length > 20 || x.search(letters) ) {
          alert('input invalid');
        }
        //if the input is valid
        else{
        //go through all pokemon and check for matches
            for(let i = 0; i < pokemon.length; i++){
                if (pokemon[i].name.toLowerCase().includes(x)){
                //up to five
                if (counter<5){
                    text += "Name: " + pokemon[i].name + " ID: " + pokemon[i].id + " " + pokemon[i].description +  "\n";
                    counter++;
                }
            }
        } 
        //if there are pokemons found print them
        if (text != ""){
            alert(text)
        }  else{
            alert('No Matches Found')
        }
         
        } 
       
    }