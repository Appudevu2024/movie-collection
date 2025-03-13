
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='bg-primary'closeButton>
          <Modal.Title  className='text-light'>
          Contact Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="mb-3">
              <label for="name" className="col-form-label">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" required/>
            </div>
            <div className="mb-3">
              <label for="email" className="col-form-label">Email Id:</label>
              <input type="text" className="form-control" id="email" placeholder="abc@gmail.com" required/>
            </div>
            <div className="mb-3">
              <label for="message-text" className="col-form-label">Message:</label>
              <textarea className="form-control" id="message-text" rows="4" required></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={props.onHide}>
                                Send message
                            </Button>
        </Modal.Footer>
      </Modal>

    );
  }
  export default Modals;
  