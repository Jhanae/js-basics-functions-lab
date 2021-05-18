// Code your solution in this file!
let start;

function distanceFromHqInBlocks(start)
{
    let street = 42;
    if(start < street)
    {
        let distance = street - start;
        return distance;
    }
    else
    {
        let distance = start-street;
        return distance;  
    }  
}
function distanceFromHqInFeet(start)
{
   let distance = distanceFromHqInBlocks(start)*264;
   return distance;
}
function distanceTravelledInFeet(start, street)
{
    let distance = street - start;
    if(street < start)
    {
        return (start-street)*264;
    }
    
    else 
        return distance*264;
}
function calculatesFarePrice(start, destination)
{
    let distance = distanceTravelledInFeet(start, destination);
    if(distance < 400)
    {
        let cost = 0;
        return cost;
    }

    else if(distance > 400 && distance < 2000)
    {
        let cost = (distance-400)*0.02;
        return cost;
    }

    else if(distance > 2000 && distance < 2500)
    {
        let cost = 25;
        return cost;
    }

    if(distance > 2500)
        return "cannot travel that far";
}