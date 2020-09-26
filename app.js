//creating search box
var div = document.createElement("div");
document.getElementById("searchBox").appendChild(div);

//creating an unordered list of pokemon
var ul = document.createElement("ul");
ul.setAttribute('id', 'myUL');


//creating list element 
var li1 = document.createElement('li');
var ul1 = document.createElement("ul")
li1.setAttribute('class', 'gallery1');
li1.setAttribute('id', 'li');
var image = document.createElement('img');
image.src  = 'Pokemon/Bulbasaur.png';
image.setAttribute('class', 'img1');
var p = document.createElement("P");
var allStats = document.createElement('div')
var pokemon = document.createTextNode("Bulbasaur");
var listText = document.createTextNode("ID: 001");
//Type: Grass, Rarity: Four, Fast Move: Tackle
var stats = document.createTextNode("Bulbasaur is grass type with a rarity of four and its fast move is tackle");
var breakup = document.createElement('br')
p.append(pokemon)
li1.appendChild(image);
li1.append(p);
li1.appendChild(listText);
li1.appendChild(breakup);
li1.append(stats);
ul.appendChild(li1);

var li2 = document.createElement('li');
li2.setAttribute('class', 'gallery1')
var image = document.createElement('img');
image.src  = 'Pokemon/Ivysaur.png';
image.setAttribute('class', 'img1')
var listText = document.createTextNode("ID: 2");
var p = document.createElement("P");
var pokemon = document.createTextNode("Ivysaur");
p.append(pokemon)
li2.appendChild(image)
li2.append(p)
li2.appendChild(listText)
ul.appendChild(li2)

var li3 = document.createElement('li');
li3.setAttribute('class', 'gallery1')
var image = document.createElement('img');
image.src = 'Pokemon/Venusaur.png';
image.setAttribute('class', 'img1')
var listText = document.createTextNode("ID: 3");
var p = document.createElement("P");
var pokemon = document.createTextNode("Venusaur");
p.append(pokemon)
li3.appendChild(image)
li3.append(p)
li3.appendChild(listText)
ul.appendChild(li3)


var li4 = document.createElement('li');
li4.setAttribute('class', 'gallery1')
var image = document.createElement('img');
image.src  = 'Pokemon/Charmander.png';
image.setAttribute('class', 'img1');
var p = document.createElement("P");
var pokemon = document.createTextNode("Charmander");
var listText = document.createTextNode("ID: 4");
p.appendChild(pokemon)
li4.appendChild(image)
li4.append(p)
li4.appendChild(listText)
ul.appendChild(li4)

div.appendChild(ul)

pokemon = [
    {name: 'Bulbasaur', id: 1, description: 'Rarity: 4, Type: Grass, Fast Move: Tackle'},
    {name: 'Iveysaur', id: 2, description:'Rarity:5, Type: Grass, Fast Move: Rasor Leaf'},
    {name: 'Venusaur', id: 3, description:'Rarity: 6, Type: Grass, Fast Move: Rasor Leaf'},
    {name: 'Charmander', id: 4, description: 'Rarity: 4, Type: Fire, Fast Move: Ember'},
    {name: 'Charmeleon', id: 5, description: 'Rarity: 5, Type: Fire, Fast Move: Ember'},
    {name: 'Charizard', id: 6, description:'Rarity: 6, Type: Fire, Fast Move: Fire Spin'},
    {name: 'Squirtle', id: 7, description: 'Rarity: 4, Type: Water, Fast Move: Tackle'},
    {name: 'Wartortle', id: 8, description:'Rarity: 4, Type: Water, Fast Move: Bite'},
    {name: 'Blastoise', id: 9, description:'Rarity: 6, Type: Water, Fast Move: Bite'},
    {name: 'Caterpie', id: 10, description: 'Rarity: 1, Type: Bug, Fast Move: Tackles'},
    {name:'Metapod', id: 11, description: 'Rarity: 3, Type: Bug, Fast Move: Tackles'},
    {name:'Buterfree', id: 12, description:'Rarity: 4, Type: Bug, Fast Move: Struggle Bug'},
    {name:'Weedle', id:13, description:'Rarity: 1, Type: Bug, Fast Move: Bug bite'},
    {name: 'Kakuna', id:14, description: 'Rarity: 3, Type: Bug, Fast Move: Bug Bite'},
    {name: 'Beedrill', id:15, description: 'Rarity: 4, Type: Bug, Fast Move: Infestation'}, 
    {name: 'Pidgey', id: 16, description: 'Rarity: 1, Type: Normal, Fast Move: Tackles'},
    {name: 'Pidgeotto', id:17, description: 'Rarity: 3, Type: Normal, Fast Move: Wing Attack'},
    {name: 'Pidgeot', id: 18, description: 'Rarity: 4, Type: Normal, Fast Move: Air Slash'},
    {name:'Rattata', id: 19, description: 'Rarity: 1, Type: Normal, Fast Move: Tackle'},
    {name: 'Raticate', id: 20, description: 'Rarity: 4, Type Normal, Fast Move: Bite'}]
    

    function filter() {
        // Declare variables
        let input, filter, ul, li, txtValue;
        input = document.forms["nameForm"]["fName"];
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
       
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("P")[0];
            
          txtValue = a.textContent || a.innerText;
        if (filter === ""){
            li[i].style.display = "none";
        }
         else if (txtValue.toUpperCase().includes(filter)) {
            li[i].style.display = "block";
          } 
          else {
            console.log('not showing')
            li[i].style.display = "none";
          }
        }
      }

       
    function filterNum() {
        // Declare variables
        let input, filter, ul, li, txtValue;
        input = document.forms["numForm"]["fNum"];
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i];
         
          txtValue = a.textContent || a.innerText;
          //txtValue.toUpperCase().indexOf(filter) > 0
        
        if (txtValue.toUpperCase().indexOf(filter) > 0) {
            li[i].style.display = "block";
          } 
          else {
            console.log('not showing')
            li[i].style.display = "none";
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