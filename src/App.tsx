import { Grid } from "@mui/material"
import { Designer } from "./designer"
import { Properties } from "./properties"
import { ToolBar } from "./toolbar"
import { useState } from "react"
import { IComponent } from "./types"


function App() {
  const [components, setComponents] = useState<IComponent[]>([])
  const [selectedComponent, setSelectedComponent] = useState<IComponent>()

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <ToolBar
            onComponentsAdd={(data) => {
              setComponents((state: IComponent[]) => [...state, data])
            }} />
        </Grid>
        <Grid item xs={7}>
          <Designer
            components={components}
            onSelect={(com) => {
              setSelectedComponent(com)
            }} 
            onRemove={(com) => {
              setComponents((state: IComponent[]) => state.filter(it => it.dataId !== com.dataId))
            }}
            />
        </Grid>
        <Grid item xs={3}>
          <Properties
            component={selectedComponent}
            onComponentsUpdate={((updatedItem) => {
              setComponents((state: IComponent[]) => {
                return state.map(it => {
                  if (it.dataId === updatedItem.dataId) return updatedItem
                  return it
                })
              })
            })}
          />
        </Grid>
      </Grid>
    </>
  )
}


export default App