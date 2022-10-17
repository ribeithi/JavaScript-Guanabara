function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var ano = new Date().getFullYear()
    var failsafe = document.getElementById('anonasc')
    var idade = document.getElementById('anonasc').value
    var idadeatual = ano - idade
    var sexo = window.document.querySelector('input[name="sexo"]:checked').value
    msg.innerHTML = `Detectamos um(a) ${sexo} de ${idadeatual} anos.`
    if (failsafe.value.length == 0 || idade > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else if (sexo == 'Homem') {
        //Masculino
        document.body.style.background = '#3600f7ee'
        if (idadeatual <= 18) {
            img.src = 'homemcrianca.png'
        } else if (idadeatual > 18 && idadeatual <= 35) {
            img.src = 'homemjovem.png'
        } else {
            img.src = 'homemvelho.png'
        }

    } else {
        // Feminino
        document.body.style.background = '#fa24dd'
        if (idadeatual <= 18) {
            img.src = 'mulhercrianca.png'
        } else if (idadeatual > 18 && idadeatual <= 35) {
            img.src = 'mulherjovem.png'
        } else {
            img.src = 'mulhervelha.png'
        }
    } 
}