let pegavalortab = []
let num = document.getElementById('addnumero')
let tab = document.getElementById('tabela')
let res = window.document.querySelector('div#msg')


function adicionartab() {
    if (num.value.length == 0 || num.value > 100 || num.value < 0) {
        window.alert('Valor inválido ou já encontrado na lista.')

    } else if (pegavalortab.indexOf(Number(num.value)) != -1) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        pegavalortab.push(Number(num.value))
        let conversaonumero = Number(num.value)
        let novaopcao = document.createElement('option')
        novaopcao.text = ` Valor ${conversaonumero} adicionado.`
        novaopcao.value = `tabela${conversaonumero}` 
        tab.appendChild(novaopcao)
        res.innerHTML = ''
        }
    num.value = ''
    num.focus()
}

function finalizar() {
    soma = pegavalortab.reduce((a, b) => a + b, 0)
    media = soma/pegavalortab.length
    let tabelasorted = pegavalortab.sort()
    if (pegavalortab.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `<p>Ao todo temos ${pegavalortab.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${tabelasorted[tabelasorted.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${tabelasorted[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
}
