const config = { host: "http://localhost:3002" };
export default async function getHomeData() {
    const data = await fetch(config.host + "/api/home").then((data) =>
        data.json()
    );
    return data;
}
