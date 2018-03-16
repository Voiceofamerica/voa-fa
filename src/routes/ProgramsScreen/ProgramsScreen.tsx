
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
// import { programsScreenLabels } from 'labels'

import ClipPrograms from './ClipPrograms'
import GalleriesPrograms from './GalleriesPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'clip' | 'gallery' | 'video'

const CLIP: ProgramType = 'clip'
const GALLERY: ProgramType = 'gallery'
// const VIDEO: ProgramType = 'video'

interface Props extends RouteComponentProps<void> {
}

interface State {
  programType: ProgramType
}

class ProgramsScreen extends React.Component<Props, State> {
  state: State = {
    programType: CLIP,
  }

  setProgramType = (programType: ProgramType) =>
    this.setState({ programType })

  renderPrograms () {
    const { history } = this.props
    const { programType } = this.state
    if (programType === CLIP) {
      return <ClipPrograms history={history} />
    } else if (programType === GALLERY) {
      return <GalleriesPrograms history={history} />
    } else {
      throw new Error(`Invalid programType ${programType}`)
    }
  }

  renderProgramTypes () {
    const { programType } = this.state

    return (
      <div className={programTypeNav}>
        <div className={programType === CLIP ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(CLIP)}>
          Clip
        </div>
        <div className={programType === GALLERY ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(GALLERY)}>
          Gallery
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={programsScreen}>
        {this.renderPrograms()}
        {this.renderProgramTypes()}
      </div>
    )
  }
}

export default ProgramsScreen
