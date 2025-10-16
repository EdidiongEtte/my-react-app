
function Food()
{ 

 const food1 = "Apple";
 const food2 = "Blackcurrant";


    return(
        <ul>
            <li>Pineapple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food