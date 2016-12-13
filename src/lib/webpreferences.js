
const webPreferencesDefaults = {
  allowDisplayingInsecureContent: 1,
  allowRunningInsecureContent: 1,
  webSecurity: 0,
  javascript: 1
}

export const webPreferences = (other = {}) => (
  (prefs => (
    Object.keys(prefs).map(key => (
      `${key}=${prefs[key]}`
    )).join(', ')
  ))(Object.assign({}, webPreferencesDefaults, other))
)
