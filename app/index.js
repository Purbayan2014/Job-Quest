import { Redirect } from "expo-router";

export default Index  = () => {
    // on loading the index js redirect to the home page 
    return <Redirect href="/home" />
}