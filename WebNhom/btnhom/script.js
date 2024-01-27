document.getElementById('backToTopBtn').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

var FocusUtility = {
  focusOnElement: function (selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.focus();
    }
  },
};

window.addEventListener("scroll", function () {
  var sideMenu = document.getElementById("side-menu");
  var navbar = document.getElementById("navbar"); // Replace 'navbar' with the actual ID of your navbar
  var scrollPosition = window.scrollY;

  // Check if the scroll position is greater than or equal to 100px
  if (scrollPosition >= 10) {
    sideMenu.style.top = "48px";
    navbar.style.top = "0"; // You may need to adjust this value based on your design
  } else {
    sideMenu.style.top = "110px";
    navbar.style.top = "50px"; // You may need to adjust this value based on your design
  }
});

function getRandomAds(arr) {
  // code lấy random 3 phần tử
}

// Lấy 3 video random
let randomAds = getRandomAds(allAds);

// Hiển thị 3 video
randomAds.forEach((ad) => {
  document.querySelector(".right-sidebar").innerHTML += generateAdHTML(ad);
});

var allAds = [
  {
    image: "/img/ad1.jpg",
    video: "/ads/ad1.mp4",
    link: "/product1",
  },
  // các video khác
];

function submitComment() {
  // Get the value from the textarea
  var commentValue = document.getElementById('commentTextarea').value;

  // Get the user avatar image
  var avatarImage = document.querySelector('.comment-avatar');

  // Create a new element to display the submitted comment and image
  var submittedCommentElement = document.createElement('div');
  submittedCommentElement.className = 'submitted-comment';

  // Display the avatar image in the submitted comment
  var avatarImageElement = document.createElement('img');
  avatarImageElement.src = avatarImage.src;
  avatarImageElement.alt = 'Avatar';
  submittedCommentElement.appendChild(avatarImageElement);

  // Display the comment text in the submitted comment
  var commentTextElement = document.createElement('div');
  commentTextElement.className = 'comment-text';
  commentTextElement.textContent = commentValue;
  submittedCommentElement.appendChild(commentTextElement);

  // Append the new element next to the comment box
  document.getElementById('submittedCommentsContainer').appendChild(submittedCommentElement);

  // Clear the textarea if needed
  document.getElementById('commentTextarea').value = '';
}
