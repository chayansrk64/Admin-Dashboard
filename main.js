const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeMenu = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
   sideMenu.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
   sideMenu.style.display = 'none';
})

// // ------change theme----
// themeToggler.addEventListener('click', () => {
//    document.body.classList.toggle('.dark-theme-variables');

//    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// })

themeToggler.addEventListener('click', () => {
   document.body.classList.toggle('dark-theme-variables');

   themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
   themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// for table----------

Orders.forEach(order => {
   const tr = document.createElement('tr');
   const trContent =   `
                        <td>${order.productName}</td>
                        <td>${order.ProductNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Decline' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
                        `;
   tr.innerHTML = trContent;
   document.querySelector('table tbody').appendChild(tr);

})

