class Shopping {

	handleClear() {
		ROOT_SHOPPING.innerHTML = ''
	}

	render() {
		const productsStorage = localStorageUtil.getProducts()

		let htmlCatalog = ''
		let summCatalog = 0

		CATALOG.forEach(({ id, name, price }) => {
			if (productsStorage.indexOf(id) !== -1) {

				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">⚡️ ${name}</td>
						<td class="shopping-element__price">${price.toLocaleString()} ₸</td>
					</tr>
				`
				summCatalog += price
			}

		})

		const html = `
			<div class="shopping-container">
		 		<div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
					<table>
						${htmlCatalog}
						<tr>
								<td class="shopping-element__name">Сумма </td>
								<td class="shopping-element__price">${summCatalog} ₸</td>
						</tr>
					</table>
				</div>
			</div>
			`

		ROOT_SHOPPING.innerHTML = html
	}
}

const shoppingPage = new Shopping()



