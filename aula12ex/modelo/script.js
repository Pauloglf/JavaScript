function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são  ${hora} horas`
    if (hora < 12) {
        //console.log('Bom dia')
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        //console.log('Boa tarde')
        document.body.style.background = '#b9846f'
    } else if (hora <= 23) {
        //console.log('Boa noite')
        document.body.style.background = '#515154'
    }
}