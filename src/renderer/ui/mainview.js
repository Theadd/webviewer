import React from 'react'
import { remote } from 'electron'
import { WebView } from '../webview'

export class MainView extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      webpreferences: remote.getGlobal('sharedObj').preferences,
      options: remote.getGlobal('sharedObj').options,
      src: null
    }
  }

  componentDidMount () {
    console.log(JSON.stringify(this.state, null, '  '))
  }

  render () {
    const { webpreferences, options, src } = this.state

    return (
      <div className='container' style={{ height: '100vh' }}>
        <WebView webpreferences={ webpreferences } src={ src || options.src } />
      </div>
    )
  }
}
