import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


// import React, { Component } from 'react'
// import PropsType from 'prop-types'
// import { styler, theme } from '../../styles'
// import Connector from '../../utils/connector'

// const styles = styler({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
// })

// class XXX extends Component {
//   state = {
//   }

//   render() {
//     return (
//       <div className={styles.root}>
//       </div>
//     )
//   }
// }

// const ConnectedXXX = props => (
//   <Connector>
//     {
//       ({ actions, state: { app: { me } } }) => (
//         <XXX
//           me={me}
//           actions={actions.app}
//           {...props}
//         />
//       )
//     }
//   </Connector>
// )

// XXX.propTypes = {}
// XXX.defaultProps = {}

// export default ConnectedXXX
