export default function GET(response) {

    const data = fetch('https://dummyjson.com/products')
    

    return new Response(JSON.stringify(users))
}