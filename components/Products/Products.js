class Products {
	constructor() {
		this.classNameActive = 'products-element__btn_active'
		this.labelAdd = 'Добавить в корзину'
		this.labelRemove = 'Удалить с корзины'
	}

	handleSetLocationStorage(element, id) {
		const { pushProduct, products } = localStorageUtil.putProducts(id)

		if (pushProduct) {
			element.classList.add(this.classNameActive)
			element.innerHTML = this.labelRemove
		}
		else {
			element.classList.remove(this.classNameActive)
			element.innerHTML = this.labelAdd
		}

		headerPage.render(products.length)
	}

	render() {
		const productsStorage = localStorageUtil.getProducts()

		let htmlCatalog = ''

		CATALOG.forEach(({ id, name, price, image_path }) => {

			let activeClass = ""
			let activeText = ""


			if (productsStorage.indexOf(id) === -1) {
				activeText = this.labelAdd
			}
			else {
				activeClass = this.classNameActive
				activeText = this.labelRemove
			}

			htmlCatalog +=
				`
					<li class="products-element">
						<span class="products-element__name">${name}</span>
						<img class="products-element__image_path" src='${image_path}'></img>
						<span class="products-element__price"> ⚡️ ${price.toLocaleString()} ₸</span>
						<button class="products-element__btn ${activeClass}" onClick="productsPage.handleSetLocationStorage(this, '${id}')">
							${activeText}
						</button>
					</li>
				`
		})

		const html =
			`
				<ul class="products-container">
					${htmlCatalog}
				</ul>
			`
		ROOT_PRODUCTS.innerHTML = html
	}
}

const productsPage = new Products()
