// import { useSearchParams } from 'react-router-dom'

export function AddUrlQuery(
	value_a,
	value_b,
	value_c,
	value_d
	) {
	const valores = window.location.search
	const urlParams = new URLSearchParams(valores)
	value_a.trim()===''?urlParams.delete('category'):urlParams.set('category', value_a)
	value_b.trim()===''?urlParams.delete('q'):urlParams.set('q',value_b)
	value_c.trim()===''?urlParams.delete('rate'):urlParams.set('rate',value_c)
	value_d.trim()===''?urlParams.delete('sort'):urlParams.set('sort',value_d)

	return (urlParams)
}