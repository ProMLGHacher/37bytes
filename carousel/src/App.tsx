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
    <main>
      <h1>Решайте задачи, опираясь<br />на данные о рынке труда</h1>
      <div className="wrapper">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {
            benefits.map((el, index) => <CarouselItem desc={el.desc} icon={el.icon} onClick={changeSelected(index)} selected={index === selected} title={el.title} key={el.title} />)
          }
        </div>
        <div style={{
          position: 'relative'
        }}>
          {
            benefits.map((el, index) => <img className={`image ${index === selected && 'active'}`} src={el.img} alt="" />)
          }
        </div>
      </div>
    </main>
  )
}

export default App
