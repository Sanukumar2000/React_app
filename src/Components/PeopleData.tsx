import { People } from "../interfaces/People";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import Table from 'react-bootstrap/Table';
interface Data {
    myPeoples: People[];
}
const PeopleData: React.FC<Data> = ({ myPeoples }) => (


  <Container>
  <Row>
    <Col>
    <Table striped bordered hover size="sm" className="text-center">

    <thead>
      <tr className="emp_list">
        <th>SL.No</th>
        <th>Name</th>
        <th>Department</th>
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
          <td>{p.dept}</td>
          <td>{p.add}</td>
          <td>{p.age}</td>
          <td>{p.mob}</td>
        </tr>
      ))}
      
    </tbody>
  </Table>
    
    </Col>
  </Row>
</Container>

    
);
export default PeopleData;
