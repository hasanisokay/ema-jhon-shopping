const addToDb = id => {
    console.log(id);
    const storedCart = getStoredCart();
    const quantity = storedCart[id]

    if(!quantity){
        storedCart[id] = 1
    }
    else{
        storedCart[id] = quantity +1
    }
    localStorage.setItem("cart",JSON.stringify(storedCart))
}

const getStoredCart =()=>{
    const previousCart = localStorage.getItem("cart")
    if(previousCart){
        return JSON.parse(previousCart)
    }
    else{
        return {}
    }

}
export{
    addToDb, getStoredCart
}