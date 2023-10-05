import Banner from "./components/Banner";


export default function App() {
  return (
    <>
    <Banner 
      variant="congratulations"
    />
    <br />

    <Banner
      variant="attention"
    />

    <br />

    <Banner
      variant="problem"
    />
    
    <br />

    <Banner 
      variant="update"
    />

    </>
  )
}