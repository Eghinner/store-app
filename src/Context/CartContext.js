import {createContext, useReducer} from 'react'
import {
	ADD_TO_CART,
	DELETE_TO_CART,
	EMPTY_CART
} from '../Types'

export const CartContext = createContext()

const CartState = ({children}) => {

	const initialState = {
		cartproducts: []
	}

	const CartReducer = (some, action) => {
		const {cartproducts} = some
		switch(action.type) {
			case ADD_TO_CART:
			// console.log('case')
			const exist = id => cartproducts.some((elem)=>id===elem.id)
			// console.log(exist(action.payload.id))
			const ali = cartproducts.filter(cp => cp.id === action.payload.id)[0]
			const noali = cartproducts.filter(cp => cp.id !== action.payload.id)

			if (exist(action.payload.id)) {
				ali.qty+=0.5
				console.log('quantity')
			}
				return {
					...some,
					cartproducts:
					exist(action.payload.id)
						? [ali,...noali]
						: [...cartproducts, action.payload]
			}
			case DELETE_TO_CART:
				return {
					...some,
					cartproducts: cartproducts.filter(cp=>cp.id!==action.payload)
			}
			case EMPTY_CART:
				return {
					...some,
					cartproducts: []
				}
			default:
				return some
		}
	}

	const [state, dispatch] = useReducer(CartReducer, initialState)

	const addToCart = producto => {
		// console.log('addTocart')
		dispatch({
			type: ADD_TO_CART,
			payload: producto
		})
	}

	const deleteToCart = id => {
		dispatch({
			type: DELETE_TO_CART,
			payload: id
		})
	}
	const emptyCart = () => {
		dispatch({
			type: EMPTY_CART
		})
	}


	return (
		<CartContext.Provider
			value={{
				cartproducts: state.cartproducts,
				addToCart,
				deleteToCart,
				emptyCart
			}}
		>
		{children}
		</CartContext.Provider>
	)
}

export default CartState