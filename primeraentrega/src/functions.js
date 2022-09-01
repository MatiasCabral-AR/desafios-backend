function getTimestamp(){
    return (`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} - ${new Date().toLocaleTimeString('es-AR')}`)
}
function checkLength(arr){
    if (arr.length === 0){
        console.error('El array esta vacio')
        return false
    }
    return true
}

function checkId(product, arr){
    arr.forEach(element => {
        if(element.id == product.id){
            console.warn('El id del elemento ya existe, se le asignara uno nuevo.')
            return newId(product, arr)
        } 
    });
        return product.id
}
function newId(arr, product=false){
    if(product){
        arr.sort((a, b) => {return a - b}) // Ordenamos de forma ascendente segun el id
        product.id = parseInt(arr[arr.length - 1].id) + 1 // Tomamos el id mas grande le sumamos 1 y lo asignamos al producto
        return product.id
    }
    return parseInt(arr[arr.length - 1].id) + 1
}

module.exports = {getTimestamp, checkId, checkLength, newId}