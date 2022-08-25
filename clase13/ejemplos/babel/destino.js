"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var mensage = "Hola mundo";
console.log(mensaje);

var sumar = function sumar(a, b) {
  return a + b;
};

var Persona = /*#__PURE__*/function () {
  function Persona(nombre, edad) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.edad = edad;
  }

  _createClass(Persona, [{
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "getEdad",
    value: function getEdad() {
      return this.edad;
    }
  }]);

  return Persona;
}();

var juan = new Persona('Juan', 34);
console.log(juan.getNombre());
