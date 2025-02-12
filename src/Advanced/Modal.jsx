// Importing the React library and ReactDOM for creating components and rendering to the DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the CSS file for styling the modal
import './modal.css';

// Defining the Modal component
// The component accepts 'onClose' as a prop to handle modal closure
const Modal = ({ onClose }) => {
    // Using React Portals to render the modal into a specific DOM node ('modal-root')
    return ReactDOM.createPortal(
        // JSX content of the modal
        <div className='modal'>
            {/* Modal heading */}
            <h2>This is a modal</h2>
            {/* Button to close the modal; triggers the 'onClose' function passed as a prop */}
            <button onClick={onClose}>Close Modal</button>
        </div>,
        // Specify the DOM node where this modal will be rendered
        document.getElementById('modal-root')
    );
};

// Exporting the Modal component for reuse
export default Modal;
