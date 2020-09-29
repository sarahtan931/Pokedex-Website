//creating search box
let div = document.createElement("div");
document.getElementById("searchBox").appendChild(div);

//creating an unordered list of pokemon
let ul = document.createElement("ul");
ul.setAttribute('id', 'myUL');


//creating list element 
let li1 = document.createElement('li');
let ul1 = document.createElement("ul");
li1.setAttribute('class', 'newgallery');
li1.setAttribute('id', 'li');
let image1 = document.createElement('img');
image1.src  = 'Pokemon/Bulbasaur.png';
image1.setAttribute('class', 'newimg');
let p1 = document.createElement("P");
let pokemon1 = document.createTextNode("Bulbasaur");
let id1 = document.createTextNode("ID: 001");
let stats1 = document.createTextNode("Bulbasaur is grass type with a rarity of four and its fast move is tackle");
p1.append(pokemon1);
li1.appendChild(id1);
li1.appendChild(image1);
li1.append(p1);
li1.append(stats1);
ul.appendChild(li1);

let li2 = document.createElement('li');
let ul2 = document.createElement("ul");
li2.setAttribute('class', 'newgallery');
li2.setAttribute('id', 'li');
let image2 = document.createElement('img');
image2.src  = 'Pokemon/Ivysaur.png';
image2.setAttribute('class', 'newimg');
let p2 = document.createElement("P");
let pokemon2 = document.createTextNode("Iveysaur");
let id2 = document.createTextNode("ID: 002");
let stats2 = document.createTextNode("Ivysaur is grass type with a rarity of five and its fast move is razor leaf");
p2.append(pokemon2);
li2.appendChild(id2);
li2.appendChild(image2);
li2.append(p2);
li2.append(stats2);
ul.appendChild(li2);

let li3 = document.createElement('li');
let ul3 = document.createElement("ul");
li3.setAttribute('class', 'newgallery');
li3.setAttribute('id', 'li');
let image3 = document.createElement('img');
image3.src  = 'Pokemon/Venusaur.png';
image3.setAttribute('class', 'newimg');
let p3 = document.createElement("P");
let pokemon3 = document.createTextNode("Venusaur");
let id3 = document.createTextNode("ID: 003");
let stats3 = document.createTextNode("Venusaur is grass type with a rarity of six and its fast move is razor leaf");
p3.append(pokemon3);
li3.appendChild(id3);
li3.appendChild(image3);
li3.append(p3);
li3.append(stats3);
ul.appendChild(li3);

let li4 = document.createElement('li');
let ul4 = document.createElement("ul");
li4.setAttribute('class', 'newgallery');
li4.setAttribute('id', 'li');
let image4 = document.createElement('img');
image4.src  = 'Pokemon/Charmander.png';
image4.setAttribute('class', 'newimg');
let p4 = document.createElement("P");
let pokemon4 = document.createTextNode("Charmander");
let id4 = document.createTextNode("ID: 004");
let stats4 = document.createTextNode("Charmander is fire type with a rarity of four and its fast move is ember");
p4.append(pokemon4);
li4.appendChild(id4);
li4.appendChild(image4);
li4.append(p4);
li4.append(stats4);
ul.appendChild(li4);

let li5 = document.createElement('li');
let ul5 = document.createElement("ul");
li5.setAttribute('class', 'newgallery');
li5.setAttribute('id', 'li');
let image5 = document.createElement('img');
image5.src  = 'Pokemon/Charmeleon.png';
image5.setAttribute('class', 'newimg');
let p5 = document.createElement("P");
let pokemon5 = document.createTextNode("Charmeleon");
let id5 = document.createTextNode("ID: 005");
let stats5 = document.createTextNode("Charmaeleon is fire type with a rarity of five and its fast move is ember");
p5.append(pokemon5);
li5.appendChild(id5);
li5.appendChild(image5);
li5.append(p5);
li5.append(stats5);
ul.appendChild(li5);

let li6 = document.createElement('li');
let ul6 = document.createElement("ul");
li6.setAttribute('class', 'newgallery');
li6.setAttribute('id', 'li');
let image6 = document.createElement('img');
image6.src  = 'Pokemon/Charizard.png';
image6.setAttribute('class', 'newimg');
let p6 = document.createElement("P");
let pokemon6 = document.createTextNode("Charizard");
let id6 = document.createTextNode("ID: 006");
let stats6 = document.createTextNode("Charizard is fire type with a rarity of six and its fast move is fire spin");
p6.append(pokemon6);
li6.appendChild(id6);
li6.appendChild(image6);
li6.append(p6);
li6.append(stats6);
ul.appendChild(li6);

