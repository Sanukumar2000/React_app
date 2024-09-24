import { People } from "../interfaces/People";
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';
interface Data {
    myPeoples: People[];
}
const PeopleData: React.FC<Data> = ({ myPeoples }) => (

    <Table striped bordered hover size="sm">

    <thead>
      <tr>
        <th>SL.No</th>
        <th>Name</th>
        <th>Address</th>
        <th>Age</th>
        <th>Phone No.</th>
      </tr>
    </thead>
    <tbody>
      {myPeoples.map((p,index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{p.Name}</td>
          <td>{p.add}</td>
          <td>{p.age}</td>
          <td>{p.mob}</td>
        </tr>
      ))}
      
    </tbody>
  </Table>
);
export default PeopleData;
