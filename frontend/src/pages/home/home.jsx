import { BigHeader } from "../../components/headers/bigheader"
import './home.scss'
import { Documentation } from "../../components/home/doc/doc"

export const Home = () => {
    return(
            <div className="home-container">
                <Documentation />
            </div>
    )
}