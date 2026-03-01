
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const loadCountries=async()=>{
  const res=await fetch('https://openapi.programming-hero.com/api/all')
  const data=await res.json()
  return data
}

function App() {
  const countriesPromise=loadCountries()
 

  return (
    <>

      <h1>World Wide</h1>
      <Suspense fallback={<h2>load countries</h2>}>
        <Countries allCountries={countriesPromise}></Countries>
      </Suspense>
      
   
    </>
  )
}

export default App
