export function filterNodeList() {
	const nodo = document.querySelectorAll('input[type=radio]')
	const finalnode = nodo.map(nod=>nod.name)
	return finalnode
}