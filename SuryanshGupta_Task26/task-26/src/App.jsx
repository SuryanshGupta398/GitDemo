import './App.css'
import Card from './components/Card'

function App() {

  const information = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkLu3TppRBNPsBodG1zSZDT9PkNBPiDQZ8ipe2d3ASwj_Fw0TtkeODNx3&s=10"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90yvUYklJ3mbshI1rsdQIroNTjTOmSwWZ3XhovFH8Ko9C6P7Yt6M41kbW&s=10"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP87AePqTS2M4tgucTzHORP9ZnsB_6ycDH7fsCuQcg5Q&s=10"
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYRiJ6QBasKMFkZ_AWBNaF6dkOoBqKSdTYjgr3dYbMQ&s=10 "
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfChKBTi0IkOs10w4-qU_R93FSMOym92poLwFhxyW6XA&s=10"
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxp4mZtZn72_5I4i-WC_RooTuM4w8sFWweC3VysOEcww&s=10"
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o9M8JiO3etevnc8kdRS0MRDbb7BkRVdQmrD0vXNcAg&s=10"
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViO19VPkUzFkBKfm67antlWh2Kk-ENoevY7OfuxKMIQ&s=10"
    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahziIdid2lNCvCwuiEv7v0sSc1WcK-ea9kwckkA4ELQ&s=10"
    },
    {
      id: 11,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHFZ2S1xgbxUkRFwJU9nrPFN9M1AeuQtCrbFQkoh7Tw&s=10"
    },
    {
      id: 12,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5591pNxGN1z6QFTPP6ik_L-U4-X8nLFcs2sersL-dA&s=10"
    }
  ]

  return (
    <>
      <div className='w-full bg-black font-serif'>
        <h2 className='text-xl text-center text-violet-400 font-bold pt-15'>All the cards are here.</h2>
        <Card data={information} />
      </div>
    </>
  )
}

export default App;