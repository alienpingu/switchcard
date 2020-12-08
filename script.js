abbCardInfo = [
    {
        title: "Titolo numero",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis cum possimus incidunt consequatur sed obcaecati maxime.",
        btn: "#1"
    },
    {
        title: "Secondo titolo",
        descrizione: "Deserunt reiciendis cum possimus incidunt consequatur sed obcaecati maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        btn: '#2'
    }
]

let title = document.querySelector('.card h3')
let descrizione = document.querySelector('.card p')
let btn = document.querySelector('.card a')

abbCardHandler = (bool) => {
    let j = (bool) ? 1 : 0  
    title.innerText = abbCardInfo[j].title
    descrizione.innerText = abbCardInfo[j].descrizione
    btn.href = abbCardInfo[j].btn
}

document.querySelector('input').addEventListener('change', (e) => abbCardHandler(e.currentTarget.checked == true))