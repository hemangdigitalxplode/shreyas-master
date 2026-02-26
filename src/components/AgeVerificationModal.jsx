import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AgeVerificationModal = ({ onAccept }) => {
    const [denied, setDenied] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleReject = () => {
        setDenied(true);
    };

    const handleRedirectHome = () => {
        navigate("/");
    };

    return (
        <div className="age-overlay">
            <div className="age-modal">

                {!denied ? (
                    <>
                        <h4>Age Verification!</h4>
                        <p>
                            We’d love to show you around, but we need to make sure you’re
                            old enough to go through the content ahead.
                            <br /><br />
                            Are you 18 or over?
                        </p>

                        <div className="age-buttons">
                            <button className="btn btn-success" onClick={onAccept}>
                                Yes, let's go
                            </button>
                            <button className="btn btn-outline-danger" onClick={handleReject}>
                                Not yet
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h4 className="text-danger">Access Denied!</h4>
                        <p>
                            Access to this website is restricted to individuals aged 18 and
                            over. As you do not meet the age requirement, we cannot grant
                            you access at this time.
                        </p>

                        <div className="age-buttons">
                            <button className="btn btn-dark" onClick={handleRedirectHome}>
                                Return to Home
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default AgeVerificationModal;