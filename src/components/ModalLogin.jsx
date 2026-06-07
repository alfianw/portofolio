import '../style/componentStyle/modal.css'

const ModalLogin = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-wrapper">
                <button onClick={onClose} className="button-modal">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalLogin;
