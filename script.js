const button = document.querySelector('#btn')
const rgb = document.querySelector('#rgb')
const padrao = document.querySelector('#padrao')
const cor = document.querySelector('#cor')

var estado = 1

rgb.addEventListener('click', ()=>{
  estado = 1
})

padrao.addEventListener('click', ()=>{
  estado = 2
})

function corRGB(){
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return [r, g, b]
     }

function corPadrao(){
  const cor =  ['Black', 'grey11', 'grey21', 'grey31', 'DimGray', 'Gray', 'DarkGray', 'Silver', 'LightGrey', 'Gainsboro', 'SlateBlue', 'SlateBlue1', 'SlateBlue2', 'DarkSlateBlue', 'MidnightBlue', 'Navy', 'DarkBlue', 'MediumBlue', 'Blue', 'CornflowerBlue', 'RoyalBlue', 'DodgerBlue', 'DeepSkyBlue', 'LightSkyBlue', 'SkyBlue', 'LightBlue', 'SteelBlue', 'LightSteelBlue2', 'SlateGray', 'LightSlateGray'
      ]
  const random = Math.floor(Math.random() * cor.length)
  return cor[random]
     }



button.addEventListener('click', () => {
  if(estado == 1){
    let color = corRGB()
    document.body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`

    cor.innerText = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }
  else if(estado == 2){
    let color = corPadrao()
    document.body.style.background = color

    cor.innerText = color
  }

      }) 
