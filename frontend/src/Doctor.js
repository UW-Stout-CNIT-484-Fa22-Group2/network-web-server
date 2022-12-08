import './Doctor.css';

const docsurname = "FillerName";
const patientname = "GenericName";
const dob = "some date idk lol";
const bloodtype = "O i thnk?";
const patientname2 = "GenericName";
const dob2 = "some date idk lol";
const bloodtype2 = "O i thnk?";
function doctor(/*docsurname, patientname, dob, bloodtype, patientname2, dob2, bloodtype2*/) {
    return(
        <div className="frame">
            <p className="title"> Welcome Back, Dr. {docsurname}!</p>
            <body className="body">
                Your Patients for today:
                <table>
                    <tr className="row">
                        <th>Name</th>
                        <th>DoB</th>
                        <th>BloodType</th>
                    </tr>
                    <tr><td>---------------------</td><td>---------------------</td><td>---------------------</td></tr>
                    <tr className="row">
                        <td>{patientname}</td>
                        <td>{dob}</td>
                        <td>{bloodtype}</td>
                    </tr>
                    <tr><td>---------------------</td><td>---------------------</td><td>---------------------</td></tr>
                    <tr className="row">
                        <td>{patientname2}</td>
                        <td>{dob2}</td>
                        <td>{bloodtype2}</td>
                    </tr>
                </table>
            </body>
        </div>
    );
} 

export default doctor;