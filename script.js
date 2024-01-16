
// code for burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  // Toggle burger menu animation
  burger.classList.toggle('toggle');
});

// code for the search box

// const youtubeChannels = [
//   { name: 'Channel 1', page: 'page1.html', anchor: 'channel1' },
//   { name: 'Channel 2', page: 'page2.html', anchor: 'channel2' },
//   { name: 'Channel 3', page: 'page3.html', anchor: 'channel3' },
//   // Add more channels as needed
// ];

document.addEventListener('click', function (event) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  
  // Hide suggestions when clicking outside the suggestion box
  if (!event.target.closest('#search-container')) {
      suggestionsContainer.style.display = 'none';
  }
});

function showSuggestions() {
  const input = document.getElementById('search-input');
  const suggestionsContainer = document.getElementById('suggestions-container');
  const searchTerm = input.value.toLowerCase();

  if (!searchTerm) {
      // Hide suggestions when the input is empty
      suggestionsContainer.style.display = 'none';
      return;
  }

  const matchingChannels = youtubeChannels.filter(channel => channel.name.toLowerCase().startsWith(searchTerm));

  // Display suggestions
  suggestionsContainer.innerHTML = '';
  matchingChannels.forEach(channel => {
      const suggestionDiv = document.createElement('div');
      suggestionDiv.textContent = channel.name;
      suggestionDiv.onclick = function() {
          input.value = channel.name;
          suggestionsContainer.style.display = 'none';
      };
      suggestionsContainer.appendChild(suggestionDiv);
  });

  // Show suggestions container
  suggestionsContainer.style.display = matchingChannels.length > 0 ? 'block' : 'none';
}


function searchChannel() {
  const input = document.getElementById('search-input');
  const searchTerm = input.value.toLowerCase();

  // Perform search based on the searchTerm
  const matchingChannel = youtubeChannels.find(channel => channel.name.toLowerCase() === searchTerm);

  // Redirect to the channel's page and anchor when the search button is clicked
  if (matchingChannel) {
      redirectToChannelPage(matchingChannel.page, matchingChannel.anchor);
  } else {
      alert('No matching channel found.');
  }
}

function redirectToChannelPage(page, anchor) {
  // Redirect to the specified page and anchor
  window.location.href = `${page}#${anchor}`;
}

