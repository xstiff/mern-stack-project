
import SyncLoader from "react-spinners/SyncLoader";
import './spinner.scss'
export const Spinner = () => {
    return (
        <div className="spinner-container">
            <SyncLoader color="#36d7b7" />
        </div>
        )
}