const socket = io();

const newProduct = document.getElementById('newProduct')
newProduct.addEventListener('submit', event => {
  event.preventDefault()
  let id = document.getElementById('ID').value
  let name = document.getElementById('NAME').value
  let price = document.getElementById('price').value
  let src = document.getElementById('src').value
  console.log(`${name}, #${id}, $${price}, ${src}`)
  socket.emit('new_product', {
    id : id,
    name : name,
    price : price,
    src : src
  })
})
socket.on('connect', () => {
  console.warn('Conectado al servidor');
});
socket.on('update_products', products => {
  fetch('http://localhost:8080/views/products-render.hbs')
    .then(response => {
      return response.text()
    })
    .then(plantilla => {
      const template = Handlebars.compile(plantilla);
      const html = template({products})
      document.getElementById('productos').innerHTML = html;
    })
})
socket.on('update_messages', messages => {
  console.log(messages)
})