function underscorifySubstring(string, substring) {

    let locations = findLocations(string, substring);
    let collapsedLocations = JSON.parse( JSON.stringify( locations ) );

    if( locations.length > 1 ){
        collapsedLocations = collapseLocations(locations);
    }

    //now apply underscores at locations
    let newString = "";
    let underscoreOpen = 0;
    let underscoreSets = 0;

    for(let i=0; i < string.length;i++){

        if( underscoreSets < collapsedLocations.length && i == collapsedLocations[underscoreSets][underscoreOpen] && underscoreOpen == 0 ){
            newString += "_";
            underscoreOpen = 1;
        }
        newString += string[i];
        if( underscoreSets < collapsedLocations.length && i == collapsedLocations[underscoreSets][underscoreOpen] && underscoreOpen == 1 ){
            newString += "_";
            underscoreSets++;
            underscoreOpen = 0;
        }
    }

    // console.log("locations: ", locations );
    // console.log("collapseLocations: ", collapsedLocations );
    // console.log(string);
    // console.log(newString);

    return newString;
}

function collapseLocations(locations){
    //put the first location in
    let collapsedLocations = [ [locations[0][0], locations[0][1] ] ];

    for(let setNum=1; setNum < locations.length;setNum++){

        let left = locations[setNum-1][1];
        let right = locations[setNum][0]-1;

        if( right <= left ){
            let moveThis = locations[setNum][1];

            //move the right coord of the current set into the previous set
            collapsedLocations[ collapsedLocations.length-1 ][1] = moveThis;
        } else {
            collapsedLocations.push([ locations[setNum][0], locations[setNum][1] ]);
        }
    }
    return collapsedLocations;
}

function findLocations(string, substring){
    let locations = [];

    for(let left=0; left < string.length; left++){
        let thisString = string.substr( left, substring.length );

        // if( thisString && thisString == substring ){
        if( thisString ) {
            if( thisString == substring ){
                locations.push([left, left+(substring.length-1)]);
            }
        }
    }

    //loop through and return an array of locations
    return locations;
}

//output should be: "_test_this is a _testtest_ to see if _testestest_ it works"
let str = "testthis is a testtest to see if testestest it works";
// console.log( underscorifySubstring(str,"test") );
underscorifySubstring(str,"test");
