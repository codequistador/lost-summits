import FilterHdrIcon from '@material-ui/icons/FilterHdr'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import NatureIcon from '@material-ui/icons/Nature'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'

function RenderIcon(color) {
  const icons = {
    blue: () => FilterHdrIcon,
    red: () => WhatshotIcon,
    white: () => AcUnitIcon,
    green: () => NatureIcon,
    yellow: () => BeachAccessIcon,
  }
  return icons[color]()
}

export default RenderIcon
