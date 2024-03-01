
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
                $('.column'+'.'+j).append(html)
              }, 200 * j)
            }
            console.log(checkSymbols);
            
            // const duplicates = checkSymbols.filter((item, index) => checkSymbols.indexOf(item) !== index);
            // duplicates.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            // console.log(counts)
    })

    

})