import { useEffect } from "react";

const AgeVerificationModal = ({ onAccept, onReject }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="age-overlay">
            <div className="age-modal">
                <h4>Age Verification</h4>
                <p>Are you 18+ years old?</p>

                <div className="age-buttons">
                    <button className="btn btn-success" onClick={onAccept}>
                        Yes
                    </button>
                    <button className="btn btn-danger" onClick={onReject}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerificationModal;