//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
        str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0, pt) + "." + str.slice(pt);
}
function getRadioVal(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked == true) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}
//Calcula el subtotal de ingredientes seleccionados
function getToppingsTotal(e) {
    var form = this.form;
    var val = parseFloat(form.elements['produc_tot'].value);
    if (this.checked == true) {
        val += parseFloat(this.value);
    } else {
        val -= parseFloat(this.value);
    }

    form.elements['produc_tot'].value = formatDecimal(val);
    updatePizzaTotal(form);
}
//Obtiene el subtotal del valor de la pizza de acuerdo al tamaño
function getSizePrice(e) {
    this.form.elements['comb_tot'].value = parseFloat(this.value);
    updatePizzaTotal(this.form);
}
//Calcula el precio total a cancelar por la pizza tomando en cuenta
//los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
function updatePizzaTotal(form) {
    var comb_tot = parseFloat(form.elements['comb_tot'].value);
    var produc_tot = parseFloat(form.elements['produc_tot'].value);
    form.elements['total'].value = formatDecimal(comb_tot + produc_tot);
}
(function () {
    var form = document.getElementById('formCombos');
    var el = document.getElementById('products');
    // Determinar los ingredientes seleccionados en las casillas de verificación
    var produc = el.getElementsByTagName('input');
    for (var i = 0, len = produc.length; i < len; i++) {
        if (produc[i].type === 'checkbox') {
            produc[i].onclick = getToppingsTotal;
        }
    }
    var comb = form.elements['size'];
    for (var i = 0, len = comb.length; i < len; i++) {
        comb[i].onclick = getSizePrice;
    }

    // set comb_tot to value of selected
    form.elements['comb_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
    updatePizzaTotal(form);
})();
