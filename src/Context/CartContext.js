import {createContext, useReducer} from 'react'
import {
	ADD_TO_CART,
	DELETE_TO_CART,
	EMPTY_CART,
	EDIT_QTY
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
			const exist = id => cartproducts.some((elem)=>id===elem.id)
			const ali = cartproducts.filter(cp => cp.id === action.payload.id)[0]
			const noali = cartproducts.filter(cp => cp.id !== action.payload.id)

			if (exist(action.payload.id)) {
				ali.qty+=0.5
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
			case EDIT_QTY:
				return {
					...some,
					cartproducts: cartproducts.map( cp =>
						cp.id===action.payload.id
						?action.payload
						:cp
						)
			}
			default:
				return some
		}
	}

	const [state, dispatch] = useReducer(CartReducer, initialState)

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
	const emptyCart = () => {
		dispatch({
			type: EMPTY_CART
		})
	}
	const editProd = cp => {
		dispatch({
			type: EDIT_QTY,
			payload: cp
		})
	}


	return (
		<CartContext.Provider
			value={{
				cartproducts: state.cartproducts,
				addToCart,
				deleteToCart,
				emptyCart,
				editProd
			}}
		>
		{children}
		</CartContext.Provider>
	)
}

export default CartState