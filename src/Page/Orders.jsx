import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

import MySelect from '../Component/Form/MySelect'
import MyInput from '../Component/Form/MyInput'

import { OrdersThunk, OrderDetailThunk, handleChangeInput } from '../Store/Order'

const OrderDialog = ({ OID, show, handleClose }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const data = useSelector((state) => { return state.Order.OrderDetail })

  useEffect(() => {
    setIsLoading(true)
    dispatch(OrderDetailThunk(OID))
  }, [dispatch, OID])

  useEffect(() => {
    setIsLoading(false)
  }, [data])

  const Date2Input = (theDate) => {
    let a = new Date(theDate)
    return `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(2, "0")}-${String(a.getDate()).padStart(2, "0")}`
  }

  return (
    <Modal show={show} centered scrollable onHide={handleClose} size='xl' style={{ maxHeight: "800px", marginTop: "80px" }}>
      {
        isLoading ? <Spinner animation="border" role="status"></Spinner> :
          <>
            <Modal.Header closeButton>
              <Modal.Title>Order Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="CustomerID">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Customer ID"
                      value={data.CustomerID}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "CustomerID" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="OrderDate">
                    <Form.Label>Order Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Order Date"
                      value={Date2Input(data.OrderDate)}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "OrderDate" }))}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="ShipName">
                    <Form.Label>Ship Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ship Name"
                      value={data.ShipName}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShipName" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Shipper">
                    <Form.Label>Shipper</Form.Label>
                    <Form.Select
                      type="text"
                      placeholder="Shipper"
                      defaultValue={data.Shipper}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "Shipper" }))}
                    >
                      <option value={1}>Speedy Express</option>
                      <option value={2}>United Package</option>
                      <option value={3}>Federal Shipping</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="ShipRegion">
                    <Form.Label>Ship Region</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ship Region"
                      value={data.ShipRegion}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShipRegion" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="ShipCountry">
                    <Form.Label>Ship Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ship Country"
                      value={data.ShipCountry}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShipCountry" }))}
                    />
                  </Form.Group>
                </Col>

              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="ShipCity">
                    <Form.Label>Ship City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ship City"
                      value={data.ShipCity}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShipCity" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="ShipPostalCode">
                    <Form.Label>Ship PostalCode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ship PostalCode"
                      value={data.ShipPostalCode}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShipPostalCode" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="ShippedDate">
                    <Form.Label>Shipped Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Shipped Date"
                      value={Date2Input(data.ShippedDate)}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShippedDate" }))}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Form.Group className="mb-3" controlId="ShipAddress">
                  <Form.Label>Ship Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ship Address"
                    value={data.ShipAddress}
                    onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "ShipAddress" }))}
                  />
                </Form.Group>
              </Row>
            </Modal.Body>

            <Modal.Header>
              <Modal.Title>Employee Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="Employee">
                    <Form.Label>Employee</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Employee"
                      disabled value={data.Employee}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "Employee" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="JobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Job Title"
                      disabled value={data.JobTitle}
                      onChange={(el) => dispatch(handleChangeInput({ data: el.target.value, ColName: "JobTitle" }))}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control type="text" placeholder="Region" disabled value={data.Region} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Country" disabled value={data.Country} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" disabled value={data.City} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="PostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Postal Code" disabled value={data.PostalCode} />
                  </Form.Group>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Form.Group className="mb-3" controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" disabled value={data.Address} />
              </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </>
      }
    </Modal>
  )
}

const Orders = (props) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [OID, setOID] = useState(0)
  const Shipper = useRef("")
  const OrderDate = useRef("")
  const ordersdata = useSelector((state) => { return state.Order.data })
  const isLoading = useSelector((state) => { return state.Order.isLoading })

  const Options = [
    { Label: "Speedy Express", Value: "1" },
    { Label: "United Package", Value: "2" },
    { Label: "Federal Shipping", Value: "3" },
  ]

  const handelSearch = () => {
    dispatch(OrdersThunk())
  }

  const OpenUpdateWindow = (OrderID) => {
    setOID(OrderID)
    setShow(true)
  }

  return (
    <>
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Search Condition</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Row>
                <Col>
                  <MyInput type="Date" label="Order Date" ref={OrderDate} offset={3} ></MyInput>
                </Col>
                <Col>
                  <MySelect data={Options} label="Shipper" ref={Shipper} offset={3} ></MySelect>
                </Col>
                <Col>
                  <Button onClick={handelSearch}>Search</Button>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Result</Accordion.Header>
          <Accordion.Body>
            {
              isLoading ? <Spinner animation="border" role="status"></Spinner> :
                ordersdata.length > 0 ? <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#a8a8a8", color: "white"}}>Customer</th>
                      <th style={{ backgroundColor: "#a8a8a8", color: "white"}}>Employee</th>
                      <th style={{ backgroundColor: "#a8a8a8", color: "white"}}>Order Date</th>
                      <th style={{ backgroundColor: "#a8a8a8", color: "white"}}>Shipper</th>
                      <th style={{ backgroundColor: "#a8a8a8", color: "white"}}>Ship Date</th>
                      <th style={{ backgroundColor: "#a8a8a8", color: "white"}}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ordersdata.map(item => (
                        <tr key={item.OrderID}>
                          <td>{item.CustomerID}</td>
                          <td>{item.Employee}</td>
                          <td>{new Date(item.OrderDate).toDateString()}</td>
                          <td>{item.ShipName}</td>
                          <td>{new Date(item.ShippedDate).toDateString()}</td>
                          <td><Button onClick={() => OpenUpdateWindow(item.OrderID)}>Update</Button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table> : <div>no data</div>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <OrderDialog
        OID={OID}
        show={show}
        handleshow={() => setShow(true)}
        handleClose={() => setShow(false)}>
      </OrderDialog>
    </>
  )
}

export default Orders