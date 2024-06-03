async function fetchData() {
    const url = 'https://linkedin-bulk-data-scraper.p.rapidapi.com/post_reactions?reactionsUrn=urn%3Ali%3Aactivity%3A7187125138054610944&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '45a9be0f45msh5fee8b8345c8781p1c85a5jsnef8c82a8cde9',
            'x-rapidapi-host': 'linkedin-bulk-data-scraper.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        document.getElementById("profiles").innerHTML = result.reactions.map(item => item.title);
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();