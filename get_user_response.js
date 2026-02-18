async function askTheDog() {
    const question = document.getElementById('user-input').value;
    
    const response = await fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question })
    });

    const data = await response.json();
    document.getElementById('chat-output').innerText = data.answer;
}