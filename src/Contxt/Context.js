import { createContext, useState, useEffect } from "react";
export const ShoppingContext = createContext({});

const initialCartItem = localStorage.getItem("ShopingCart") ? JSON.parse(localStorage.getItem("ShopingCart")) : [];

const ContextProvider = (props) => {
    const [cardItems, setcardItems] = useState(initialCartItem);
    useEffect(() => {
        localStorage.setItem("ShopingCart", JSON.stringify(cardItems))
    }, [cardItems ])

    const getItemsQuantity = (id) => {
        return cardItems.find((i) => i.id === id)?.quantity || 0;
    };

    const increaseCardQuantity = (id) => {
        setcardItems((currItems) => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    };

    const decreaseCardQuantity = (id) => {
        setcardItems((currItems) => {
            if (currItems.find(item => item.id === id) == null) {
                return currItems.filter((item) => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    };

    const removeItem = (id) => {
        setcardItems((currItems) => currItems.filter((item) => item.id !== id));
    };
    const removeAllItem = () => {
        setcardItems([]);
    };
    
    
    const [user, setUser] = useState([])
    async function fetchUser() {
        try {
            const response = await fetch("http://localhost:5000/user");
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.log(error)}
    }
    const [product, setProduct] = useState([])
    async function fetchProduct() {
        try {
            const response = await fetch("http://localhost:5000/product");
            const data = await response.json();
            setProduct(data);
            console.log(product)
        } catch (error) {
            console.log(error)}
    }
    
    useEffect(() => {
        fetchUser();
        fetchProduct()
    }, [])


    const CartQuantity = cardItems.reduce(
        (quantity, item) => item.quantity + quantity, 0);

    
    
    const valuee = { product,user,cardItems,removeAllItem ,CartQuantity, increaseCardQuantity, decreaseCardQuantity, getItemsQuantity, removeItem }
    return (
        <ShoppingContext.Provider value={valuee} >
            {props.children}
        </ShoppingContext.Provider>
    );

};

export default ContextProvider;
