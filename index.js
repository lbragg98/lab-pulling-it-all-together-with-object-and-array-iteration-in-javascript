function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// the helper function to find stats

function findPlayerStats(playerName) {
    const game = gameObject();
    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        if (playerName in team.players) {
            return team.players[playerName]; // return teh stats object
        }
    }
    return null; // player not found
}
//find points scored
function numPointsScored(playerName) {
    const stats = findPlayerStats(playerName);
    if (stats) {return stats.points;

     } else {
        return null;
    }
}
//test example
console.log (numPointsScored("Alan Anderson"));

// find shoe sizes
function shoeSize(playerName) {
    const stats = findPlayerStats(playerName);
    if (stats) {return stats.shoe
         } else {
        return null;
    }
}
console.log (shoeSize("Alan Anderson"));

//find team colors
function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null;
}
// find team names
function teamNames() {
    const game = gameObject();
    const names = [];
    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        names.push(team.teamName);
    }
    return names;
}

// test 
console.log(teamColors("Charlotte Hornets"));
console.log(teamNames());

//Find player numbers
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            for (const playerName in team.players) {
                numbers.push(team.players[playerName].number);
            }
            return numbers;
        }
    }
    return null;
}
//test 
console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    return findPlayerStats(playerName);
}
//test
console.log(playerStats("Ben Gordon"));

//find the biggest shoe sizes rebounds

function bigShoeRebounds() {
    const game = gameObject(); 
    let maxShoe = 0;
    let rebounds = 0;
    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
             if (player.shoe > maxShoe) {
                maxShoe = player.shoe;
                rebounds = player.rebounds;
        }
    }
    return rebounds;
}
}
//test
console.log(bigShoeRebounds());

//Top Scorer
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = '';

    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                topPlayer = playerName;
            }
        }
    }

    return topPlayer;
}

//test 
console.log(mostPointsScored());

//Which team won
function winningTeam() {
    const game = gameObject();
    const teamPoints = {};

    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        let totalPoints = 0;
        for (const playerName in team.players) {
            totalPoints += team.players[playerName].points;
        }
        teamPoints[team.teamName] = totalPoints;
    }

    // Determine which team has more points
    return teamPoints[Object.keys(teamPoints)[0]] > teamPoints[Object.keys(teamPoints)[1]]
        ? Object.keys(teamPoints)[0]
        : Object.keys(teamPoints)[1];
}
//test
console.log(winningTeam());

//long name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';

    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    return longestName;
}
//test 
console.log(playerWithLongestName());

//does the longest name steal
function doesLongNameStealATon() {
    const game = gameObject();
    const longName = playerWithLongestName();

    let maxSteals = 0;

    for (const teamKey of Object.keys(game)) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
            }
        }
    }

    const longNameSteals = findPlayerStats(longName).steals;
    return longNameSteals === maxSteals;
} 
    //test
    console.log(doesLongNameStealATon())