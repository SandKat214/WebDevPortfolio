// Import Dependencies
import React, { useState } from "react";
import StaffRow from "../components/StaffRow";


function StaffPage() {
    // State Variables
    const [results, setResults] = useState([]);

    // Load results from the API
    const loadStaff = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const people = await response.json();
            setResults(people.results);
        } catch (err) {
            err.message = "Currently unable to retrieve staff data from API.";
            alert(err.message);
        };
    };

    // Display table
    return (
        <>
            <h2>Staff Directory</h2>

            <article>

                <p className="intro">
                    This page uses the <a href="https://randomuser.me/documentation" className="external">Random User Generator</a> API to simulate staff information. Click the button to add 10 staff members into the table below.
                </p>

                <button id="getStaff" onClick={loadStaff}>Get Staff</button>

                <table className="staff">
                    <caption>Staff Information:</caption>

                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name & Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody id="staffData">
                        {results.map((person, i) => 
                            <StaffRow
                                person={person}
                                key={i}
                            />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;
