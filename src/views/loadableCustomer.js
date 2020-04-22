
//loadable 实现原理 
import React, { Component } from 'react'

const  Loadable = (
    {
        loader,
        loading: Loading,
    }) =>
{ 
    return class loadableCustomer extends Component
    {
        state = {
            LoadableComponent:null
        }

        componentDidMount ()
        { 
            loader()
                .then(resp =>
                { 
                    this.setState({
                        LoadableComponent:resp.default
                    })
                })
        }
        render() {
            return ( this.state.LoadableComponent?<this.state.LoadableComponent/>:<loading/>  )
        }
    }
    
}

export default Loadable