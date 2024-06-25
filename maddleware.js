import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(req) {
    let Verify = Cookies.get('token')
    let url = req.url
    console.log(Verify)
    console.log(url)

    if(!Verify && url.includes('/add-jewellery')){
        return NextResponse.redirect('http://localhost:3000/')
    }

    if(Verify && url.includes('http://localhost:3000/')){
        return NextResponse.redirect("http://localhost:3000/add-jewellery")
    }
}