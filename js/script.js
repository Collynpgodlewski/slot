
$(document).ready(function(){
    
    $('#spin').click(function(){
        $('.column').empty();
        const symbols = ["A", "B", "C", "K", "Q", "J", "Premium", "Wild", "x2"];
        const checkSymbols = [];
        const counts = {};
        for (let j = 0; j <= 5; j++) {
            setTimeout(function(){
                const column = [...symbols].sort(() => 0.5 - Math.random());
                const randomCol =  column.slice(0, 5);
                const symbolColumn =  randomCol.map((x, index) => {
                    checkSymbols.push(x)
                    
                    return( `<div class="row ${index} drop">${x}</div>`)
                });
                const html = symbolColumn.join('');
                $('.column'+'.'+j).append(html);
                console.log(checkSymbols);
                if(checkSymbols.length == 30){
                    checkSymbols.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; 
                    });
                    const symbolA = counts["A"];
                    const symbolB = counts["B"];
                    const symbolC = counts["C"];
                    const symbolJ = counts["J"];
                    const symbolK = counts["K"];
                    const symbolQ = counts["Q"];
                    const symbolPremium = counts["Premium"];
                    const symbolWild = counts["Wild"];
                    const symbolx2 = counts["x2"];

                    if(symbolA >= 3){
                        console.log("winna", counts);
                       $(".row:contains('A')").css("background-color", "blue")
                        

                    }
                }
               
              }, 200 * j)

              if(j == 5){
                
              }
            }

           
            // const duplicates = checkSymbols.filter((item, index) => checkSymbols.indexOf(item) !== index);
            // duplicates.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            // console.log(counts)
    })


    $('#spin2').click(function(){
      const  icon_width = 79,
        iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"],
        icon_height = 79,
        num_icons = 9,
        time_per_icon = 100,
        indexes = [0,0,0]

        const roll = (reel, offset = 0) => {
            const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
            const style = getComputedStyle(reel),
                backgroundPositionY = parseFloat(style["background-position-y"]),
                targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
                normTargetBackgroundPositionY = targetBackgroundPositionY%(num_icons * icon_height);

                return new Promise((resolve, reject) => {

                    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
                    reel.style.backgroundPositionY = `${targetBackgroundPositionY}px`;

                    setTimeout(() => {
                        reel.style.transition = `none`;
                        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`
                        resolve(delta%num_icons)
                    }, 8 + delta * time_per_icon)
                })
        }

        function rollAll() {
            const reelsList = document.querySelectorAll('.slottwo > .reel');
            Promise
                .all( [...reelsList].map((reel, i) => roll(reel, i)))
                .then((deltas) => {
                    deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta)%num_icons)
                    indexes.map((index)=> {console.log(iconMap[index])})

                    //check win conditions
                    if(indexes[0] == indexes[1] || indexes[0] == indexes[1] == indexes[2]){
                        alert("winner")
                    }
                    setTimeout(rollAll, 1000)
                })
            // [...reelsList].map((reel, i) => {
            //     console.log(reel, i)
            //     roll(reel, i).then((delta) => { console.log(delta)})
            // })
        }

        rollAll();
    })
})