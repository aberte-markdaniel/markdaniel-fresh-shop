


// Array of inquiry subjects
const inquirySubjects = [
    "Order Inquiry",
    "Delivery Issue",
    "Product Availability",
    "Request for Organic Produce List",
    "Billing or Payment Question",
    "Feedback on Recent Purchase",
    "Wholesale Inquiry"
];

// Function to populate subject dropdown
function populateInquirySubjects() {
    const subjectDropdown = document.getElementById("inquiry-subject");
    inquirySubjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectDropdown.appendChild(option);
    });
}

// Call the function after DOM content has loaded
document.addEventListener("DOMContentLoaded", populateInquirySubjects);


