const aligner = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
}

const itemShared = {
  maxWidth: '50%'
}

const top = {
  alignSelf: 'flex-start',
  ...itemShared
}

const bottom = {
  alignSelf: 'flex-end',
  ...itemShared
}

const CenteredFlexBox = ({item}) => <div style={aligner}>
  <div style={top} />
  <div>{item}</div>
  <div style={bottom} />
</div>

export default CenteredFlexBox
