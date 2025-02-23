// export const dynamic = "force-static"

export const GET = () => {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}