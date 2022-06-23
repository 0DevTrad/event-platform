import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"
import { Header } from "./lib/components/Header"
import { Lesson } from "./lib/components/Lesson"
import { Sidebar } from "./lib/components/Sidebar"
import { Video } from "./lib/components/Video"


function App() {

  return (
    <div>
      <Header />
      <Sidebar />
      <Video />
      <Lesson />
    </div>
  )
}

export default App
