import './App.css'
import useFetch from "./useFetch";
import Card from "./components/Card";

const urls = Array.from(
  { length: 80 },
  () => "https://www.thecolorapi.com/random?format=json"
);

function App() {

  const { data, loading, error } = useFetch(urls);

  return (
    <>
      <div className='h-full bg-black'>
        {loading && <div className='min-h-screen content-center text-center text-white'>Loading...</div>}

        {error && <div className='min-h-screen content-center text-center text-white'>{error}</div>}

        {!loading && !error && (
          <div className='w-full flex justify-center'>
            <h1 className='w-full bg-black p-4 font-bold text-xl text-white text-center fixed'>Photos</h1>
            <div className='w-full p-15 mt-2 grid grid-cols-4 gap-2'>
              {data.map((color, index) => (
                <Card key={index} color={color.hex.value} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
