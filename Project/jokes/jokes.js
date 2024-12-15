document.getElementById("jokebutton").addEventListener("click",fetchJoke);

const jokesgen = document.getElementById("jokesgen");

function fetchJoke() {
    const randomidx = Math.floor(Math.random()*50);
    jokesgen.textContent = jokes[randomidx];
}

const jokes = [
    "hi",
    "I told my wife she should embrace her mistakes—she gave me a hug.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I’m on a whiskey diet… I’ve lost three days already.",
    "Parallel lines have so much in common—it’s a shame they’ll never meet.",
    "I’m reading a book on anti-gravity—it’s impossible to put down.",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    "I used to hate facial hair, but then it grew on me.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "I asked the librarian if the library had any books on paranoia—she whispered, 'They’re right behind you.'",
    "I’m friends with all the letters of the alphabet except N—I don’t know why.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "The future, the present, and the past walked into a bar—it was tense.",
    "I told my wife she should spend less money; now I’m sleeping on the couch.",
    "I named my dog 'Five Miles' so I can tell people I walk five miles every day.",
    "Why don’t bakers ever get in trouble? Because they always knead the dough.",
    "What do you call fake spaghetti? An impasta.",
    "I used to play piano by ear, but now I use my hands.",
    "I don’t trust stairs—they’re always up to something.",
    "Why was the math book sad? It had too many problems.",
    "I got fired from the orange juice factory—I couldn’t concentrate.",
    "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans.",
    "I used to work at a calendar factory but got fired for taking a day off.",
    "I once had a job drilling holes for water—it was well boring.",
    "What’s a dentist’s favorite time? Tooth-hurty.",
    "I don’t play soccer because I enjoy the sport—I just do it for kicks.",
    "I’m terrible at gardening, but I think my neighbor digs it.",
    "I was going to tell a time-traveling joke, but you didn’t like it.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "I told my dad a joke about boxing—he said he’ll punchline me later.",
    "I once made a belt out of watches—it was a complete waist of time.",
    "I started a band called 999MB—we haven’t gotten a gig yet.",
    "Why don’t vampires ever get sick? Because they always avoid the sunlight.",
    "I accidentally swallowed some food coloring—the doctor says I’m OK, but I feel like I’ve dyed a little inside.",
    "I broke my finger last week—on the other hand, I’m okay.",
    "What do you call cheese that isn’t yours? Nacho cheese.",
    "I was going to make a joke about a broken pencil, but it’s pointless.",
    "I asked my wife if I was the only one she’d been with—she said yes, the others were all nines and tens.",
    "I bought some shoes from a drug dealer—I don’t know what he laced them with, but I was tripping all day.",
    "I told my wife she should buy a better map—she said, 'Where’s the point?'",
    "What’s orange and sounds like a parrot? A carrot.",
    "I told my wife I’d do anything to make her happy, so she handed me a 'Honey-Do' list.",
    "I thought about going on an all-almond diet, but that’s just nuts.",
    "I’m not addicted to coffee—I’m just in a committed relationship.",
    "I tried to start a hot-air balloon company, but it never got off the ground.",
    "Why don’t graveyards ever get overcrowded? Because people are dying to get in.",
    "I saw a sign that said 'Watch for children,' and I thought, 'Sounds like a fair trade.'",
    "I gave my dad a framed picture of me for his birthday—he said it was unselfie-sh.",
    "I wanted to learn how to juggle, but I didn’t have the balls.",
    "I told my wife she should be a baker—she has a great sense of loaf humor.",
    "I’d tell you a chemistry joke, but I know I wouldn’t get a reaction.",
]