import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const ErrorMessage = ({children}) => <Paper>
  <Typography color='error'>{children}</Typography>
</Paper>

export default ErrorMessage
