const btnAdicionar = document.getElementById("btnAdicionar")
const inNoticia = document.getElementById("inNoticia")
const btnListar = document.getElementById("btnListar")
const qtNoticias = document.getElementById("qtNoticias")
const outLista = document.getElementById("outLista")

const noticias = []

const adicionarNoticia = () => {
 const noticia = inNoticia.value
 if(noticia === ''){
  alert('Inváido')
  return
 }
 noticias.push(noticia)
 qtNoticias.textContent = noticias.length

 inNoticia.value = ''
 inNoticia.focus()
}

btnAdicionar.addEventListener("click", adicionarNoticia)

const listarNoticias = () => {
 const qunatidadeDeNoticia = Number(prompt('Quantas noticias vpcê deseja visualisar'))

 if(qunatidadeDeNoticia === 0 || isNaN(qunatidadeDeNoticia)){
  alert('Digite um válido')
  return
 } 


const novasNoticias = noticias.reverse()

let lista = ''
novasNoticias.forEach((noticia, index) => {
 if(index === qunatidadeDeNoticia){
  return
 }
 return lista += `${index+1}º ${noticia}\n`
})

outLista.textContent = lista
qtNoticias.textContent = qunatidadeDeNoticia
}

btnListar.addEventListener("click", listarNoticias)
