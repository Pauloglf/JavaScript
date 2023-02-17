function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('digite dados que tenham sentido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var estagio = '' 
        if (fsex[0].checked) {
            gen = 'Masculino'
        } else {
            gen = 'Feminino'
        }
        if (idade >=0 && idade < 12) {
            estagio = 'Criança'
        }else if (idade < 18) {
            estagio = 'Jovem'
        } else if (idade < 60) {
            estagio = 'Adulto'
        } else {
            estagio = 'Idoso'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${estagio} do gênero ${gen} com ${idade} anos.`
    }
}