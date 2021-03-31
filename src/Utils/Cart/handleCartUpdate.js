export const handleCartUpdate = (prod, setCartProducts) => {
    
    setCartProducts((prevState) => {
        const index = String(prod.id);
        let newState = {...prevState};

        if (index in newState){
            newState[index].amount = parseInt(prevState[index].amount) + parseInt(prod.amount);
        } else {
            newState[index] = prod;
        }
        return(newState)
    });
};



// const handleCartUpdate = (prod, setCartProducts) => {
//     setCartProducts((prevState) => {
//         return(prevState.concat(prod))
//     });
// };