document.getElementById('createButton').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".delete-button").forEach(button => {
      button.addEventListener("click", async (event) => {
        const index = event.target.getAttribute("data-index");
  
        const response = await fetch(`/delete/${index}`, {
          method: "DELETE"
        });
  
        if (response.ok) {
          window.location.reload();
        } else {
          console.error("Failed to delete post");
        }
      });
    });
  });
  
  


  