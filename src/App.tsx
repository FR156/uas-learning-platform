import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProgressProvider } from './progress/ProgressContext'
import { Dashboard } from './pages/Dashboard'
import { ModulePage } from './pages/ModulePage'
import { UnitPage } from './pages/UnitPage'
import { PracticePage } from './pages/PracticePage'
import { QuizPage } from './pages/QuizPage'
import { ProgressPage } from './pages/ProgressPage'

export function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/modul/:moduleId" element={<ModulePage />} />
            <Route path="/modul/:moduleId/latihan" element={<PracticePage />} />
            <Route path="/unit/:unitId" element={<UnitPage />} />
            <Route path="/latihan" element={<PracticePage />} />
            <Route path="/kuis" element={<QuizPage />} />
            <Route path="/progres" element={<ProgressPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProgressProvider>
  )
}
