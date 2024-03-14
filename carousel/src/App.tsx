import { useCallback, useState } from 'react'
import './App.css'
import { benefits } from './utlis/consts'
import { CarouselItem } from './components/CarouselItem'

function App() {
  const [selected, setSelected] = useState<number>(0)

  const changeSelected = useCallback((index: number) => () => {
    setSelected(index)
  }, [setSelected])

  return (
    <>
      <h1>Решайте задачи, опираясь<br />на данные о рынке труда</h1>
      <div className="wrapper">
        <div>
          {
            benefits.map((el, index) => <CarouselItem desc={el.desc} icon={el.icon} onClick={changeSelected(index)} selected={index === selected} title={el.title} key={el.title} />)
          }
        </div> 
        <img src={benefits[selected].img} alt="" />
      </div>
    </>
  )
}

export default App
