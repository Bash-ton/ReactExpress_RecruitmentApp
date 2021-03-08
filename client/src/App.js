import {Component} from "react";
import './App.css';
import { Route, Switch, Link } from "react-router-dom"

//models
import ApiCall from './Model/apiCall';
import Model from './Model/model'

//presenter
import {Expertise} from './Views/Expertise'
//views
import Authentication from "./Views/Authentication";
import SignUpAdmin from "./Views/SignUpAdmin";
import AdminApplications from "./Views/AdminApplications";
import Header from "./Views/Header";
<<<<<<< HEAD
import MigrateFromOldDB from "./Views/MigrateFromOldDB";
=======
import { Page404 } from "./Views/ErrorPages";

>>>>>>> main
/**
 * Main file for the frontend
 * Handles initial import of the model and routing of the frontend app
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiCall: new ApiCall(),
            model: new Model()
        }
    }

    render() {
        return (
            <div className="applicationApp">
                <header className="recruitmentApp">
                    <Header/>
                </header>
                <Switch>
                <Route
                    exact path="/"
                    render={() => <Authentication apiCall={this.state.apiCall}/>}
                />
                <Route
                    exact path="/admin/signup"
                    render={() => <SignUpAdmin/>}
                />
                <Route
                    exact path="/user/application"
                    render={() => <Expertise model={this.state.model} apiCall={this.state.apiCall}/>}
                />
                <Route
                    exact path="/admin/applications"
                    render={() => <AdminApplications apiCall={this.state.apiCall}/>}
                />
                <Route
<<<<<<< HEAD
                    exact path="/admin/Migrate"
                    render={() => <MigrateFromOldDB apiCall={this.state.apiCall}/>}
                />

=======
                    exact path="*"
                    render={() =><Page404/>}
                />
                </Switch>
>>>>>>> main
            </div>
        );

    }
}


export default App;
