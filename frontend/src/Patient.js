import './Patient.css';

const patientfirst = "Jane";
const patientname = "Jane Doe";
const dob = "some date idk lol";
const bloodtype = "O i thnk?";
function patient(/*patientfirst, patientname, dob, bloodtype */) {
    return(
        <div className="frame">
            <p className="title"> Welcome Back, {patientfirst}!</p>
            <body className="body">
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
                </table>
            </body>
        </div>
    );
} 

export default patient;