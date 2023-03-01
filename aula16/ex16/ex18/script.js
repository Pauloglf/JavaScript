let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let val = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        } else {
       window.alert('Valor invalido ou já na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (val.length == 0) {
        window.alert('Adicione valores primeiro')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0
        for(let pos in val) {
            soma += val[pos]
            if (val[pos] > maior) {
                maior = val[pos]
            }
            if (val[pos] < menor) {
                menor = val[pos]
            }
        }
        média = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números.</p>`
        res.innerHTML += `<p>o maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>o menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>somando tudo, o resultado é ${soma}.</p>`
        res.innerHTML += `<p>a média encontrada foi ${média}</p>`
    }
}