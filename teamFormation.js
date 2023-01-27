function teamFormation(skills, minPlayer, minLevel, maxLevel ){
    let team = []
    for(let i = 0; i < skills.length; i++){
        if(skills[i] >= minLevel && skills[i] <= maxLevel){
            // console.log(skills[i])
            team.push(skills[i])
        }
    }
    let output = []
    for(let i = 0; i < team.length; i++){
        let teamPlayer = [team[i]]
        for(let j = 0; j < team.slice(i, team.length+1).length; j++ ){
            teamPlayer.push(team[j])
        }
        
        output.push(teamPlayer)
    }
    console.log(output)
}

// teamFormation([4,8,5,6],2,5,7)
teamFormation([12,4,6,13,5,10],3,4,10) 

// if(j != i && skills[j] > minLevel && skills[j] <= maxLevel){
//     if(team.length <= minPlayer){
//         team.push(skills[j])
//     }
// }