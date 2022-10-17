
    let num = window.document.querySelector('input#txtnum')
    let list = window.document.querySelector('select#list')
    let res = window.document.querySelector('div#res')
    let valores = []

    function adicionar() {
    if (num.value >= 1 && num.value <= 100 && valores.indexOf(Number(num.value)) == -1) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
        }
    num.value = ''
    num.focus()
    }
    
function finalizar () {
    if (valores.length == 0) {
        window.alert('Nenhum valor adicionado, por favor adicione um valor antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
