import React, {Component, useState} from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'

class Home extends Component {

    
    constructor(){
        super()
        this.state = {
            course_modules: []

        }

    }
    componentDidMount(){
        axios.get('/episodes.json')
        .then(data => {
            debugger
            let res = [] // de esta forma decimos que primero esperamos el campo vacio
            data.data.data.map((data) => { //data.data.data es la forma en como json obtiene la info mendiante la consola
                res.push({id: data.id, title: data.title, description: data.description, active: false})
                this.setState({course_modules :res})
            })
        })
        .catch(data => {
            debugger
        })
    }




    handleVideoChange(item, event){
        event.preventDefault()

        let course_modules = [...this.state.course_modules]

        course_modules.map( data => {
            data.active = false
        })

        item.active = !item.active

        course_modules[item.id = 1] = item

        this.setState({course_modules})
    }

    render(){
        return(
           <div>
               <Jumbotron />
               <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
            <p>hello wordl</p>
           </div>

        )
    }
}

export default Home;
