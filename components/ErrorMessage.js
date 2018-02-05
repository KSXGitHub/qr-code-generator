import Paper from 'material-ui-next/Paper'
import Typography from 'material-ui-next/Typography'

const ErrorMessage = ({children}) => <Paper>
  <Typography color='error'>{children}</Typography>
</Paper>

export default ErrorMessage