let li7 = document.createElement('li');
let ul7 = document.createElement("ul");
li7.setAttribute('class', 'newgallery');
li7.setAttribute('id', 'li');
let image7 = document.createElement('img');
image7.src  = 'Pokemon/Squirtle.png';
image7.setAttribute('class', 'newimg');
let p7 = document.createElement("P");
let pokemon7 = document.createTextNode("Squirtle");
let id7 = document.createTextNode("ID: 007");
let stats7 = document.createTextNode("Squirtle is water type with a rarity of four and its fast move is tackle");
p7.append(pokemon7);
li7.appendChild(id7);
li7.appendChild(image7);
li7.append(p7);
li7.append(stats7);
ul.appendChild(li7);

let li8 = document.createElement('li');
let ul8 = document.createElement("ul");
li8.setAttribute('class', 'newgallery');
li8.setAttribute('id', 'li');
let image8 = document.createElement('img');
image8.src  = 'Pokemon/Wartortle.png';
image8.setAttribute('class', 'newimg');
let p8 = document.createElement("P");
let pokemon8 = document.createTextNode("Wartortle");
let id8 = document.createTextNode("ID: 008");
let stats8 = document.createTextNode("Wartortle is water type with a rarity of five and its fast move is bite");
p8.append(pokemon8);
li8.appendChild(id8);
li8.appendChild(image8);
li8.append(p8);
li8.append(stats8);
ul.appendChild(li8);

let li9 = document.createElement('li');
let ul9 = document.createElement("ul");
li9.setAttribute('class', 'newgallery');
li9.setAttribute('id', 'li');
let image9 = document.createElement('img');
image9.src  = 'Pokemon/Blastoise.png';
image9.setAttribute('class', 'newimg');
let p9 = document.createElement("P");
let pokemon9 = document.createTextNode("Blastoise");
let id9 = document.createTextNode("ID: 009");
let stats9 = document.createTextNode("Blastoise is water type with a rarity of six and its fast move is bite");
p9.append(pokemon9);
li9.appendChild(id9);
li9.appendChild(image9);
li9.append(p9);
li9.append(stats9);
ul.appendChild(li9);

let li10 = document.createElement('li');
let ul10 = document.createElement("ul");
li10.setAttribute('class', 'newgallery');
li10.setAttribute('id', 'li');
let image10 = document.createElement('img');
image10.src  = 'Pokemon/Caterpie.png';
image10.setAttribute('class', 'newimg');
let p10 = document.createElement("P");
let pokemon10 = document.createTextNode("Caterpie");
let id10 = document.createTextNode("ID: 010");
let stats10 = document.createTextNode("Caterpie is bug type with a rarity of one and its fast move is tackles");
p10.append(pokemon10);
li10.appendChild(id10);
li10.appendChild(image10);
li10.append(p10);
li10.append(stats10);
ul.appendChild(li10);

let li11 = document.createElement('li');
let ul11 = document.createElement("ul");
li11.setAttribute('class', 'newgallery');
li11.setAttribute('id', 'li');
let image11 = document.createElement('img');
image11.src  = 'Pokemon/Caterpie.png';
image11.setAttribute('class', 'newimg');
let p11 = document.createElement("P");
let pokemon11 = document.createTextNode("Metapod");
let id11 = document.createTextNode("ID: 011");
let stats11 = document.createTextNode("Metapod is bug type with a rarity of three and its fast move is tackles");
p11.append(pokemon11);
li11.appendChild(id11);
li11.appendChild(image11);
li11.append(p11);
li11.append(stats11);
ul.appendChild(li11);

let li12 = document.createElement('li');
let ul12 = document.createElement("ul");
li12.setAttribute('class', 'newgallery');
li12.setAttribute('id', 'li');
let image12 = document.createElement('img');
image12.src  = 'Pokemon/Butterfree.png';
image12.setAttribute('class', 'newimg');
let p12 = document.createElement("P");
let pokemon12 = document.createTextNode("Butterfree");
let id12 = document.createTextNode("ID: 012");
let stats12 = document.createTextNode("Butterfree is bug type with a rarity of four and its fast move is struggle bug");
p12.append(pokemon12);
li12.appendChild(id12);
li12.appendChild(image12);
li12.append(p12);
li12.append(stats12);
ul.appendChild(li12);

let li13 = document.createElement('li');
let ul13 = document.createElement("ul");
li13.setAttribute('class', 'newgallery');
li13.setAttribute('id', 'li');
let image13 = document.createElement('img');
image13.src  = 'Pokemon/Weedle.png';
image13.setAttribute('class', 'newimg');
let p13 = document.createElement("P");
let pokemon13 = document.createTextNode("Weedle");
let id13 = document.createTextNode("ID: 013");
let stats13 = document.createTextNode("Weedle is bug type with a rarity of one and its fast move is bug bite");
p13.append(pokemon13);
li13.appendChild(id13);
li13.appendChild(image13);
li13.append(p13);
li13.append(stats13);
ul.appendChild(li13);

