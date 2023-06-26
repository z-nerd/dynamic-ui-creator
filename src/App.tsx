import { Grid } from "@mui/material"
import { Designer } from "./designer"
import { Properties } from "./properties"
import { ToolBar } from "./toolbar"
import { useState } from "react"
import { IComponents } from "./types"


function App() {
  const [components, setComponentsp] = useState<IComponents[]>([])

  console.log(components);
  

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <ToolBar onComponentsAdd={ (data) => {
            setComponentsp((state: any) => [...state, data])
          }}/>
        </Grid>
        <Grid item xs={7}>
          <Designer components={components}/>
        </Grid>
        <Grid item xs={3}>
          <Properties />
        </Grid>
      </Grid>
    </>
  )
}


export default App