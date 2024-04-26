const url = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/BLOB_API.php';

fetch(url)
.then(response => response.json()) // Parse the JSON response
.then(data => atob(data.data))
.then(decodedData => 
    {
        console.log("Decoded data:", decodedData);
        const img = document.getElementById('img');
        const imageData = `data:image/jpeg;base64,${decodedData}`;
        img.src = imageData;

    }
)
.catch(error => console.error('Error loading countries:', error));