let li14 = document.createElement('li');
let ul14 = document.createElement("ul");
li14.setAttribute('class', 'newgallery');
li14.setAttribute('id', 'li');
let image14 = document.createElement('img');
image14.src  = 'Pokemon/Kakuna.png';
image14.setAttribute('class', 'newimg');
let p14 = document.createElement("P");
let pokemon14 = document.createTextNode("Kakuna");
let id14 = document.createTextNode("ID: 014");
let stats14 = document.createTextNode("Kakuna is bug type with a rarity of three and its fast move is bug bite");
p14.append(pokemon14);
li14.appendChild(id14);
li14.appendChild(image14);
li14.append(p14);
li14.append(stats14);
ul.appendChild(li14);


let li15 = document.createElement('li');
let ul15 = document.createElement("ul");
li15.setAttribute('class', 'newgallery');
li15.setAttribute('id', 'li');
let image15 = document.createElement('img');
image15.src  = 'Pokemon/Beedrill.png';
image15.setAttribute('class', 'newimg');
let p15 = document.createElement("P");
let pokemon15 = document.createTextNode("Beedrill");
let id15 = document.createTextNode("ID: 015");
let stats15 = document.createTextNode("Beedrill is bug type with a rarity of four and its fast move is infestation");
p15.append(pokemon15);
li15.appendChild(id15);
li15.appendChild(image15);
li15.append(p15);
li15.append(stats15);
ul.appendChild(li15);

let li16 = document.createElement('li');
let ul16 = document.createElement("ul");
li16.setAttribute('class', 'newgallery');
li16.setAttribute('id', 'li');
let image16 = document.createElement('img');
image16.src  = 'Pokemon/Pidgey.png';
image16.setAttribute('class', 'newimg');
let p16 = document.createElement("P");
let pokemon16 = document.createTextNode("Pidgey");
let id16 = document.createTextNode("ID: 016");
let stats16 = document.createTextNode("Pidgey is normal type with a rarity of one and its fast move is tackle");
p16.append(pokemon16);
li16.appendChild(id16);
li16.appendChild(image16);
li16.append(p16);
li16.append(stats16);
ul.appendChild(li16);

let li17 = document.createElement('li');
let ul17 = document.createElement("ul");
li17.setAttribute('class', 'newgallery');
li17.setAttribute('id', 'li');
let image17 = document.createElement('img');
image17.src  = 'Pokemon/Pidgeotto.png';
image17.setAttribute('class', 'newimg');
let p17 = document.createElement("P");
let pokemon17 = document.createTextNode("Pidgeotto");
let id17 = document.createTextNode("ID: 017");
let stats17 = document.createTextNode("Pidgeotto is normal type with a rarity of three and its fast move is wing attack");
p17.append(pokemon17);
li17.appendChild(id17);
li17.appendChild(image17);
li17.append(p17);
li17.append(stats17);
ul.appendChild(li17);

let li18 = document.createElement('li');
let ul18 = document.createElement("ul");
li18.setAttribute('class', 'newgallery');
li18.setAttribute('id', 'li');
let image18 = document.createElement('img');
image18.src  = 'Pokemon/Pidgeot.png';
image18.setAttribute('class', 'newimg');
let p18 = document.createElement("P");
let pokemon18 = document.createTextNode("Pidgeot");
let id18 = document.createTextNode("ID: 018");
let stats18 = document.createTextNode("Pidgeot is normal type with a rarity of four and its fast move is air slash");
p18.append(pokemon18);
li18.appendChild(id18);
li18.appendChild(image18);
li18.append(p18);
li18.append(stats18);
ul.appendChild(li18);

let li19 = document.createElement('li');
let ul19 = document.createElement("ul");
li19.setAttribute('class', 'newgallery');
li19.setAttribute('id', 'li');
let image19 = document.createElement('img');
image19.src  = 'Pokemon/Rattata.png';
image19.setAttribute('class', 'newimg');
let p19 = document.createElement("P");
let pokemon19 = document.createTextNode("Rattata");
let id19 = document.createTextNode("ID: 019");
let stats19 = document.createTextNode("Rattata is normal type with a rarity of one and its fast move is tackle");
p19.append(pokemon19);
li19.appendChild(id19);
li19.appendChild(image19);
li19.append(p19);
li19.append(stats19);
ul.appendChild(li19);

let li20 = document.createElement('li');
let ul20 = document.createElement("ul");
li20.setAttribute('class', 'newgallery');
li20.setAttribute('id', 'li');
let image20 = document.createElement('img');
image20.src  = 'Pokemon/Raticate.png';
image20.setAttribute('class', 'newimg');
let p20 = document.createElement("P");
let pokemon20 = document.createTextNode("Raticate");
let id20 = document.createTextNode("ID: 020");
let stats20 = document.createTextNode("Raticate is normal type with a rarity of four and its fast move is bite");
p20.append(pokemon20);
li20.appendChild(id20);
li20.appendChild(image20);
li20.append(p20);
li20.append(stats20);
ul.appendChild(li20);

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
          if (filter === ""){
            li[i].style.display = "none";
        }
        else if (txtValue.toUpperCase().includes(filter)) {
            li[i].style.display = "block";
          } 
          else {
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