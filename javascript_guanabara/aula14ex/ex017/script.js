function tabuada() {
    let num = window.document.getElementById('txtnum')
    let res = window.document.getElementById('tabu')
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for (let i = 1; i <= 10; i++){
           let num2 = document.createElement('option')
           num2.text = `${n} x ${i} = ${n*1}`
           res.value = `res${i}`
           res.appendChild(num2)
        }
    }
    
}
