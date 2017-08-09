
export const optionDefinitions = [
  {
    name: 'src',
    alias: 's',
    description: 'Open specified page in a small WebView in a self-contained window.',
    multiple: false,
    defaultOption: true,
    defaultValue: 'https://www.airconsole.com/',
    typeLabel: '[underline]{url}'
  },
  {
    name: 'pageVisibility',
    description: `Page would be forced to be always in visible or hidden state once set, instead of reflecting current window's visibility. Users can set it to [bold]{true} to prevent throttling of DOM timers.`,
    defaultValue: true,
    type: Boolean
  },
  {
    name: 'partition',
    type: String
  }
]
