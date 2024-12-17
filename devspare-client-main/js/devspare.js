// // console.log('Devspare Client Side with JS.')

// const loadData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await res.json();
//     console.log(data)
// }
// loadData(data.data);


async function getAllNotification  () {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const res = await fetch("http://localhost/devspare/backend/api/v1/notifications/notification.php", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });


        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("notification", data)

        return data;
    } catch (error) {
        console.error("Error fetching data (Fetch):", error.message);
        return [];
    }
};