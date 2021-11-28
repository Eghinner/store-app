import {createContext, useReducer, useEffect} from 'react'
import {
	GET_PRODUCTS,
	SELECT_CATEGORY,
	SET_LOADING,
	SET_SEARCH,
	UPDATE_PRODUCTS,
	RESET
} from '../Types'
import ClienteAxios from '../Config/ClienteAxios.js'
import { useSearchParams } from 'react-router-dom'


export const ProductsContext = createContext()

const ProductsState = ({children}) => {

	const initialState = {
		products: [],
		productsfilter: [],
		category: '',
		loading: false,
		searchstring: ''
	}

	const [searchParams] = useSearchParams()

	const hascategoryurlquery = searchParams.has('category')
	const hasquerysearch = searchParams.has('q')
	const categoryurlquery = searchParams.get('category')
	const querysearch = searchParams.get('q')

	useEffect(() => {
		if (hasquerysearch) setSearch(querysearch)
		if (hascategoryurlquery) getCategories(categoryurlquery)
			updateProducts()
	// eslint-disable-next-line
	}, [])

	const ProductsReducer = (state, action) => {
		switch(action.type) {
			case GET_PRODUCTS:
				return {
					...state,
					products: action.payload
				}
			case SELECT_CATEGORY:
				return {
					...state,
					category: action.payload
				}
			case SET_LOADING:
				return {
					...state,
					loading: action.payload
				}
			case SET_SEARCH:
				return {
					...state,
					searchstring: action.payload.toLowerCase()
				}
			case UPDATE_PRODUCTS:
				return {
					...state,
					productsfilter: state.searchstring.trim() === '' ? []
					: state.products.filter(pro=>pro.title.toLowerCase().includes(state.searchstring))
				}
			case RESET:
				return {
					...state,
					productsfilter: [],
					category: '',
					searchstring: ''
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(ProductsReducer, initialState)

	const getProducts = async () => {
		let result;
		try {
			setLoading(true)
			if (state.category.trim()==='' || state.category.trim()==='all') {
				 result = await ClienteAxios.get(`/products`)
			} else {
				 result = await ClienteAxios.get(`/products/category/${categoryurlquery}`)
			}
			dispatch({
				type: GET_PRODUCTS,
				payload: result.data
			})
		} catch (err) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	const getCategories = category => {
		dispatch({
			type: SELECT_CATEGORY,
			payload: category
		})
	}

	const setLoading = bool => {
		dispatch({
			type: SET_LOADING,
			payload: bool
		})
	}

	const setSearch = value => {
		dispatch({
			type: SET_SEARCH,
			payload: value
		})
	}

	const updateProducts = value => {
		dispatch({
			type: UPDATE_PRODUCTS
		})
	}

	const reseto = () => {
		dispatch({
			type: RESET
		})
	}

	return (

		<ProductsContext.Provider
			value={{
				products: state.products,
				productsfilter: state.productsfilter,
				category: state.category,
				loading: state.loading,
				searchstring: state.searchstring,
				setLoading,
				getProducts,
				getCategories,
				setSearch,
				updateProducts,
				reseto
			}}
		>
		{children}
		</ProductsContext.Provider>
	)
}

export default ProductsState