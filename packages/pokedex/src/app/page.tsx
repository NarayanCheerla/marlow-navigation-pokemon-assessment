"use client";
import {utils} from "utils";
import { Card, Button} from "components";

const HomePage = () => {
    return (
        <div className="flex items-center justify-center">
            <Card wrapperClassNames="border rounded-lg p-10 m-2 bg-slate-500">Welcome to Custom Card component 2</Card>
            <h1 className="text-green-500">Welome to Home page {utils()}</h1>
        </div>
    )
}

export default HomePage;