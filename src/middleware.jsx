import { NextResponse } from 'next/server';
import React from 'react';

const middleware = (request) => {
    if(request.nextUrl.pathname.startsWith('/about')){
        return NextResponse.redirect(new URL('/contact', request.url))
    }


};

export default middleware;