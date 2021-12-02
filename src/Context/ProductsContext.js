import {createContext, useReducer, useEffect} from 'react'
import {
	GET_PRODUCTS,
	SELECT_CATEGORY,
	SET_LOADING,
	SET_SEARCH,
	UPDATE_PRODUCTS,
	RESET,
	SET_RATE,
	SET_SORT,
	FILTER_RATE_PRODUCTS,
	SORT_PRODUCTS
} from '../Types'
import ClienteAxios from '../Config/ClienteAxios.js'
import { useSearchParams } from 'react-router-dom'


export const ProductsContext = createContext()

const ProductsState = ({children}) => {

	const initialState = {
		products: [],
		productsfilter: [],
		category: '',
		rate: '',
		loading: false,
		searchstring: '',
		sort: ''
	}

	const [searchParams] = useSearchParams()

	const hascategoryurlquery = searchParams.has('category')
	const hasquerysearch = searchParams.has('q')
	const hassorturlquery = searchParams.has('sort')
	const hasqueryrate = searchParams.has('rate')

	const categoryurlquery = searchParams.get('category')
	const querysearch = searchParams.get('q')
	const querysort = searchParams.get('sort')
	const queryrate = searchParams.get('rate')


	useEffect(() => {
		if (hasquerysearch) setSearch(querysearch)
		if (hascategoryurlquery) getCategories(categoryurlquery)
		if (hassorturlquery) sortProds(querysort)
		if (hasqueryrate) setRate(queryrate)
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
			case SET_RATE:
				return {
					...state,
					rate: action.payload
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
					productsfilter:
					// state.productsfilter.length===0
					!hasqueryrate
					?
					// state.searchstring.trim() === '' ? []:
					state.products.filter(pro=>pro.title.toLowerCase().includes(state.searchstring))
					:
					state.products.filter(pro=>parseInt(state.rate)===Math.round(pro.rating.rate))
								  .filter(pro=>pro.title.toLowerCase().includes(state.searchstring))
					// state.searchstring.trim() === '' ? [] :
					// state.productsfilter.filter(pro=>pro.title.toLowerCase().includes(state.searchstring))
				}
			case FILTER_RATE_PRODUCTS:
				return {
					...state,
					productsfilter:
					state.productsfilter.length===0
					? state.products.filter(pro=>
						parseInt(state.rate)===Math.round(pro.rating.rate))
					: state.productsfilter.filter(pro=>
						parseInt(state.rate)===Math.round(pro.rating.rate))
				}
			case RESET:
				return {
					...state,
					productsfilter: [],
					category: '',
					rate: '',
					searchstring: '',
					sort: ''
				}
			case SET_SORT:
				return {
					...state,
					sort: action.payload
				}
			case SORT_PRODUCTS:
				return {
					...state,
					products:
					state.sort==='price'
					?state.products.sort((a, b) => b.price - a.price)
					:state.products.sort((a, b) => a.id - b.id)
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
			// if (state.category.trim()==='') {
			if (!hascategoryurlquery) {
				 result = await ClienteAxios.get(`/products`)
			} else {
				 result = await ClienteAxios.get(`/products/category/${categoryurlquery}`)
			}
			dispatch({
				type: GET_PRODUCTS,
				payload: result.data
			})
		} catch (err) {
			console.error(err)
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

	const setRate = rate => {
		dispatch({
			type: SET_RATE,
			payload: rate
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

	const filterRateProducts = () => {
		dispatch({
			type: FILTER_RATE_PRODUCTS
		})
	}

	const reseto = () => {
		dispatch({
			type: RESET
		})
	}

	const sortProds = value => {
		dispatch({
			type: SET_SORT,
			payload: value
		})
	}

	const getSort = () => {
		dispatch({
			type: SORT_PRODUCTS
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
				rate: state.rate,
				sort: state.sort,
				setLoading,
				getProducts,
				getCategories,
				setRate,
				setSearch,
				updateProducts,
				reseto,
				sortProds,
				filterRateProducts,
				getSort
			}}
		>
		{children}
		</ProductsContext.Provider>
	)
}

export default ProductsState