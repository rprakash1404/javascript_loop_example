for(let rowCounter=1;rowCounter<=5;rowCounter++){
    for(let noOfStars=1;noOfStars<=rowCounter;noOfStars++){
        //print stars on the same line
        process.stdout.write("* ");
    }
    // change line
    console.log();
}