const monstros = [
    {
        id: 1,
        nome: 'Osvaldo',
        altura: 2,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dignissimos unde adipisci laboriosam harum. Quos perferendis quas delectus obcaecati voluptatem tenetur voluptates culpa excepturi! Recusandae doloribus nisi placeat? Magni, optio!',
        foto: 'https://robohash.org/Osvaldo'
    },
    {
        id: 2,
        nome: 'Megament',
        altura: 3,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dignissimos unde adipisci laboriosam harum. Quos perferendis quas delectus obcaecati voluptatem tenetur voluptates culpa excepturi! Recusandae doloribus nisi placeat? Magni, optio!',
        foto: 'https://robohash.org/Megament'
    },
    {
        id: 3,
        nome: 'Devinho',
        altura: 7,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dignissimos unde adipisci laboriosam harum. Quos perferendis quas delectus obcaecati voluptatem tenetur voluptates culpa excepturi! Recusandae doloribus nisi placeat? Magni, optio!',
        foto: 'https://robohash.org/Devinho'
    },
    {
        id: 4,
        nome: 'Abacate',
        altura: 1.4,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dignissimos unde adipisci laboriosam harum. Quos perferendis quas delectus obcaecati voluptatem tenetur voluptates culpa excepturi! Recusandae doloribus nisi placeat? Magni, optio!',
        foto: 'https://robohash.org/Abacate'
    },
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {document.documentElement.classList.toggle ('dark')
})

const todososmonstros = monstros.map(monstro => {
    return ` <div>
    <p>Nome: ${monstro.nome}</p>
    <p>Altura: ${monstro.altura}</p>
    <img src="${monstro.foto}">
    <p class="habilidades">habilidades: ${monstro.habilidades}</p>
    <div> `
})

secao.innerHTML = todososmonstros