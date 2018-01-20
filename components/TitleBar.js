import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import title from '../models/title'

export default () => <div>
  <AppBar position='static'>
    <Toolbar>
      <Typography type='title' color='inherit'>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
</div>
