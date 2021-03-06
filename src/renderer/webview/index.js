import React from 'react'
import ReactWebView from 'react-electron-web-view'

export const WebView = ({ style = {}, webpreferences = '', src }) => (
  <div className='WebView' style={ style }>
    <ReactWebView src={ src } webpreferences={ webpreferences } />
  </div>
)
