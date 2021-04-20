import React from 'react';
import './currently.css';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import moment from 'moment'
import Moment from 'react-moment';


const api = new Api.DefaultApi()

class CurrentEventsProgress extends React.Component {

    constructor(props) {
        super(props);
        const id =  this.props.match?.params.id || moment().format('YYYY-MM-DD');
        console.log(id);

        

        this.state = { 
            events: [{id:'xyz1', time: "15:00", food:"Сharlotte"},
            {id:'pop', time: "18:00", food: "Vinaigrette"},
            {id:'pop', time: "21:00", food: "From the chief"}
        ],
            date: id 
        };

        this.handleReload = this.handleReload.bind(this);
        this.handleReload();
    }


    async handleReload(event) {
        //const response = await api.events({ date: '2021-03-25'/*this.state.targetDate*/ });
        //this.setState({ events: response });
    }


    render() {
        return <div>
            {/* <button onClick={this.handleReload}>Reload</button> */}
            <section>
            <h1> Goodies <Moment format="YYYY/MM/DD">{this.state.date}</Moment> </h1>
            <ul>
               {this.state.events.map(
                   (event) => 
                        <li key={event.id}>{event.food} {event.time}</li>)}
            </ul>
            </section>
        </div>
    }
}

export default withRouter(CurrentEventsProgress);