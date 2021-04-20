import React from 'react';
import './currently.css';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import moment from 'moment'
import Moment from 'react-moment';


const api = new Api.DefaultApi();
//let response;

class CurrentEventsProgress extends React.Component {

    constructor(props) {
        
        super(props);
        const id =  this.props.match?.params.id || moment().format('YYYY-MM-DD');
        console.log(id);

        

        this.state = { 
            events: [
                {id:'xyz1', date: "2021-04-20", city: "Minsk", temperature: "20"},
                {id:'pop1', date: "2021-04-21", city: "Minsk", temperature: "17"},
                {id:'pop2', date: "2021-04-22", city: "Minsk", temperature: "6"},
                {id:'pop3', date: "2021-04-23", city: "Minsk", temperature: "15"},
                {id:'pop4', date: "2021-04-24", city: "Minsk", temperature: "8"},
                {id:'pop5', date: "2021-04-25", city: "Minsk", temperature: "19"},
                {id:'pop6', date: "2021-04-26", city: "Minsk", temperature: "14"}
            ],
            date: id 
        };

        this.handleReload = this.handleReload.bind(this);
        this.handleReload();
    }


    async handleReload(event) {
        //response = await api.events({ date: '2021-03-25'/*this.state.targetDate*/ });
        //this.setState({ events: response });
    }


    render() {
        return <div>
            {/* <button onClick={this.handleReload}>Reload</button> */}
            <section>
            <h1> Weather prognoze</h1>
            <ul>
               {this.state.events.map(
                   (event) => 
                        <li key={event.id}>{event.city}: At {event.date} we are expecting {event.temperature}.</li>)}
            </ul>
            </section>
        </div>
        
    }
}

export default withRouter(CurrentEventsProgress);