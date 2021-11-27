import { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useQueryParams = () => {
	const {search} = useLocation()

	const onDecodeParams = useCallback(
		() => {
			callback
		},
		[input],
	)

}

export default useQueryParams