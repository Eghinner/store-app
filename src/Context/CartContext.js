import {createContext, useReducer} from 'react'
import {
	ADD_TO_CART,
	DELETE_TO_CART
} from '../Types'

export const CartContext = createContext()

const CartState = ({children}) => {

	const initialState = {
		cartproducts: []
	}

	const CartReducer = (state, action) => {
		const {cartproducts} = state
		switch(action.type) {
			case ADD_TO_CART:

			const exist = id => cartproducts.some((elem)=>id===elem.id)
			const ali = cartproducts.filter(cp => cp.id === action.payload.id)[0]
			const noali = cartproducts.filter(cp => cp.id !== action.payload.id)

			if (exist(action.payload.id)) {
				++ali.qty
				console.log(ali.qty)
			}
				return {
					...state,
					cartproducts:
					exist(action.payload.id)
					//
					? [ali,...noali]
					: [...cartproducts, action.payload]
			}
			case DELETE_TO_CART:
				return {
					...state,
					cartproducts: cartproducts.filter(cp=>cp.id!==action.payload)
			}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(CartReducer, initialState)

	// const {cartproducts} = state


	// function exist = useCallback( (id) =>
	// 	cartproducts.some((elem)=>id===elem.id),
	// 	[cartproducts])



	const addToCart = producto => {
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

	return (
		<CartContext.Provider
			value={{
				cartproducts: state.cartproducts,
				addToCart,
				deleteToCart
			}}
		>
		{children}
		</CartContext.Provider>
	)
}

export default CartState