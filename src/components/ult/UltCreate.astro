---
const apiUrl = import.meta.env.DEV_API;
---

<form class="create-ult">
  <textarea
    name="ult-text"
    placeholder="Write your feelings..."
    autocapitalize="sentences"
    minlength={1}
    maxlength={100}></textarea>
  <button id="create-ult" type="submit"> Post</button>
</form>

<style>
  .create-ult {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: space-between;
  }
  textarea {
    width: auto;
    height: 100px;
    resize: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
  }
  button {
    width: 100px;
  }
</style>

<script define:vars={{ apiUrl }}>
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textAreaValue = e.target[0].value;

    (async () => {
      const response = await fetch(apiUrl + "/ult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "user-token": localStorage.getItem("user-token"),
        },
        body: JSON.stringify({
          message: textAreaValue,
        }),
      });
      const jsonResponse = await response.json();

      const { error, code, data } = jsonResponse;

      if (error) {
        console.error("CODE:", code);
        console.error(data);
      }
      console.log("CODE:", code);
      console.log("DATA:", data);
    })();
  });
</script>
