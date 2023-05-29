const setToLocalStorage = (id) => {

    const appliedCart = getPreviousCart();
    // console.log(typeof id);
    const applied = appliedCart[id];
    if(!applied){
        appliedCart[id]=1;
    }
    localStorage.setItem('appliedCart',JSON.stringify(appliedCart));
}

const getPreviousCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('appliedCart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

export {
    setToLocalStorage,
    getPreviousCart,
}