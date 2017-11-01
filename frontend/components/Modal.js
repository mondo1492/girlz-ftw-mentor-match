import React from 'react';

class Modal extends React.Component {
   render() {
     if (this.props.isOpen === false)
       return null

     let modalStyle = {
       position: 'fixed',
       top: '50px',
       left: '50%',
       maxWidth: '100%',
       maxHeight: '70%',
       overflowY: 'scroll',
       padding: '20px',
       transform: 'translate(-50%, 10px)',
       zIndex: '1001',
       background: '#fff'
     }

     if (this.props.width && this.props.height) {
       modalStyle.width = this.props.width + 'px'
       modalStyle.height = this.props.height + 'px'
       modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
       modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
       modalStyle.transform = null
     }

     if (this.props.style) {
       for (let key in this.props.style) {
         modalStyle[key] = this.props.style[key]
       }
     }

     let backdropStyle = {
       overflowY: 'hidden',
       position: 'fixed',

       top: '0px',
       left: '0px',
       bottom: '0',
       right: '0',
       zIndex: '1000',
       background: 'rgba(0, 0, 0, 0.5)'
     }

     if (this.props.backdropStyle) {
       for (let key in this.props.backdropStyle) {
         backdropStyle[key] = this.props.backdropStyle[key]
       }
     }

     return (
       <div className={this.props.containerClassName}>
         <div className={this.props.className} style={modalStyle}>
           {this.props.children}
         </div>
         {!this.props.noBackdrop &&
             <div className={this.props.backdropClassName} style={backdropStyle}
                  onClick={e => this.close(e)}/>}
       </div>
     )
   }

   close(e) {
     e.preventDefault()

     if (this.props.onClose) {
       this.props.onClose()
     }
   }
 }

 export default Modal;
