# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Swipe"
      id: "index"
      location: "example#getting-started" # Supersonic module#view type navigation
    }
    {
      title: "Upload"
      id: "settings"
      location: "example#settings"
    }
    {
      title: "Results"
      id: "results"
      location: "example#results"
    }
  ]

  # rootView:
#   location: "pictures#index"

  preloads: [
  ]

  drawers:
    left:
      id: "leftDrawer"
      location: "example#drawer"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"
