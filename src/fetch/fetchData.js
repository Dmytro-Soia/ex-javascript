/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  const button = document.querySelector("#click-to-fetch")
  const display = document.querySelector("#display-here")
  async function getData() {
    const url = "https://api.github.com/octocat";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const cat = await response.text();
      display.innerText = cat
    } catch (error) {
      console.error(error.message);
    }
  }
  button.addEventListener("click", getData);
}