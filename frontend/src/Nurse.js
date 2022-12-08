import './Nurse.css';

const nursename = "FillerName";
const patientname = "GenericName";
const patientname2 = "GenericName";
const docname = "Blah";
function nurse(/*nursename, patientname, patientname2, docname*/) {
    return(
        <div className="frame">
            <p className="title"> Welcome Back, Nurse {nursename}!</p>
            <body className="body">
                <table>
                    <tr className="row">
                        <th>Doctor</th>
                        <th>Name</th>
                    </tr>
                    <tr><td>---------------------</td><td>---------------------</td><td>---------------------</td></tr>
                    <tr className="row">
                        <td>{docname}</td>
                        <td>{patientname}</td>
                    </tr>
                    <tr><td>---------------------</td><td>---------------------</td><td>---------------------</td></tr>
                    <tr className="row">
                        <td>{docname}</td>
                        <td>{patientname2}</td>
                    </tr>
                </table>
            </body>
        </div>
    );
} 

export default nurse;