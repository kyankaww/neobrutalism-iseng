import PageContainer from './components/layout/PageContainer'
import NoiseOverlay from './components/noise/NoiseOverlay'
import Hero from './sections/Hero/Hero'
import useLenis from './hooks/useLenis'
import CustomCursor from './components/cursor/CustomCursor'
import MainHall from './sections/MainHall/MainHall'
import FloatingQuotes from './components/ui/FloatingQuotes'
import PolaroidArchive from './sections/PolaroidArchive/PolaroidArchive'
import TimelineRoom from './sections/TimelineRoom/TImelineRoom'
import HiddenMessages from './sections/HiddenMessages/HiddenMessages'
import ArchiveWall from './sections/ArchiveWall/ArchiveWall'
import LateNightRoom from './sections/LateNightRoom/LateNightRoom'
import FinalLetterRoom from './sections/FinalLetterRoom/FinalLetterRoom'
import EndingRoom from './sections/EndingRoom/EndingRoom'
import LoaderScreen from './components/system/LoaderScreen'
import AmbientAudio from './components/system/AmbientAudio'
import Vignette from './components/system/Vignette'
import SoundtrackRoom from './sections/SoundtrackRoom/SoundtrackRoom'
import AdjustmentRoom from './sections/AdjustmentRoom/AdjustmentRoom'


export default function App() {

  useLenis()

  return (
    <PageContainer>

      <LoaderScreen />

      <AmbientAudio />

      <NoiseOverlay />

      <Vignette />
      
      <CustomCursor />

      <FloatingQuotes />

      <Hero />

      <MainHall />

      <PolaroidArchive />

      <TimelineRoom />

      <SoundtrackRoom />

      <HiddenMessages />

      <ArchiveWall />

      <LateNightRoom />

      <AdjustmentRoom />

      <FinalLetterRoom />

      <EndingRoom />

    </PageContainer>
  )
}