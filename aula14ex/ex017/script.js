function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    let con = document.querySelector('input#con')
    if (num.value.length == 0) {
        window.alert('Por Favor, digite um número!')
    } else {
        let n = Number(num.value)
        let t = Number(con.value)
        tab.innerHTML = ""
        for(let c = 1; c <= t; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}