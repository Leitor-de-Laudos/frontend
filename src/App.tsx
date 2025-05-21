import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/deafault"
import { GlobalStyles } from "./styles/global"
import { InfoUserProvider } from "./contexts/InfoUserContext"
import { ReaderReportProvider } from "./contexts/ReaderReportContext"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <InfoUserProvider>
          <ReaderReportProvider>
            <Router/>
          </ReaderReportProvider>
        </InfoUserProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
