function loadCart() {
    // Lấy danh sách giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = ''; // Xóa các sản phẩm hiện có

    let totalPrice = 0;

    // Hiển thị từng sản phẩm trong giỏ hàng
    function addToCart() {
        // Lấy thông tin sản phẩm
        const name = document.getElementById('name').title;
        const price = parseInt(document.getElementById('price').textContent);
        const size = document.getElementById('size').value;

        // Tạo đối tượng sản phẩm
        const product = {
            name: name,
            price: price,
            size: size
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Thêm sản phẩm mới vào danh sách giỏ hàng
        cart.push(product);

        // Lưu lại giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Sản phẩm đã được thêm vào giỏ hàng');
    }

    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}₫</div>
            </div>
            <button onclick="removeFromCart(${index})">Xóa</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        totalPrice += item.price;
    });

    // Cập nhật tổng giá
    totalPriceElement.textContent = `Tổng cộng: ${totalPrice.toLocaleString('vi-VN')}₫`;
}

function removeFromCart(index) {
    // Lấy danh sách giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Xóa sản phẩm ở vị trí chỉ định
    cart.splice(index, 1);

    // Cập nhật lại giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Tải lại giỏ hàng
    loadCart();
}

// Tải giỏ hàng khi trang được tải
window.onload = loadCart;