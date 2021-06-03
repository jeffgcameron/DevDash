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
                <i class="hamburger fas fa-align-right"></i>
            </header>
            <div class="col-md-10">
                <div class="center card description text-center">
                    <div class="card-body">
                        <h2>Create Your Developer Profile</h2>
                    </div>
                </div>
                <div class="profile center card">
                    <div class="center card-body">
                        <h3>
                            Please fill out the following to complete your developer profile:
              </h3>
                        <div class="row">
                            <div class="col-6">
                                <Questions />
                            </div>
                            <div class="col-6">
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