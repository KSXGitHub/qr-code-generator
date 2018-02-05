import AppBar from 'material-ui-next/AppBar'
import Toolbar from 'material-ui-next/Toolbar'
import Typography from 'material-ui-next/Typography'
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
