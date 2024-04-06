document.addEventListener('DOMContentLoaded', function() {
    // Load reviews from localStorage if available
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Function to display reviews
    function displayReviews() {
        var reviewsContainer = document.getElementById("reviewsContainer");
        reviewsContainer.innerHTML = '';
        reviews.forEach(function(review) {
            var reviewHTML = `
                <div class="card mb-3">
                    <div class="card-body">
                        <p class="card-text">${review.content}</p>
                        <p class="card-text"><small class="text-muted">${review.author} - ${review.date}</small></p>
                    </div>
                </div>
            `;
            reviewsContainer.innerHTML += reviewHTML;
        });
    }

    // Function to add review
    function addReview(event) {
        event.preventDefault();
        var reviewInput = document.getElementById("reviewInput").value.trim();
        if (reviewInput !== '') {
            var newReview = {
                author: "Anonymous", // You can customize this to capture user's name if you have a form
                date: new Date().toLocaleDateString(),
                content: reviewInput
            };
            reviews.push(newReview);
            localStorage.setItem('reviews', JSON.stringify(reviews)); // Save reviews to localStorage
            displayReviews();
            document.getElementById("reviewForm").reset(); // Reset the form
        }
    }

    // Event listener for form submission
    document.getElementById("reviewForm").addEventListener("submit", addReview);

    // Display reviews when the page loads
    displayReviews();
});
