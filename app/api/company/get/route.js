import axios from 'axios';
import { NextResponse } from "next/server";



export async function GET(req) {
    const axiosInstance = axios.create({
        httpsAgent: new (require('https').Agent)({  
          rejectUnauthorized: false  
        })
    });


    try {
        // Extract auth token from the request headers (if required)
        const authToken = req.headers.get('authorization') || "";

        // Extract query parameters from the incoming request        
        // let company_id = new URL(req.url).searchParams.get('company_id')
        
        const url = process.env.API_BASE_URL + '/jarvis/portfolio:7/brands/?page=1&search=&broad-stage=&main-stage=&sub-stage=&status=&stride-rating='
        console.log(url)
        console.log(authToken)

        // Make a GET request to your external backend API using Axios
        //const axiosResponse = await axiosInstance.get(${process.env.JARVIS_URL}/company:${company_id}
        const axiosResponse = await axiosInstance.get(url, {
            headers: {
                'Authorization': authToken,   
            }
        });
 
        return NextResponse.json(axiosResponse.data);  

    } catch (error) {
        console.log("COMPANY BY ID >>>> ", error);
        if (error.response && error.response.data) {
            // Extract specific message from axios error response if available
            // return new NextResponse(error.response.data.message || 'Something went wrong', { status: error.response.status });
            return NextResponse.json(error.response.data);
        } else {
            return new NextResponse('Something went wrong', { status: 400 });
        }
    }
}