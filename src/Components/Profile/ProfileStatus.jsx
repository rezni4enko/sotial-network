import React from "react";
import Preloader from '../common/Preloader/Preloader';
import c from './Profile.module.css';


class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status,
   }
   activateEditMode() {
      this.setState({
         editMode: true
      })
   }
   deactivateEditMode() {
      this.setState({
         editMode: false
      })
      this.props.getUpdateStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })

   }

   // componentDidUpdate(prevProps, prevState) {
   //    if (this.state.status !== prevState.status) this.setState(
   //       {
   //          status: this.props.status
   //       }
   //    )

   //    let a = this.state
   //    let b = this.props
   //    console.log('hello')
   // }

   render() {
      console.log(this.props.status)
      return <div>
         {!this.state.editMode &&
            <div>
               <span onClick={this.activateEditMode.bind(this)}>{this.props.status || '---------'}</span>
            </div >
         }
         {
            this.state.editMode &&
            <div>
               <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status}
                  onBlur={this.deactivateEditMode.bind(this)} />
            </div>
         }

      </div >
   }
}

export default ProfileStatus