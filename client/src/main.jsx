import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import {ChainId, ThirdwebProvider} from "@thirdweb-dev/react";

// Adjust based on actual structure

import { StateContextProvider } from "./context";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Sepolia} clientId="2dSdHIw7zd4ZIVGGrx8UNmEEH0xjIQqsU7_VJfbGMz66TFIXjjKmoww5tKm6KEPjiEep7LbYrqIpLEZjx1pAiQ">
        <Router>
            <StateContextProvider>
            <App/>
            </StateContextProvider>
        </Router>
        </ThirdwebProvider>
)