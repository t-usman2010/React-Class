function Foodapp(){
    return(
        <div>
            <h1>Food App</h1>
            <p>Welcome to the Food App!</p>
            <CheckingStock stock={10} Item={"Pizza"}/>
            <CheckingStock stock={0} Item={"Burger"}/>
        </div>
    )

}
function CheckingStock({stock, Item}){
    if(stock > 0){
        return(
            <h1> {Item} is in stock</h1>
        )
    }
    else{
        return(
            <h1>{Item} is out of stock</h1>
        )
    }
}
export default Foodapp;