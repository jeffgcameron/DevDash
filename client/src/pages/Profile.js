import React from "react";
import Questions from '../components/Profile-Questions/requiredQs';
import Languages from '../components/Profile-Questions/languages';
import BioAndGoals from '../components/Profile-Questions/multilineQs';
import Strengths from '../components/Profile-Questions/strengths';
import Weaknesses from '../components/Profile-Questions/weaknesses';

function Profile() {
    return (
        <body>
            <header>
                <h1>DevDash</h1>
                <i className="hamburger fas fa-align-right"></i>
            </header>
            <div className="col-md-10">
                <div className="center card description text-center">
                    <div className="card-body">
                        <h2>Create Your Developer Profile</h2>
                    </div>
                </div>
                <div className="profile center card">
                    <div className="center card-body">
                        <h3>
                            Please fill out the following to complete your developer profile:
              </h3>
                        <div className="row">
                            <div className="col-6">
                                <Questions />
                            </div>
                            <div className="col-6">
                                <Languages />
                                <BioAndGoals />
                                <Strengths />
                                <Weaknesses />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}

export default Profile;