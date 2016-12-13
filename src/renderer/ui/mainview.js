import React from 'react'
import { remote } from 'electron'
import { WebView } from '../webview'

export class MainView extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      webpreferences: remote.getGlobal('sharedObj').preferences
    }
  }

  render () {
    const { webpreferences } = this.state

    return (
      <div className='container' style={{ height: '100vh' }}>
        <WebView webpreferences={ webpreferences } src={ 'https://www.airconsole.com/?role=controller' } />
      </div>
    )
  }
}
